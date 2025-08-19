# Portfolio Technical Modernization Plan

**Date**: 2025-08-19
**Branch**: feature/portfolio-overhaul
**Philosophy**: Brutally clean design + 30-year technical longevity

## Core Principles
- Preserve brutally clean visual design
- Keep existing content as-is
- Focus on technical modernization only
- Aim for 30-year stability
- Use web standards over frameworks
- Minimize dependencies

## Technical Modernization Areas

### 1. Selective Web Components
Identify specific components for web component conversion:
- [x] Email clipboard button (self-contained, reusable) ✅ DONE: EmailClipboard component in js/components.js
- [ ] Deferred iframe loader (clean encapsulation)
- [x] Year auto-updater (simple, isolated) ✅ DONE: CurrentYear component in js/components.js, used in all footers
- [x] **NOT converting**: Navigation, layout, project cards (keep simple HTML) ✅ CONFIRMED

### 2. Dependency Minimization
- [x] Review all npm dependencies - remove unused ✅ DONE: jQuery removed (commit 7963649)
- [x] Replace jQuery with vanilla JS where simple ✅ DONE: All jQuery usage eliminated
- [x] Keep Bootstrap 5 but audit for unused components ✅ DONE: Bootstrap modernized (commit 0128600)
- [ ] Evaluate service worker complexity vs. benefit

### 3. Modern JavaScript Patterns
- [ ] Convert old function declarations to modern ES6+ (PARTIALLY DONE - need to finish HTML files)
- [ ] Use const/let instead of var (PARTIALLY DONE - need to finish HTML files)
- [x] Implement proper error handling ✅ DONE: Added to components.js
- [ ] Add type checking with JSDoc comments

### 4. Architecture Simplification
- [x] Consolidate similar script blocks ✅ DONE: Created js/components.js
- [ ] Improve CSS organization (keep minimal)
- [ ] Clean up unused CSS rules
- [ ] Standardize code formatting

### 5. Long-term Stability
- [x] Use only web standards (no proprietary APIs) ✅ DONE: Web Components, vanilla JS
- [x] Document all custom components ✅ DONE: .claude/*.md files created
- [ ] Add version pinning for critical dependencies
- [x] Create maintenance documentation ✅ DONE: CLAUDE.md, technical docs

## What NOT to Change
- ❌ Visual design or layout
- ❌ Content or copy
- ❌ Color scheme or typography
- ❌ Image handling (CDN works fine)
- ❌ Overall site structure

## Success Criteria
- [ ] Reduced complexity while maintaining functionality
- [ ] Better long-term maintainability
- [ ] Standards-based implementation
- [ ] Documentation for future maintenance
- [ ] Same visual output as current site