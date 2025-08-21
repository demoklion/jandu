# Visual Regression Testing Setup

**Date**: 2025-08-20  
**Purpose**: CSS Bundle Reduction - Bootstrap to Custom CSS Migration  
**Tool**: Playwright MCP Server (@playwright/mcp@latest)

## Testing Configuration

### Viewport Coverage
- **Desktop**: 1920x1080 (Desktop Chrome)
- **Mobile**: 375x667 (Mobile Safari)

### Difference Threshold
- **Configured**: 1% (0.01) difference threshold
- **Reasoning**: Practical threshold that catches meaningful visual changes while allowing minor browser rendering differences
- **Note**: Initial attempt at 0.5% was too strict for cross-browser testing

### File Structure
```
tests/
├── baseline/                           # Manual baseline images (gitignored)
│   ├── index-desktop.png
│   ├── index-mobile.png
│   ├── project1-desktop.png
│   ├── project1-mobile.png
│   ├── project2-desktop.png
│   ├── project2-mobile.png
│   ├── project3-desktop.png
│   └── project3-mobile.png
├── baseline-screenshots.spec.js        # Baseline generator
├── visual-regression.spec.js           # Automated tests
└── visual-regression.spec.js-snapshots/ # Playwright references
```

## NPM Scripts Available

```json
{
  "test:baseline": "Generate fresh baseline screenshots",
  "test:visual": "Run visual regression tests", 
  "test:visual:update": "Update snapshots after intentional changes"
}
```

## Testing Workflow

### Phase 1: Baseline Creation (COMPLETE ✅)
1. ✅ Run website on master branch with Bootstrap
2. ✅ Generate baseline screenshots using Playwright MCP
3. ✅ Save to tests/baseline/ directory (gitignored)
4. ✅ Configure NPM scripts for testing workflow
5. ✅ Document testing procedures and thresholds

### Phase 2: Incremental Testing (READY TO BEGIN)
1. Make small CSS changes on feature branch
2. Run `npm run test:visual` to detect differences
3. If differences > 1% threshold → investigate and fix
4. If differences < 1% threshold → proceed with commit
5. Update project memory with each successful migration step

### Phase 3: Validation (PENDING)
1. Final visual regression test across all pages
2. Performance comparison (bundle size verification)
3. Cross-browser compatibility check

## SETUP STATUS: COMPLETE ✅

**Date Completed**: 2025-08-20  
**Commit**: 56e9da8  
**Branch**: css/bootstrap-replacement

### What's Ready:
- ✅ Playwright MCP server configured and tested
- ✅ Baseline screenshots captured for all 4 pages
- ✅ Desktop (1920x1080) and Mobile (375x667) viewports covered
- ✅ 1% difference threshold validated as practical
- ✅ NPM scripts available for testing workflow
- ✅ tests/ directory properly gitignored
- ✅ Documentation complete in memory files

### Next Steps:
1. Begin incremental CSS replacement on individual components
2. Test each change with `npm run test:visual`
3. Use specialized agents for coordinated workflow
4. Track progress in TodoWrite and PROJECT_MEMORY.md

## MCP Server Configuration

**Location**: `.claude/CLAUDE.md`
```json
"playwright": {
    "command": "/Users/jandu/.nvm/versions/node/v22.18.0/bin/npx",
    "args": ["@playwright/mcp@latest"]
}
```

## Pages Under Test

1. **index.html** - Main portfolio page with navigation, sections
2. **project1.html** - Golem Design System case study
3. **project2.html** - Začni učit! case study  
4. **project3.html** - HeO project case study

## Bootstrap Classes Being Replaced

### High Priority (Core Layout)
- Container system: `.container`
- Grid system: `.row`, `.col-*` variants
- Navigation: `.navbar-*` classes
- Buttons: `.btn`, `.btn-default`, `.btn-outline-light`

### Medium Priority (Utilities)
- Typography: `.text-*`, `.fw-*` classes
- Spacing: `.p-*`, `.m-*`, `.mx-auto`
- Display: `.d-*` responsive utilities

### Low Priority (Polish)
- List utilities: `.list-inline`, `.list-inline-item`
- Flexbox utilities: `.justify-content-*`

## Success Criteria

- ✅ All pages pass visual regression tests (< 1% difference)
- ✅ Bundle size reduced from 150KB+ to <20KB
- ✅ Mobile navigation functionality preserved
- ✅ Responsive behavior maintained across all breakpoints
- ✅ No external CDN dependencies remaining

## Risk Mitigation

- **Small incremental changes**: Test each component replacement separately
- **Rollback strategy**: Git branch isolation allows quick reversion
- **Visual validation**: Automated screenshot comparison prevents regressions
- **Cross-device testing**: Desktop and mobile viewport coverage