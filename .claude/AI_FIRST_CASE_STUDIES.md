# AI-first redo: Generali + NTK case studies

Created 2026-11-12. Source drafts: `project5.html` (NTK) and `project6.html` (Generali) on branch
`claude/portfolio-content-addition-VsMlK` (unmerged).

## Decisions already made (by Ján)

- Remove all budget figures (CZK 1.37 bn CARDS, €1.1 bn Generali Group). They don't describe Ján's work.
- Generali: Ján **led part of** the transformation. Not all of it, not all his initiative. Say "I led …" only for his parts; credit the team.
- NTK title: **Design Lead** (the only one at NTK). Focus is design systems work.
- NTK: Ján does nothing with Clarivate Alma. Remove cataloguing, union catalogue, service-centre, ERM and ORCID/DOI/ISSN integration claims.
- Do the AI-first case study, after extensive cleanup and iteration.
- No invented metrics. Only numbers Ján can defend (counts of components, platforms, teams, institutions, or real measurements).
- Questions go to Ján as short Q&A rounds with answer options, not long text.

### Added 2026-11-16
- Index shows the 3 best projects (Generali → NTK → Golem); Charles Uni, Začni učit!, HeO move to an Archive list. Nothing deleted.
- Images: Ján adds them himself. Pages carry visible red `data-todo` slots; `scripts/check-todos.js` + `.github/workflows/check-todos.yml` fail the PR until every slot is done. Do not merge with an open TODO.
- NTK reframe: the real achievement is **preparing the tender and herding stakeholders through it**, plus design promotion work. Little hands-on design. Lead with the tender story, not DS craft.

## TODO

### 0. Before writing
- [ ] Ján reviews the rendered drafts (project4–6) and sends notes
- [ ] Q&A round: Generali (see open questions)
- [ ] Q&A round: NTK (see open questions)
- [ ] Decide what happens to project4 (Charles University): keep as-is, trim, or AI-first too?

### 1. Generali: rewrite AI-first
- [ ] New title and lede: "bringing 3 design systems into the AI era" (wording TBD)
- [ ] Target: the problem, framed as making the DS usable by both people and AI agents
- [ ] My role: which parts Ján led vs. the team/Group did
- [ ] AI section: tokens as a machine-readable contract, DS docs as agent instructions, Figma ↔ code (MCP), checking agent output against the library
- [ ] Artifacts list: only real artifacts
- [ ] Remove €1.1 bn, "I architected …" overclaims and the "Italy redesign" detail unless confirmed
- [ ] Page `<title>`: "Generali … | Ján Dugovič"; fix meta description

### 2. NTK: rewrite AI-first
- [ ] **Lead with the tender**: preparing it and herding stakeholders through it (Ján's strongest NTK achievement). Q&A: what the tender bought, who had to agree, what Ján wrote/defined (requirements, design/accessibility criteria, evaluation), outcome
- [ ] Design promotion work inside NTK (what, for whom)
- [ ] Reframe: library discovery when students go to Google/ChatGPT first (from NTK×VŠE research), only if it supports the tender story
- [ ] Core idea from the "Vizualni styl – vodovky" doc: white-label core → NTK theme → second institution as proof. "Core must be rational. NTK theme can have a soul."
- [ ] Priority ladder: usability → accessibility → functionality → consistency → implementability → brand expression
- [ ] Building the research capability (VŠE student collaboration; credit teams if quoted)
- [ ] AI angle: how AI is used in the DS work (pending Q&A)
- [ ] Role: Design Lead; drop "Dec 2023" unless confirmed; drop CZK 1.37 bn and Alma scope
- [ ] Page `<title>` and meta description

### 3. Images (see suggestions below)
- [ ] Ján picks from the list and confirms what's NDA-safe
- [ ] Produce diagrams (can be generated as SVG/PNG from code)
- [ ] Upload to Cloudinary (`jandu-top`), replace `[ADD_CLOUDINARY_URL_HERE]`, write real alt text
- [ ] Check mobile rendering

### 4. Ship
- [ ] Add both pages to the Work list on `index.html`; reorder: Generali → NTK → Golem → Charles Uni → Začni učit! → HeO (archive)
- [ ] Replace "Case study coming soon" on index with a link
- [ ] Fix meta "fintech" / "coffe" typo on all pages; nav label
- [ ] Update `sitemap.xml`
- [ ] Visual regression: `npx playwright test tests/visual-regression.spec.js`
- [ ] PR

### Later (not blocking)
- [ ] `llms.txt` + JSON-LD `Person` schema
- [ ] "How this site is built" note (Claude Code, WebMCP, Playwright)

## Image suggestions

Diagrams are NDA-safe and can be produced from code. Screenshots need a confirmation from Ján.

### Generali
| # | Image | Type | NDA risk |
|---|---|---|---|
| G1 | Hero: 3 separate design systems → one shared token layer → web / iOS / Android | Diagram | Low |
| G2 | Token architecture: primitive → semantic → component → platform modes (Figma variables panel, brand values blurred) | Diagram or redacted screenshot | Low–medium |
| G3 | "Design system as agent instructions": excerpt of the rules file agents read (CLAUDE.md / AGENTS.md-style) | Redacted screenshot or code block | Medium |
| G4 | Figma → tokens JSON → code → AI agent → review loop | Diagram | Low |
| G5 | Agent output vs. library-compliant screen, violations annotated | Side-by-side | Medium–high (only with real example) |
| G6 | Workshop / team photo | Photo | Ask team |

### NTK
| # | Image | Type | NDA risk |
|---|---|---|---|
| N1 | Hero: NTK building (concrete, glass, red signage). Own photo of a public building | Photo | Low |
| N2 | Principle → interpretation → component triptych: concrete → neutral scale → surface tokens; NTK red → primary; printed glass foil → overlay/layers | Diagram + photos | Low |
| N3 | Theme swap reveal: the same screen as white-label / NTK / another institution | 3 screens | Medium (public-sector, likely OK) |
| N4 | Research: quote card "students go to Google/ChatGPT first" + photo of synthesis/affinity map from VŠE collaboration | Card + photo | Ask students/VŠE for credit |
| N5 | Priority ladder graphic (usability first … brand expression last) | Diagram | Low |
| N6 | Contrast-normalised neutral palette with WCAG ratios | Swatches | Low |
| N7 | AI-assisted discovery concept: search answering with citations to trusted library sources | Concept screen | Only if a real concept exists |

## Open questions for Q&A

### Generali
- Which concrete AI work did you do? (Figma variables → code tokens, agent rules file, Figma MCP, evaluating agent output, something else)
- Can Generali be named, and can screenshots be shown (redacted)?
- Which parts did you lead vs. contribute to?
- Dates: 2025 → ongoing?

### NTK
- Is any of the DS work done with AI tools (agent-built prototypes, Claude Code + tokens, MCP)?
- Can the white-label → NTK theme → second-institution story be shown publicly yet?
- Can VŠE student research be quoted (with credit)?
- Start date to show?
