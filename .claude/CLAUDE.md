# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Ján Dugovič's personal portfolio website - a static HTML site showcasing his work as a Product Designer specializing in Design Systems. The site is built on Bootstrap 5 and uses the Grayscale theme template.

## Architecture

- **Static HTML site**: No backend, runs directly in browsers or can be served via GitHub Pages
- **Bootstrap-based**: Uses Bootstrap 5.2.3 for responsive layout and components
- **Single-page app structure**: Main content in `index.html` with additional project pages (`project1.html`, `project2.html`, `project3.html`)
- **Custom styling**: Built on the Grayscale theme with custom modifications in `css/styles.css` and minified version `css/styles.min.css`
- **Web Components**: Modern EmailClipboard and CurrentYear components in `js/components.js`

## Key Files

- `index.html` - Main portfolio page with sections for contact, about, work, and embedded Figma presentation
- `project1.html`, `project2.html`, `project3.html` - Individual project case study pages  
- `css/styles.css` - Main stylesheet (unminified)
- `css/styles.min.css` - Production minified stylesheet
- `js/components.js` - Web Components with security-hardened implementations
- `package.json` - Modern build system with clean-css-cli

## Development Setup

1. Clone the repository: `git clone https://github.com/demoklion/jandu.git`
2. Navigate to directory: `cd jandu/`
3. Install dependencies: `npm i`

**CSS Build Process**: Uses `clean-css-cli` for minification. Run `npm run minify-css` to update `styles.min.css` after editing `styles.css`. The old Gulp build system has been replaced with this modern, lightweight solution.

## Development Notes

- The site is deployed via GitHub Pages
- **CSS Workflow**: Edit `css/styles.css` → Run `npm run minify-css` → Commit both files
- Modern npm scripts replace the old broken Gulp-based build system
- Bootstrap dependencies are managed via npm but loaded from CDN in production  
- Images are lazy-loaded and served via Cloudinary CDN
- Email clipboard functionality implemented with vanilla JavaScript web components

## Content Structure

- **Contact section**: Email, phone, WhatsApp, Messenger contact options with h-card microformats
- **Figma presentation**: Embedded slides from UX design talk
- **About section**: Personal bio with photo gallery  
- **Work section**: Grid of project case studies linking to detail pages
- **Project pages**: Individual case studies for Golem Design System, Začni učit!, and HeO projects

## Technical Features

- Responsive design with mobile-first approach
- Web Components using native Custom Elements API
- Bootstrap ScrollSpy for navigation highlighting with responsive offset
- Deferred image loading for performance with security validation
- Security-hardened URL validation preventing DOM XSS vulnerabilities

## Security Features

- **URL Validation**: All image sources validated with `isValidImageUrl()` function
- **XSS Prevention**: Safe DOM manipulation without innerHTML injection
- **Protocol Restrictions**: Only http/https schemes allowed, blocks javascript: and data: schemes

## MCP Configuration

The following MCP servers are configured for this project:

### Figma Dev Mode MCP
```json
"Figma Dev Mode MCP": {
    "type": "http", 
    "url": "http://127.0.0.1:3845/mcp"
}
```
- **Status**: Working correctly
- **Port**: 3845 (served by Figma Desktop app)
- **Requirements**: Figma Desktop app must be running with Dev Mode enabled
- **Authentication**: Handled automatically by Figma Desktop app

### Browser MCP  
```json
"browser": {
    "command": "/Users/jandu/.nvm/versions/node/v22.18.0/bin/npx",
    "args": ["-y", "@modelcontextprotocol/server-puppeteer"]
}
```
- **Node version**: v22.18.0 (managed via nvm)
- **Package**: @modelcontextprotocol/server-puppeteer

### Playwright Visual Testing MCP
```json
"playwright": {
    "command": "/Users/jandu/.nvm/versions/node/v22.18.0/bin/npx",
    "args": ["@playwright/mcp@latest"]
}
```
- **Package**: @playwright/mcp@latest  
- **Purpose**: Visual regression testing for CSS migration
- **Version**: 0.0.34

## Current Development Phase

**Focus**: CSS Bundle Reduction - eliminating Bootstrap dependency and creating custom <20KB CSS bundle while preserving the brutally clean design.

**Key Principle**: Never compromise the visual design. All changes must maintain pixel-perfect consistency.

## Development Workflow

1. Always create feature branches for any changes
2. Check `git fetch origin` before starting work
3. Run `npm run minify-css` after CSS edits  
4. Create PRs for all changes, no matter how small
5. Reference `PROJECT_MEMORY.md` for current status and next tasks
6. Update `STATUS.md` with progress frequently

## Memory Files
- `.claude/PROJECT_MEMORY.md` - Complete project history and current phase details
- `.claude/STATUS.md` - Current work status, updated frequently  
- `.claude/WEB_COMPONENTS_SPEC.md` - Web components documentation
- `.claude/CLOUDINARY_INFO.md` - Image CDN configuration