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
- [x] Evaluate service worker complexity vs. benefit ✅ DONE: Removed - unnecessary complexity for static site

### 3. Modern JavaScript Patterns
- [x] Convert old function declarations to modern ES6+ ✅ DONE: Arrow functions, modern syntax
- [x] Use const/let instead of var ✅ DONE: All var declarations modernized
- [x] Implement proper error handling ✅ DONE: Added to components.js
- [x] Add type checking with JSDoc comments ✅ DONE: Complete JSDoc documentation added

### 4. Architecture Simplification
- [x] Consolidate similar script blocks ✅ DONE: Created js/components.js
- [x] Improve CSS organization (keep minimal) ✅ DONE: Using CDN Bootstrap, custom CSS minimal
- [x] Clean up unused CSS rules ✅ DONE: Only core Bootstrap components used
- [x] Standardize code formatting ✅ DONE: Consistent modern ES6+ syntax

### 5. Long-term Stability
- [x] Use only web standards (no proprietary APIs) ✅ DONE: Web Components, vanilla JS
- [x] Document all custom components ✅ DONE: .claude/*.md files created
- [x] Add version pinning for critical dependencies ✅ DONE: Bootstrap pinned to 5.2.3
- [x] Create maintenance documentation ✅ DONE: CLAUDE.md, technical docs

## What NOT to Change
- ❌ Visual design or layout
- ❌ Content or copy
- ❌ Color scheme or typography
- ❌ Image handling (CDN works fine)
- ❌ Overall site structure

## Success Criteria
- [x] Reduced complexity while maintaining functionality ✅ DONE: Service worker removed, scripts consolidated
- [x] Better long-term maintainability ✅ DONE: Web Components, JSDoc, version pinning
- [x] Standards-based implementation ✅ DONE: Web standards only, no proprietary APIs
- [x] Documentation for future maintenance ✅ DONE: Complete technical documentation
- [x] Same visual output as current site ✅ DONE: Zero visual changes, full functionality preserved

## TECHNICAL MODERNIZATION COMPLETE 🎉

**Date Completed**: 2025-08-19  
**Final Commit**: 0cf5fab  
**Pull Request**: https://github.com/demoklion/jandu/pull/227

**Achievement**: 30-year technical longevity with brutally clean design preserved.

## CSS BUNDLE REDUCTION PHASE (CURRENT)

**Started**: 2025-08-20  
**Branch**: css/bootstrap-replacement  
**Goal**: Replace 150KB+ Bootstrap with <20KB custom CSS

### Phase A: Bootstrap Audit (COMPLETE ✅)
- [x] Complete Bootstrap usage inventory
- [x] Map grid system patterns
- [x] Document component usage
- [x] Create replacement strategy

### Phase B: Custom CSS Implementation (IN PROGRESS)
- [x] Create 12KB custom CSS bundle with Bootstrap equivalents
- [x] Implement CSS Grid system replacement
- [x] Build custom button and navigation systems
- [x] Add mobile navigation toggle JavaScript
- [x] Configure Playwright MCP for visual regression testing

### Visual Regression Testing Workflow (CURRENT)
**Strategy**: Incremental changes with visual validation
1. Create baseline screenshots on master branch (Bootstrap)
2. Make small CSS replacements on feature branch
3. Use Playwright MCP to compare visuals before each commit
4. Only proceed if visual regression tests pass

**Current Status**: Ready to create baseline visual tests

### Recent Updates
- **2025-08-20**: Added tests/ directory to .gitignore (commit 46b3eab)
- **Visual Testing Setup**: Configured for 0.5% threshold (not 20% - too high for pixel-perfect testing)