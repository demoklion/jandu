# Cloudinary Configuration for Portfolio

**Date**: 2025-08-19
**Cloud Name**: jandu-top
**Project**: Personal Portfolio

## Current Usage Pattern

The portfolio uses Cloudinary for image hosting with lazy loading and optimization:

```html
<img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
     data-src="https://res.cloudinary.com/jandu-top/image/upload/q_auto,f_auto,dpr_auto/v1526113257/myphoto1.jpg"
     class="img-fluid"
     loading="lazy"
     alt="at work">
```

## URL Structure

Base URL: `https://res.cloudinary.com/jandu-top/image/upload/`

Current transformations used:
- `q_auto` - Automatic quality optimization
- `f_auto` - Automatic format selection (WebP, AVIF when supported)
- `dpr_auto` - Automatic device pixel ratio adjustment

## Transformation Parameters for Fullscreen

For fullscreen viewing, we can use these transformations:

### Basic Resize Parameters
- `w_` (width) - Target width in pixels
- `h_` (height) - Target height in pixels
- `c_scale` - Simple resize without cropping
- `c_fit` - Fit within dimensions maintaining aspect ratio
- `c_limit` - Limit max size while preserving aspect ratio

### Quality Parameters
- `q_auto` - Automatic quality optimization
- `q_90` - High quality (90% for fullscreen)
- `f_auto` - Automatic format selection

### Example Fullscreen URLs
```
// Original thumbnail
https://res.cloudinary.com/jandu-top/image/upload/q_auto,f_auto,dpr_auto/v1526113257/myphoto1.jpg

// High-res fullscreen version
https://res.cloudinary.com/jandu-top/image/upload/c_limit,w_1920,h_1080,q_90,f_auto/v1526113257/myphoto1.jpg
```

## Implementation Strategy

For fullscreen component:
1. Extract public_id from existing URL (e.g., "v1526113257/myphoto1")
2. Generate high-res URL with `c_limit,w_1920,h_1080,q_90,f_auto`
3. Use original URL format but with fullscreen transformations

## Notes
- Preserve existing lazy loading setup
- Don't break masonry layout
- Apply fullscreen functionality via CSS class, not wrapper components