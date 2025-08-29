# Button & Navigation Components Catalog

## Button System Analysis

### Button Variants Used

#### 1. Default Buttons (`btn btn-default btn-lg`)
**Usage**: 5 instances - Contact section
**Context**: Phone, WhatsApp, Messenger, CV, LinkedIn links
**Visual**: Large buttons with default styling

```html
<a href="tel:+420777663976" 
   class="btn btn-default btn-lg"
   title="Call me maybe?">
  🤙 (+420)777 663 976
</a>
```

#### 2. Outline Light Buttons (`btn btn-outline-light btn-lg rounded`)
**Usage**: 3 instances - Work section project cards
**Context**: Project navigation buttons
**Visual**: Large outline buttons with rounded corners, light color theme

```html
<a href="/project1.html"
   class="btn btn-outline-light btn-lg rounded">
  <h1>Golem Design System</h1>
  <p class="intro-text">Major DS to support a bank's new services...</p>
</a>
```

### Button Content Patterns
- **Contact buttons**: Include emoji + text (🤙, 📱, 💬, 📄, 👨‍💼)
- **Project buttons**: Include heading + description text
- **All buttons**: Large size variant (`btn-lg`)

## Navigation System Analysis

### Main Navigation Structure (`navbar`)
**Usage**: 4 instances (1 on index.html, 1 per project page)
**Classes**: `navbar navbar-expand-lg navbar-light fixed-top`

#### Navigation Features:
- **Fixed positioning**: Stays at top during scroll
- **Responsive**: Collapses on mobile (`navbar-expand-lg`)
- **Light theme**: Light background variant

#### Navigation Components:

##### 1. Brand Area (`navbar-brand`)
```html
<div class="navbar-brand">
  <a class="text-uppercase fw-bold" href="#page-top">
    <span>Ján Dugovič</span>
    <span class="ps-3 fw-light small text-light d-none d-md-inline">
      Product Designer
    </span>
  </a>
</div>
```

##### 2. Mobile Toggle (`navbar-toggler`) 
**Usage**: Only on index.html (main page has navigation menu)
```html
<button class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarResponsive">
  <span class="navbar-toggler-icon"></span>
</button>
```

##### 3. Navigation Menu (`navbar-collapse`)
**Usage**: Only on index.html
```html
<div class="collapse navbar-collapse justify-content-end">
  <div class="navbar-nav ml-auto">
    <div class="nav-item nav-item-r">
      <a class="nav-link" href="#contact">Contact</a>
    </div>
    <div class="nav-item nav-item-r">
      <a class="nav-link" href="#about">About</a>
    </div>
    <div class="nav-item nav-item-r">
      <a class="nav-link" href="#work">Work</a>
    </div>
  </div>
</div>
```

### Navigation Patterns by Page Type

#### 1. Main Page (index.html)
- Full navigation with collapsible menu
- Brand + mobile toggle + navigation links
- ScrollSpy integration for section navigation

#### 2. Project Pages (project1-3.html)  
- Simplified navigation with brand only
- No mobile toggle or navigation menu
- Just brand area for returning to main page

## Custom CSS Replacement Strategy

### Button System Replacement

#### 1. Base Button Styles
```css
.btn {
  display: inline-block;
  padding: 12px 24px;
  text-decoration: none;
  border-radius: 4px;
  font-weight: 500;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
  border: 2px solid;
}

.btn-lg {
  padding: 16px 32px;
  font-size: 1.125rem;
}
```

#### 2. Button Variants
```css
.btn-default {
  background-color: #fff;
  color: #212529;
  border-color: #dee2e6;
}

.btn-default:hover {
  background-color: #f8f9fa;
  border-color: #adb5bd;
}

.btn-outline-light {
  background-color: transparent;
  color: #f8f9fa;
  border-color: #f8f9fa;
}

.btn-outline-light:hover {
  background-color: #f8f9fa;
  color: #212529;
}

.rounded {
  border-radius: 8px;
}
```

### Navigation System Replacement

#### 1. Base Navigation
```css
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  padding: 1rem 0;
}

.navbar-brand {
  font-size: 1.25rem;
}

.navbar-brand a {
  text-decoration: none;
  color: #212529;
}
```

#### 2. Responsive Navigation
```css
.navbar-toggler {
  background: none;
  border: 1px solid #dee2e6;
  padding: 4px 8px;
  border-radius: 4px;
}

@media (max-width: 991.98px) {
  .navbar-collapse {
    margin-top: 1rem;
    border-top: 1px solid #dee2e6;
    padding-top: 1rem;
  }
}

.nav-link {
  color: #6c757d;
  text-decoration: none;
  padding: 0.5rem 1rem;
}

.nav-link:hover {
  color: #212529;
}
```

## Bootstrap Dependencies to Remove

### Navigation Dependencies
- `navbar-*` classes (8 different classes)
- `nav-*` classes (3 classes) 
- `collapse` functionality requires Bootstrap JS

### Button Dependencies  
- `btn` base class and variants
- `btn-lg` sizing utility
- `btn-default`, `btn-outline-light` color variants

### JavaScript Dependencies
**Current Bootstrap JS features used**:
- Collapse component (mobile navigation)
- ScrollSpy (navigation highlighting)

**Replacement needed**:
- Custom mobile menu toggle
- Custom scroll position detection for navigation highlighting

## Implementation Priority

### High Priority
1. **Button system** - Used extensively for CTAs
2. **Basic navigation** - Fixed header functionality

### Medium Priority  
3. **Mobile navigation** - Collapsible menu behavior
4. **ScrollSpy equivalent** - Navigation highlighting

### Low Priority
5. **Button hover effects** - Polish and interactions
6. **Navigation transitions** - Smooth animations

## Size Impact Estimate
- **Bootstrap buttons + navigation**: ~20KB
- **Custom CSS equivalent**: ~4KB  
- **JavaScript replacement**: ~2KB
- **Total savings**: ~14KB