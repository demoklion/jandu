# CSS Workflows

Detailed workflows for CSS development and testing.

## Standard CSS Modification Workflow

When making CSS changes that need visual regression testing:

### 1. Server Management
Check if HTTP server is running on port 8000:
```bash
lsof -i :8000
```

If running, reset it:
```bash
kill $(lsof -t -i:8000)
```

Start fresh server:
```bash
python3 -m http.server 8000 > /dev/null 2>&1 &
```

### 2. CSS Modification
Edit `css/styles.css` with your changes (e.g., remove unused Bootstrap classes).

### 3. Build Process
Minify the CSS:
```bash
npx clean-css-cli css/styles.css -o css/styles.min.css
```

### 4. Visual Testing
Run visual regression tests:
```bash
npx playwright test tests/visual-regression.spec.js
```

**Acceptance criteria**:
- Threshold: 0.01 (1%) difference acceptable
- Ratio ≤ 0.08 considered at threshold but acceptable

### 5. Commit on Success
If visual tests pass (differences ≤ 0.01 ratio):
1. Update `CSS_REMOVAL_LOG.md` with removal details and test results
2. Commit with standardized message format:
```bash
git add .
git commit -m "css: remove [component] - [N] lines removed"
```

## Quick Reference Commands

```bash
# Complete workflow in sequence
lsof -i :8000 && kill $(lsof -t -i:8000)
python3 -m http.server 8000 > /dev/null 2>&1 &
npx clean-css-cli css/styles.css -o css/styles.min.css
npx playwright test tests/visual-regression.spec.js

# If tests pass:
# Update CSS_REMOVAL_LOG.md manually, then:
git add . && git commit -m "css: remove [component] - [N] lines removed"
```

## Bootstrap Removal Strategy

When removing Bootstrap classes:
1. Identify unused Bootstrap classes via `BOOTSTRAP_AUDIT.md`
2. Remove classes incrementally (one section at a time)
3. Run visual regression after each removal
4. Only commit if tests pass
5. Document all changes in `CSS_REMOVAL_LOG.md`

## Visual Regression Testing Details

See `VISUAL_REGRESSION_SETUP.md` for:
- Playwright configuration
- Viewport settings (desktop + mobile)
- Baseline management
- Troubleshooting failed tests
