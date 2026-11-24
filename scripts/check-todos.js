#!/usr/bin/env node
/**
 * Unfinished-content guard: fails (exit 1) if any root-level *.html still has
 * an open TODO slot. Blocks merging pages with missing images or copy.
 *
 * Markers caught:
 *   data-todo                  visible TODO slot (red dashed box on the page)
 *   [ADD_CLOUDINARY_URL_HERE]  image URL not filled in
 *   [Add caption               caption not written
 *
 * Legacy free-text "TODO:" comments in older pages are not checked.
 * Run with `npm run check-todos` (also runs on `git push` and in CI on PRs).
 */
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const MARKERS = [/\bdata-todo\b/, /\[ADD_CLOUDINARY_URL_HERE\]/, /\[Add caption/];

const files = fs.readdirSync(ROOT).filter((f) => f.endsWith('.html'));
const hits = [];

for (const file of files) {
  const lines = fs.readFileSync(path.join(ROOT, file), 'utf8').split('\n');
  lines.forEach((line, i) => {
    if (MARKERS.some((re) => re.test(line))) {
      hits.push(`${file}:${i + 1}  ${line.trim().replace(/<[^>]+>/g, '').slice(0, 100) || line.trim().slice(0, 100)}`);
    }
  });
}

if (hits.length) {
  console.error(`✗ ${hits.length} open TODO(s) — finish them before merging:\n`);
  hits.forEach((h) => console.error('  ' + h));
  process.exit(1);
}
console.log(`✓ no open TODOs in ${files.length} HTML files`);
