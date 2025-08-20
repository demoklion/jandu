# Bootstrap Usage Audit - CSS Bundle Reduction

## Bootstrap Classes Found in HTML Files

### Core Bootstrap Classes Used

#### Layout System (Grid & Container)
- `container` (12 instances) - Main container wrapper
- `row` (13 instances) - Grid row wrapper  
- `col-*` variations:
  - `col-lg-10 mx-auto` - Large screen column with auto margins
  - `col-lg-8 mx-auto` - Large screen column with auto margins  
  - `col-lg-3` - 3-column width on large screens
  - `col-md-4` - 4-column width on medium screens
  - `col-12` - Full width on small screens
  - `col-6` - Half width
  - `col-11 mx-auto` - Almost full width with auto margins
  - `col col-auto` - Auto-width columns

#### Navigation Components
- `navbar navbar-expand-lg navbar-light fixed-top` (4 instances) - Main navigation bar
- `navbar-brand` (4 instances) - Brand/logo area
- `navbar-toggler` (1 instance) - Mobile menu toggle
- `navbar-nav ml-auto` (1 instance) - Navigation items container
- `navbar-collapse justify-content-end` (1 instance) - Collapsible nav content
- `nav-link` (3 instances) - Navigation links
- `nav-item nav-item-r` (3 instances) - Navigation items

#### Button System
- `btn btn-default btn-lg` (5 instances) - Large default buttons
- `btn btn-outline-light btn-lg rounded` (3 instances) - Large outline light buttons
- `navbar-toggler` (1 instance) - Mobile menu button

#### Typography & Text Utilities
- `text-center` (8 instances) - Center aligned text
- `text-start` (11 instances) - Left aligned text  
- `text-left` (1 instance) - Left aligned text
- `text-uppercase fw-bold` (4 instances) - Uppercase bold text
- `text-secondary` (10 instances) - Secondary text color
- `text-light` (4 instances) - Light text color
- `fw-bold` (4 instances) - Font weight bold
- `fw-light` (4 instances) - Font weight light
- `small` (4 instances) - Small text sizing

#### Spacing & Layout Utilities
- `p-2` (5 instances) - Padding utility
- `ps-3` (4 instances) - Padding start
- `pt-1` (4 instances) - Padding top
- `pb-3` (12 instances) - Padding bottom
- `m-*` utilities:
  - `mx-auto` (8 instances) - Auto horizontal margins
  - `mb-lg-5` (7 instances) - Large bottom margin on large screens
  - `mt-5` (1 instance) - Top margin
- `justify-content-center` (6 instances) - Flexbox justify center
- `justify-content-end` (1 instance) - Flexbox justify end

#### Display & Responsive Utilities
- `d-none d-md-inline` (4 instances) - Hidden on small, inline on medium+
- `d-sm-none` (4 instances) - Hidden on small screens and up

#### List Utilities
- `list-inline` (8 instances) - Inline list styling
- `list-inline-item` (16 instances) - Inline list items

### Custom Classes (Non-Bootstrap)
- `content-offset-nav` (8 instances) - Custom offset for fixed navigation
- `small-caps` (10 instances) - Small caps typography
- `font-italic` (12 instances) - Italic font styling  
- `banner-social-buttons` (2 instances) - Custom social buttons
- `subhead` (1 instance) - Custom subheading
- `span-col-3` (1 instance) - Custom spanning utility
- `nav-item-r` (3 instances) - Custom navigation item

## Bootstrap Dependencies to Replace

### Critical Components
1. **Grid System** - `container`, `row`, `col-*` classes
2. **Navigation** - `navbar-*` classes and responsive behavior
3. **Buttons** - `btn` classes and variants
4. **Flexbox Utilities** - `justify-content-*`, `align-*`
5. **Spacing System** - `p-*`, `m-*` utilities
6. **Typography Utilities** - `text-*`, `fw-*` classes
7. **Responsive Display** - `d-*` classes

### Current Bootstrap CDN Usage
```html
<!-- Bootstrap CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" 
      rel="stylesheet">

<!-- Bootstrap JS -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
```

**Target**: Replace 150KB+ Bootstrap with <20KB custom CSS

## Replacement Strategy

### Phase 1: Core Layout System
- Replace Bootstrap grid with CSS Grid/Flexbox
- Custom container, row, column implementations
- Responsive breakpoints matching current behavior

### Phase 2: Component System  
- Custom navigation bar with mobile responsiveness
- Button system with variants
- Typography scale and utilities

### Phase 3: Utility Classes
- Spacing system (padding/margin utilities)
- Text alignment and color utilities  
- Display and responsive utilities

### Phase 4: Optimization
- Remove Bootstrap CDN dependencies
- Minify custom CSS bundle
- Verify visual consistency maintained