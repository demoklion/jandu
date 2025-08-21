# Portfolio Project Memory
**Last Updated**: 2025-08-20  
**Current Status**: Technical modernization complete, CSS reduction phase ready to begin

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

## 🔄 CURRENT PHASE: CSS Bundle Reduction

### Goal: Bootstrap 150KB+ → Custom CSS <20KB

**Status**: Ready to begin  
**Target**: Complete independence from external CDN dependencies

### Strategy Overview
1. **Audit Phase**: Map all Bootstrap usage in HTML files
2. **Implementation Phase**: Create custom CSS equivalents  
3. **Replacement Phase**: Progressive substitution
4. **Optimization Phase**: Minify and optimize final bundle

### Implementation Plan

#### Phase A: Bootstrap Usage Audit (COMPLETE ✅)
- [x] Identify all Bootstrap classes used in HTML files
- [x] Map to custom CSS equivalents
- [x] Document grid system usage
- [x] Catalog button styles and navigation components

**Results**: Created comprehensive audit documentation:
- `BOOTSTRAP_AUDIT.md` - Complete class inventory and replacement strategy
- `GRID_SYSTEM_ANALYSIS.md` - Detailed grid patterns and CSS Grid migration plan
- `COMPONENTS_CATALOG.md` - Button and navigation component analysis

**Key Findings**:
- 150+ Bootstrap class instances across 4 HTML files
- Grid system: 12 containers, 13 rows, complex column patterns
- Button system: 2 variants (default, outline-light) with large sizing
- Navigation: Fixed navbar with responsive collapse on main page only
- **Target Size Reduction**: 150KB+ Bootstrap → <20KB custom CSS (~130KB savings)

#### Phase B: Custom CSS Implementation (IN PROGRESS)
- [x] Replace Bootstrap grid with CSS Grid/Flexbox
- [x] Create custom button system
- [x] Build responsive navigation without Bootstrap nav
- [x] Implement typography system
- [x] Create utility classes for spacing/alignment
- [x] Add mobile navigation toggle JavaScript
- [x] Configure Playwright MCP for visual regression testing
- [x] Create 12KB custom CSS bundle (target: <20KB ✅)

**Current Status**: Custom CSS implemented, visual regression testing setup complete

#### Phase C: Progressive Replacement (READY TO BEGIN)
- [ ] Update HTML files with custom classes (incremental approach)
- [ ] Test responsive behavior on all breakpoints  
- [ ] Ensure visual consistency maintained (< 1% difference)
- [ ] Remove Bootstrap CDN dependency
- [ ] Optimize and minify final CSS bundle

### Visual Regression Testing Setup (COMPLETE ✅)
**Tool**: Playwright MCP (@playwright/mcp@latest)  
**Configuration**: 1% difference threshold, desktop + mobile viewports  
**Coverage**: All 4 pages with baseline screenshots created  
**Files**: VISUAL_REGRESSION_SETUP.md, AGENT_RECOMMENDATIONS.md  
**Status**: Ready for incremental CSS migration with automated visual validation

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
- **#35**: Replace Bootstrap with CSS Grid (CSS reduction phase)
- **#209**: Privacy-focused analytics implementation
- **#40**: Phone click behavior investigation
- **#29**: Project learnings content (user task)

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
1. ✅ **Complete Bootstrap usage audit** - Phase A finished
2. **Begin Phase B**: Custom CSS Grid implementation
3. **Begin Phase B**: Custom button system implementation  
4. **Begin Phase B**: Custom navigation system
5. Set up enhanced build process with CSS optimization

## 📝 Key Learnings
- **Security First**: Always validate URLs before DOM manipulation
- **Build Simplicity**: clean-css-cli > complex build systems
- **Standards Compliance**: Web Components ensure long-term stability  
- **Git Hygiene**: Frequent branches, pushes, PRs prevent conflicts
- **Systematic Approach**: GitHub issues provide clear development roadmap