# Web Components Specification

**Source**: https://developer.mozilla.org/en-US/docs/Web/API/Web_components
**Date**: 2025-08-19

## Web Components Overview

Web Components is a suite of different technologies allowing you to create reusable custom elements — with their functionality encapsulated away from the rest of your code — and utilize them in your web apps.

## Core Technologies

### 1. Custom Elements
- Define new HTML elements and their behavior
- Use `customElements.define()` to register
- Must extend `HTMLElement` and call `super()` in constructor

### 2. Shadow DOM
- Encapsulated DOM tree attached to an element
- Provides style and markup encapsulation
- Created with `attachShadow()`

### 3. HTML Templates
- `<template>` and `<slot>` elements
- Define markup that isn't rendered until activated
- Can be cloned and inserted into DOM

## Custom Element Lifecycle

### Constructor Requirements
- **MUST** call `super()` first
- Should set up initial state only
- Cannot access attributes or children

### Lifecycle Callbacks
- `connectedCallback()` - Element added to DOM
- `disconnectedCallback()` - Element removed from DOM
- `attributeChangedCallback()` - Observed attribute changed
- `adoptedCallback()` - Element moved to new document

## Best Practices for Portfolio

### 1. Simple Components Only
- Use for isolated, reusable functionality
- Avoid complex components that break layout
- Keep styling minimal and non-intrusive

### 2. Progressive Enhancement
- Components should enhance existing HTML
- Fallback to regular HTML if component fails
- Don't rely on components for core functionality

### 3. Long-term Stability
- Use standard web APIs only
- Avoid experimental features
- Follow semantic HTML patterns

## Implementation Notes

```javascript
class MyComponent extends HTMLElement {
  constructor() {
    super(); // REQUIRED - must be first line
    // Initialize state
  }
  
  connectedCallback() {
    // Element is in DOM - safe to access attributes/children
  }
}

customElements.define('my-component', MyComponent);
```

## Reference
MDN is the preferred source for web standards documentation and specifications.