# Portfolio Project Memory
**Last Updated**: 2026-02-03
**Current Status**: CSS audit complete, Bootstrap migration nearly done, portfolio content branch pending

## 📋 Memory Files Index
- **PROJECT_MEMORY.md** - This file: Complete project overview and status
- **CSS_REMOVAL_LOG.md** - NEW: Active CSS class removal tracking and commit log
- **VISUAL_REGRESSION_SETUP.md** - Playwright testing configuration and workflow
- **AGENT_RECOMMENDATIONS.md** - Specialized agent roles for CSS migration
- **BOOTSTRAP_AUDIT.md** - Complete Bootstrap usage analysis
- **GRID_SYSTEM_ANALYSIS.md** - CSS Grid migration strategy
- **COMPONENTS_CATALOG.md** - Button and navigation component analysis
- **CLAUDE.md** - Project overview and MCP configuration
- **WEB_COMPONENTS_SPEC.md** - EmailClipboard and CurrentYear documentation
- **CLOUDINARY_INFO.md** - Image CDN configuration

## Project Overview
Ján Dugovič's personal portfolio website - technical modernization for 30-year longevity while preserving brutally clean design.

## 🎯 Core Principles
- Preserve brutally clean visual design
- Focus on technical modernization only  
- Aim for 30-year stability
- Use web standards over frameworks
- Minimize dependencies

## ✅ COMPLETED PHASES

### Phase 1: Technical Modernization (COMPLETE ✅)
**Completed**: 2025-08-19 | **PR**: #227 | **Status**: Merged

**Achievements**:
- **Web Components**: EmailClipboard, CurrentYear using native Custom Elements API
- **Modern JavaScript**: ES6+, proper error handling, complete JSDoc documentation
- **Build Process**: Replaced broken Gulp with clean-css-cli workflow
- **Dependencies**: Removed jQuery, modernized Bootstrap 5.2.3, cleaned package.json
- **Architecture**: Standards-based implementation for long-term maintainability

**Technical Details**:
- ✅ Email clipboard button with modern API + fallback
- ✅ Auto-updating year component  
- ✅ Deferred image loading optimization
- ✅ Service worker removed (unnecessary complexity)
- ✅ npm scripts: `minify-css`, `build`, `serve`

### Phase 2: Security Hardening (COMPLETE ✅)
**Completed**: 2025-08-20 | **PR**: #229 | **Status**: Merged

**Security Fixes**:
- ✅ **DOM XSS in fullImg.src**: Added URL validation before assignment
- ✅ **DOM XSS in innerHTML**: Replaced with safe createElement + textContent
- ✅ **DOM XSS in data-src**: Validated URLs in lazy loading before setting src
- ✅ **URL Validation**: Comprehensive `isValidImageUrl()` function
  - Blocks `javascript:` and `data:` schemes
  - Validates URL structure and protocol (http/https only)
  - Proper error logging for blocked security violations

## ✅ COMPLETED PHASES

### Phase 3: CSS Bundle Reduction (COMPLETE ✅)
**Completed**: 2025-08-29 | **Status**: 90% Bootstrap elimination achieved

**Goal**: Bootstrap 150KB+ → Custom CSS <20KB ✅ **ACHIEVED**

**Final Results**:
- **Lines removed**: 11,596 total (12,820 → 1,224 lines)
- **Size reduction**: 149KB → 24KB (84% reduction) 
- **Method**: PurgeCSS automated removal + manual verification
- **Visual tests**: All passed with <1% difference threshold
- **Independence**: External CDN dependency eliminated ✅

**Implementation Summary**:
- **Phase A**: Bootstrap audit complete - documented all 150+ class instances
- **Phase B**: Custom CSS bundle created (12KB, target <20KB achieved)  
- **Phase C**: PurgeCSS automated removal eliminated 11,596 lines of unused code
- **Phase D**: Visual regression testing validated all changes (<1% threshold)

### Visual Regression Testing Setup (COMPLETE ✅)
**Tool**: Playwright MCP (@playwright/mcp@latest)  
**Configuration**: 1% difference threshold, desktop + mobile viewports  
**Coverage**: All 4 pages with baseline screenshots created  
**Files**: 
- `VISUAL_REGRESSION_SETUP.md` - Documentation
- `playwright.config.js` - Playwright configuration (restored from commit 31579cb)
- `tests/visual-regression.spec.js` - Main visual regression tests
- `tests/baseline-screenshots.spec.js` - Baseline generator
- `tests/baseline/` - Manual baseline images (gitignored)
**Status**: Ready for incremental CSS migration with automated visual validation

**IMPORTANT**: Test files were accidentally deleted but restored from commit 31579cb. Run `npx playwright test` to execute visual regression tests.

### Expected Outcomes
- **Bundle Size**: 150KB+ → <20KB total CSS
- **Performance**: Faster loading, reduced bandwidth
- **Independence**: No external CDN dependencies
- **Maintainability**: Custom CSS tailored to exact needs

## 📋 GitHub Issues Status

### ✅ Resolved Issues
- **#208**: ScrollSpy navigation functionality (needs verification)
- **#36**: Mobile margin optimization (needs verification)  
- **#63**: H-card microformats implementation (needs verification)
- **#53**: Typography improvements (needs verification)

### 📋 Remaining Issues
- **#241**: ~~Audit and fix CSS duplications~~ → **Closed by PR #246** (2026-02-03)
- **#237**: Set up website analytics (Cloudflare Web Analytics — needs dashboard access)
- **#29**: Project learnings content (user task — needs personal input)

## 🔧 Build System

### Current Setup
```json
{
  "scripts": {
    "minify-css": "cleancss -o css/styles.min.css css/styles.css",
    "build": "npm run minify-css",
    "serve": "python3 -m http.server 8000"
  },
  "dependencies": {
    "bootstrap": "5.2.3"
  },
  "devDependencies": {
    "clean-css-cli": "^5.6.3"
  }
}
```

### Planned Enhancements
```json
{
  "scripts": {
    "css-purge": "purgecss --css css/styles.css --content *.html --output css/",
    "css-optimize": "cssnano css/styles.css css/styles.optimized.css", 
    "minify-css": "cleancss -o css/styles.min.css css/styles.css",
    "build": "npm run css-purge && npm run css-optimize && npm run minify-css"
  }
}
```

## 🔄 Git Workflow Protocol

### Branch Strategy
- `feature/description` - New features
- `fix/description` - Bug fixes  
- `css/description` - CSS reduction work
- `docs/description` - Documentation updates

### Workflow Rules
1. Always create new branch for each task
2. Check remote frequently: `git fetch origin`
3. Push early and often with meaningful commits
4. **Create PRs on correct repo**: Always use `--repo demoklion/jandu`
5. Create PRs liberally for review
6. Rebase on master regularly to stay current

## 🛠️ Development Environment

### MCP Servers Configured
- **Figma Dev Mode**: Port 3845, working correctly
- **Browser Automation**: Puppeteer via npx, Node v22.18.0

### Key Commands
```bash
# Development workflow
git fetch origin && git checkout master && git pull
git checkout -b feature/new-work
npm run serve  # Local development server
npm run minify-css  # Build CSS after changes
```

## 🎯 Next Immediate Tasks
1. ✅ **CSS Audit** — PR #246 merged: removed 34 unused variables, consolidated duplicates, fixed LESS bug
2. **Review & merge** `claude/portfolio-content-addition-VsMlK` — 3 new project pages (rebased on master)
3. **Set up Cloudflare Web Analytics** (#237) — needs dashboard access
4. **Add project learnings content** (#29) — needs personal input

## 📝 Key Learnings
- **Security First**: Always validate URLs before DOM manipulation
- **Build Simplicity**: clean-css-cli > complex build systems
- **Standards Compliance**: Web Components ensure long-term stability  
- **Git Hygiene**: Frequent branches, pushes, PRs prevent conflicts
- **Systematic Approach**: GitHub issues provide clear development roadmap