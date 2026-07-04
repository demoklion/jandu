#!/usr/bin/env node
/**
 * Link-existence checker — fails (exit 1) if any local link points at a file
 * that does not exist in the repo. Catches the classic "renamed a file, forgot
 * a reference" 404 (e.g. the CV PDF, css/custom.css, img/og-image.jpg).
 *
 * Scans every root-level *.html plus sitemap.xml. No dependencies.
 * Run with `npm run check-links` (also runs automatically on `git push`).
 */
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const SITE_ORIGIN = 'https://jandu.top';

// Links we never resolve to a local file.
const isExternal = (url) =>
  /^(https?:)?\/\//i.test(url) ||
  /^(mailto:|tel:|sms:|data:|javascript:|#)/i.test(url);

/** Map a URL/path to the local file it should resolve to (or null to skip). */
function resolveLocal(rawUrl, fromFile) {
  let url = rawUrl.trim();
  if (!url || isExternal(url)) return null;

  // Strip query string and fragment.
  url = url.split('#')[0].split('?')[0];
  if (!url) return null;

  try {
    url = decodeURIComponent(url);
  } catch (_) {
    /* leave as-is if it isn't valid percent-encoding */
  }

  // Directory URL -> its index.html (covers "/" -> index.html).
  if (url.endsWith('/')) url += 'index.html';

  const abs = url.startsWith('/')
    ? path.join(ROOT, url) // root-relative
    : path.resolve(path.dirname(fromFile), url); // document-relative

  return abs;
}

function extractLinks(html) {
  const urls = [];
  // Boundary before the attribute name so `data-src` / `data-href` don't match.
  const re = /(?<![-\w])(?:href|src)\s*=\s*(?:"([^"]*)"|'([^']*)')/gi;
  let m;
  while ((m = re.exec(html)) !== null) urls.push(m[1] ?? m[2] ?? '');
  return urls;
}

function extractSitemapLocs(xml) {
  const urls = [];
  const re = /<loc>\s*([^<\s]+)\s*<\/loc>/gi;
  let m;
  while ((m = re.exec(xml)) !== null) urls.push(m[1]);
  return urls;
}

const htmlFiles = fs
  .readdirSync(ROOT)
  .filter((f) => f.endsWith('.html'))
  .map((f) => path.join(ROOT, f));

const problems = [];
let checked = 0;

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, 'utf8');
  for (const raw of extractLinks(html)) {
    const abs = resolveLocal(raw, file);
    if (!abs) continue;
    checked++;
    if (!fs.existsSync(abs)) {
      problems.push({ file: path.relative(ROOT, file), link: raw, target: path.relative(ROOT, abs) });
    }
  }
}

// Validate sitemap.xml <loc> entries map to existing local files.
const sitemapPath = path.join(ROOT, 'sitemap.xml');
if (fs.existsSync(sitemapPath)) {
  const xml = fs.readFileSync(sitemapPath, 'utf8');
  for (const loc of extractSitemapLocs(xml)) {
    if (!loc.startsWith(SITE_ORIGIN)) continue; // skip non-site URLs
    let p = loc.slice(SITE_ORIGIN.length) || '/';
    if (p.endsWith('/')) p += 'index.html';
    const abs = path.join(ROOT, decodeURIComponent(p));
    checked++;
    if (!fs.existsSync(abs)) {
      problems.push({ file: 'sitemap.xml', link: loc, target: path.relative(ROOT, abs) });
    }
  }
}

if (problems.length) {
  console.error(`\n✗ Broken local links (${problems.length}):\n`);
  for (const p of problems) {
    console.error(`  ${p.file}: "${p.link}"  →  missing ${p.target}`);
  }
  console.error(`\nChecked ${checked} local links across ${htmlFiles.length} HTML files + sitemap.\n`);
  process.exit(1);
}

console.log(`✓ All ${checked} local links resolve (${htmlFiles.length} HTML files + sitemap.xml).`);
