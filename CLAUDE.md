# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Ján Dugovič's personal portfolio website - a static HTML site showcasing his work as a Product Designer specializing in Design Systems. The site is built on Bootstrap 5 and uses the Grayscale theme template.

## Architecture

- **Static HTML site**: No backend, runs directly in browsers or can be served via GitHub Pages
- **Bootstrap-based**: Uses Bootstrap 5.2.3 for responsive layout and components
- **Single-page app structure**: Main content in `index.html` with additional project pages (`project1.html`, `project2.html`, `project3.html`)
- **Custom styling**: Built on the Grayscale theme with custom modifications in `css/styles.css` and minified version `css/styles.min.css`
- **Progressive Web App**: Includes PWA features with `pwabuilder-sw.js` service worker and manifest files

## Key Files

- `index.html` - Main portfolio page with sections for contact, about, work, and embedded Figma presentation
- `project1.html`, `project2.html`, `project3.html` - Individual project case study pages
- `css/styles.css` - Main stylesheet (unminified)
- `css/styles.min.css` - Production minified stylesheet
- `package.json` - Bootstrap template dependencies (note: dev dependencies are outdated)

## Development Setup

1. Clone the repository: `git clone https://github.com/demoklion/jandu.git`
2. Navigate to directory: `cd jandu/`
3. Install dependencies: `npm i`

**Important**: The build process using Gulp is currently broken due to outdated dependencies. CSS minification and processing is done manually using VS Code plugins.

## Development Notes

- The site is deployed via GitHub Pages
- No npm scripts are currently functional - the package.json reflects an outdated Gulp-based build system
- Manual development workflow using VS Code for styling and minification
- Bootstrap dependencies are managed via npm but loaded from CDN in production
- Images are lazy-loaded and served via Cloudinary CDN
- Email clipboard functionality implemented with vanilla JavaScript

## Content Structure

- **Contact section**: Email, phone, Facebook Messenger contact options
- **Figma presentation**: Embedded slides from UX design talk
- **About section**: Personal bio with photo gallery
- **Work section**: Grid of project case studies linking to detail pages
- **Project pages**: Individual case studies for Golem Design System, Začni učit!, and HeO projects

## Technical Features

- Responsive design with mobile-first approach
- Service worker for offline functionality
- Bootstrap ScrollSpy for navigation highlighting
- Deferred image loading for performance
- Progressive Web App manifest and icons

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
- save info about cloudinary for this project