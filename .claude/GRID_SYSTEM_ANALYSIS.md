# Grid System Analysis - Bootstrap to CSS Grid Migration

## Current Bootstrap Grid Usage Patterns

### Container Usage
- **12 instances** of `.container` - Main content wrapper
- Used in: Navigation, main content sections, footer
- **Pattern**: Consistent wrapper for all major content areas

### Row Usage  
- **13 instances** of `.row` - Flexbox container for columns
- **Variants**:
  - `row` (basic) - 7 instances
  - `row justify-content-center` - 4 instances (centered content)
  - `row justify-content-center mb-lg-5` - 4 instances (centered with bottom margin)
  - `row mx-auto` - 1 instance (auto horizontal margins)
  - `row mx-auto mb-lg-5` - 1 instance (auto margins with bottom margin)
  - `row mt-5` - 1 instance (top margin)

### Column System Breakdown

#### Large Screen Layout (`col-lg-*`)
- `col-lg-8` (6 instances) - Primary content column (2/3 width)
- `col-lg-10` (1 instance) - Wide content column  
- `col-lg-3` (5 instances) - Photo gallery grid

#### Medium Screen Layout (`col-md-*`)
- `col-md-4` (5 instances) - Photo gallery (3 columns)

#### Base Column Classes
- `col` (1 instance) - Generic column in work section
- `col-6` (2 instances) - Half-width columns for image pairs
- `col-11` (4 instances) - Almost full-width with margins  
- `col-12` (5 instances) - Full width on mobile
- `col col-auto` (9 instances) - Auto-width content

#### Margin Utilities with Columns
- `mx-auto` (8 instances) - Horizontal centering

## Layout Patterns Identified

### 1. Navigation Layout
```html
<nav class="navbar...">
  <div class="container">
    <!-- Navigation content -->
  </div>
</nav>
```

### 2. Content Section Layout  
```html
<section>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <!-- Main content -->
      </div>
    </div>
  </div>
</section>
```

### 3. Image Gallery Layout
```html
<div class="row mt-5">
  <figure class="col-12 col-md-4 col-lg-3 p-2">
    <!-- Gallery item -->
  </figure>
  <!-- Repeat for other items -->
</div>
```

### 4. Project Info Layout
```html
<div class="row justify-content-center mb-lg-5">
  <p class="col col-auto">Client: ...</p>
  <p class="col col-auto">Location: ...</p>
  <p class="col col-auto">Duration: ...</p>
</div>
```

### 5. Image Pair Layout
```html
<div class="row mx-auto">
  <figure class="col-6"><!-- Left image --></figure>
  <figure class="col-6"><!-- Right image --></figure>
</div>
```

## Bootstrap Responsive Breakpoints Used

- **sm**: 576px - Only used for `d-sm-none` (display utility)
- **md**: 768px - Used for `col-md-4` in photo gallery
- **lg**: 992px - Primary breakpoint for content layout
  - `col-lg-3`, `col-lg-8`, `col-lg-10`
  - `mb-lg-5` spacing utility

## Custom CSS Grid Equivalent Strategy

### 1. Replace Container System
```css
.container {
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 15px;
}

@media (max-width: 576px) {
  .container { padding: 0 12px; }
}
```

### 2. Replace Row/Column System with CSS Grid
```css
.row {
  display: grid;
  gap: 30px;
  width: 100%;
}

.row.justify-content-center {
  justify-items: center;
}

/* Column equivalents */
.col-lg-8 {
  grid-column: span 8;
}

.col-lg-10 {
  grid-column: span 10;  
}

/* Photo gallery grid */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 15px;
}
```

### 3. Replace Responsive Behavior
```css
/* Mobile-first approach */
.content-column {
  grid-column: 1 / -1; /* Full width on mobile */
}

@media (min-width: 992px) {
  .content-column {
    grid-column: span 8;
    max-width: 66.666%;
    margin: 0 auto;
  }
}
```

### 4. Replace Auto-width Columns
```css
.project-info {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.project-info > * {
  flex: 0 0 auto; /* Equivalent to col-auto */
}
```

## Migration Priority

1. **High Priority** (Core Layout):
   - Container system
   - Content columns (`col-lg-8`, `col-lg-10`)
   - Row centering patterns

2. **Medium Priority** (Component Layout):  
   - Photo gallery grid
   - Project info layout
   - Image pair layout

3. **Low Priority** (Edge Cases):
   - Complex margin combinations
   - Single-use layout patterns

## Expected CSS Size Reduction
- **Bootstrap Grid System**: ~25KB (estimated portion of total)
- **Custom CSS Grid**: ~3KB (estimated)
- **Savings**: ~22KB just from grid system replacement