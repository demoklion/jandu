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
- [ ] Email clipboard button (self-contained, reusable)
- [ ] Deferred iframe loader (clean encapsulation)
- [ ] Year auto-updater (simple, isolated)
- [ ] **NOT converting**: Navigation, layout, project cards (keep simple HTML)

### 2. Dependency Minimization
- [ ] Review all npm dependencies - remove unused
- [ ] Replace jQuery with vanilla JS where simple
- [ ] Keep Bootstrap 5 but audit for unused components
- [ ] Evaluate service worker complexity vs. benefit

### 3. Modern JavaScript Patterns
- [ ] Convert old function declarations to modern ES6+
- [ ] Use const/let instead of var
- [ ] Implement proper error handling
- [ ] Add type checking with JSDoc comments

### 4. Architecture Simplification
- [ ] Consolidate similar script blocks
- [ ] Improve CSS organization (keep minimal)
- [ ] Clean up unused CSS rules
- [ ] Standardize code formatting

### 5. Long-term Stability
- [ ] Use only web standards (no proprietary APIs)
- [ ] Document all custom components
- [ ] Add version pinning for critical dependencies
- [ ] Create maintenance documentation

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