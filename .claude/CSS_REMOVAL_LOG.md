# CSS Class Removal Log

**Purpose**: Track CSS class removal progress during Phase C of CSS Bundle Reduction
**Reference**: Implementation follows plan outlined in PROJECT_MEMORY.md Phase C
**Method**: Remove unused classes one by one → test with Playwright → commit if OK → repeat

## Total Analysis
- **Total CSS classes in styles.css**: ~1811 unused classes identified
- **Target**: Reduce 257KB → <20KB

## Removal Log

### Commit c46b92a - Remove .stretched-link class
- **Classes removed**: `.stretched-link::after`
- **Lines removed**: 8 lines

### Commit b385d29 - Remove .visually-hidden class  
- **Classes removed**: `.visually-hidden`, `.visually-hidden-focusable:not(:focus):not(:focus-within)`
- **Lines removed**: 11 lines

### Commit b2636ba - Remove all .accordion* classes
- **Classes removed**: `.accordion`, `.accordion-button`, `.accordion-header`, `.accordion-item`, `.accordion-body`, `.accordion-flush` and all variants
- **Lines removed**: 153 lines
- **Verified**: No accordion usage in HTML files

### Commit 92bf914 - Remove all .alert* classes  
- **Classes removed**: `.alert`, `.alert-heading`, `.alert-link`, `.alert-dismissible`, `.alert-primary`, `.alert-secondary`, `.alert-success`, `.alert-info`, `.alert-warning`, `.alert-danger`, `.alert-light`, `.alert-dark`, `.alert-black`, `.alert-white` and all variants
- **Lines removed**: 137 lines (5209-5345)
- **Verified**: No alert usage in any HTML files
- **File size**: 12,683 lines after removal

### Commit 5624236 - Remove all .badge* classes
- **Classes removed**: `.badge`, `.badge:empty`, `.btn .badge` 
- **Lines removed**: 27 lines (5181-5207)
- **Verified**: No badge usage in any HTML files
- **File size**: 12,656 lines after removal

### Commit 49b3a61 - Remove all .breadcrumb* classes
- **Classes removed**: `.breadcrumb`, `.breadcrumb-item+.breadcrumb-item`, `.breadcrumb-item+.breadcrumb-item::before`, `.breadcrumb-item.active`
- **Lines removed**: 35 lines (5042-5076)
- **Verified**: No breadcrumb usage in any HTML files
- **File size**: 12,621 lines after removal

### Commit a1601ac - Remove all .carousel* classes
- **Classes removed**: All carousel-related classes including carousel-item, carousel-control, carousel-indicators, carousel-caption, carousel-dark variants
- **Lines removed**: 217 lines (6342-6558) 
- **Verified**: No carousel usage in any HTML files
- **File size**: 12,400 lines after removal

## Progress Summary
- **Accordion**: 153 lines removed
- **Alert**: 137 lines removed  
- **Badge**: 27 lines removed
- **Breadcrumb**: 35 lines removed
- **Carousel**: 217 lines removed
- **Total removed**: 569 lines (from 12,820 → 12,400)

### Commit 061bfac - Remove all .modal* classes
- **Classes removed**: All modal-related classes including modal-dialog, modal-content, modal-header, modal-body, modal-footer, modal-backdrop and all responsive variants
- **Lines removed**: 330 lines (5698-6027)
- **Verified**: No modal usage in any HTML files
- **File size**: 12,070 lines after removal
- **Visual test**: 25 pixels diff (0.01 ratio - at threshold, acceptable)

## Progress Summary Update
- **Accordion**: 153 lines removed
- **Alert**: 137 lines removed  
- **Badge**: 27 lines removed
- **Breadcrumb**: 35 lines removed
- **Carousel**: 217 lines removed  
- **Modal**: 330 lines removed
- **Total removed**: 899 lines (from 12,820 → 12,070)

### Commit [pending] - Remove standalone .offcanvas* classes
- **Classes removed**: `.offcanvas`, `.offcanvas-xxl/xl/lg/md/sm`, `.offcanvas-start/end/top/bottom`, `.offcanvas-backdrop`, `.offcanvas-header`, `.offcanvas-body`, `.offcanvas-title`
- **Lines removed**: 642 lines (6082-6723)
- **Preserved**: navbar-expand offcanvas rules (needed for mobile nav)
- **Verified**: No offcanvas usage in any HTML files
- **File size**: 11,428 lines after removal
- **Visual test**: 7px diff (0.01 ratio - acceptable)

## Progress Summary Update
- **Accordion**: 153 lines removed
- **Alert**: 137 lines removed  
- **Badge**: 27 lines removed
- **Breadcrumb**: 35 lines removed
- **Carousel**: 217 lines removed  
- **Modal**: 330 lines removed
- **Offcanvas**: 642 lines removed
- **Total removed**: 1,541 lines (from 12,820 → 11,428)

## Next Target: .toast* classes