const { test, expect } = require('@playwright/test');

const pages = [
  { name: 'index', url: '/' },
  { name: 'project1', url: '/project1.html' },
  { name: 'project2', url: '/project2.html' },
  { name: 'project3', url: '/project3.html' },
];

test.describe('Visual Regression Tests', () => {
  pages.forEach(({ name, url }) => {
    test(`${name} - Desktop Visual Regression`, async ({ page }) => {
      // Set desktop viewport
      await page.setViewportSize({ width: 1920, height: 1080 });
      
      // Navigate to the page
      await page.goto(url);
      
      // Wait for page to load completely
      await page.waitForLoadState('networkidle');
      
      // Wait a bit more for any animations or dynamic content
      await page.waitForTimeout(1000);
      
      // Compare against baseline
      await expect(page).toHaveScreenshot(`${name}-desktop.png`, {
        fullPage: true,
        threshold: 0.01 // Allow for 1% difference for practical visual regression testing
      });
    });

    test(`${name} - Mobile Visual Regression`, async ({ page }) => {
      // Set mobile viewport
      await page.setViewportSize({ width: 375, height: 667 });
      
      // Navigate to the page
      await page.goto(url);
      
      // Wait for page to load completely
      await page.waitForLoadState('networkidle');
      
      // Wait a bit more for any animations or dynamic content
      await page.waitForTimeout(1000);
      
      // Compare against baseline
      await expect(page).toHaveScreenshot(`${name}-mobile.png`, {
        fullPage: true,
        threshold: 0.01 // Allow for 1% difference for practical visual regression testing
      });
    });
  });
});