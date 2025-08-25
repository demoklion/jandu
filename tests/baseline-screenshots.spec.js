const { test, expect } = require('@playwright/test');

const pages = [
  { name: 'index', url: '/' },
  { name: 'project1', url: '/project1.html' },
  { name: 'project2', url: '/project2.html' },
  { name: 'project3', url: '/project3.html' },
];

test.describe('Baseline Screenshots', () => {
  pages.forEach(({ name, url }) => {
    test(`${name} - Desktop`, async ({ page, browserName }) => {
      // Set desktop viewport
      await page.setViewportSize({ width: 1920, height: 1080 });
      
      // Navigate to the page
      await page.goto(url);
      
      // Wait for page to load completely
      await page.waitForLoadState('networkidle');
      
      // Wait a bit more for any animations or dynamic content
      await page.waitForTimeout(1000);
      
      // Take full page screenshot
      await page.screenshot({
        path: `tests/baseline/${name}-desktop.png`,
        fullPage: true,
      });
    });

    test(`${name} - Mobile`, async ({ page, browserName }) => {
      // Set mobile viewport
      await page.setViewportSize({ width: 375, height: 667 });
      
      // Navigate to the page
      await page.goto(url);
      
      // Wait for page to load completely
      await page.waitForLoadState('networkidle');
      
      // Wait a bit more for any animations or dynamic content
      await page.waitForTimeout(1000);
      
      // Take full page screenshot
      await page.screenshot({
        path: `tests/baseline/${name}-mobile.png`,
        fullPage: true,
      });
    });
  });
});