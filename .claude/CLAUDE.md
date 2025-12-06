# CLAUDE.md

Context for Claude Code when working with this repository.

## WHY: Project Purpose

Personal portfolio site for Ján Dugovič (Product Designer, Design Systems specialist) built for 30-year technical longevity. Core principle: **preserve brutally clean visual design while modernizing the technical foundation.**

## WHAT: Tech Stack & Architecture

**Type**: Static HTML site deployed via GitHub Pages
**Framework**: Transitioning from Bootstrap 5.2.3 → Custom CSS (<20KB target)
**Components**: Modern Web Components (EmailClipboard, CurrentYear) using native Custom Elements API
**Security**: Hardened against DOM XSS with URL validation in `js/components.js`

**Key Files**:
- `index.html` + `project[1-3].html` - Portfolio pages
- `css/styles.css` - Source stylesheet (edit this)
- `css/styles.min.css` - Production stylesheet (auto-generated)
- `js/components.js` - Security-hardened web components

## HOW: Development Workflow

### Setup
```bash
npm install
npm run serve  # Starts local server on port 8000
```

### CSS Modifications
Always edit `css/styles.css`, then:
```bash
npm run minify-css  # Minifies to styles.min.css
```
**Commit both files together.**

### Testing
```bash
npx playwright test tests/visual-regression.spec.js
```
Visual regression threshold: ≤1% difference acceptable.

### Git Workflow
- Create feature branches for all work
- Always fetch before starting: `git fetch origin`
- Create PRs for everything, even small changes
- Use conventional commit format: `type: description`

## Documentation Structure

For detailed information, consult these files in `.claude/`:

- **PROJECT_MEMORY.md** - Complete project history, completed phases, next tasks
- **STATUS.md** - Current work status (updated frequently during active work)
- **CSS_WORKFLOWS.md** - Detailed CSS modification and testing workflows
- **WEB_COMPONENTS_SPEC.md** - EmailClipboard and CurrentYear component specs
- **VISUAL_REGRESSION_SETUP.md** - Playwright testing configuration
- **BOOTSTRAP_AUDIT.md** - CSS migration strategy and Bootstrap usage analysis

## Current Focus

**Phase**: CSS Bundle Reduction (90% complete)
**Goal**: Eliminate Bootstrap dependency while maintaining pixel-perfect visual consistency
**Status**: 149KB → 24KB achieved, further optimization ongoing

## MCP Servers Available

- **Figma Dev Mode**: `http://127.0.0.1:3845/mcp` (requires Figma Desktop running)
- **Playwright Visual Testing**: `@playwright/mcp@latest` for automated visual regression
- **Browser Automation**: `@modelcontextprotocol/server-puppeteer` via npx

All MCP servers use Node v22.18.0 (managed via nvm).
