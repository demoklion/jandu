const { chromium } = require('playwright');

async function testProjectClicks() {
  console.log('🧪 Testing project navigation clicks...');
  
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();
  
  try {
    // Go to the homepage
    console.log('📄 Loading homepage...');
    await page.goto('http://localhost:8002');
    await page.waitForLoadState('networkidle');
    
    // Wait for work section to be visible
    await page.waitForSelector('#work', { timeout: 5000 });
    console.log('✅ Work section found');
    
    // Test project 1 link
    console.log('🔗 Testing Project 1 click...');
    const project1Link = page.locator('#work a[href="/project1.html"]');
    await project1Link.waitFor({ state: 'visible' });
    console.log('✅ Project 1 link is visible');
    
    // Check if link is actually clickable
    const isClickable = await project1Link.isEnabled();
    console.log(`🖱️  Project 1 link clickable: ${isClickable}`);
    
    // Get link attributes
    const href = await project1Link.getAttribute('href');
    const classes = await project1Link.getAttribute('class');
    console.log(`📍 Project 1 href: ${href}`);
    console.log(`🎨 Project 1 classes: ${classes}`);
    
    // Try to click it
    try {
      await project1Link.click();
      await page.waitForLoadState('networkidle');
      const currentUrl = page.url();
      console.log(`🌐 After click, current URL: ${currentUrl}`);
      
      if (currentUrl.includes('project1.html')) {
        console.log('✅ Navigation to project1 SUCCESSFUL!');
      } else {
        console.log('❌ Navigation to project1 FAILED!');
      }
    } catch (clickError) {
      console.log(`❌ Click failed: ${clickError.message}`);
    }
    
    // Go back and test project 2
    await page.goto('http://localhost:8002');
    await page.waitForLoadState('networkidle');
    
    console.log('🔗 Testing Project 2 click...');
    const project2Link = page.locator('#work a[href="/project2.html"]');
    await project2Link.waitFor({ state: 'visible' });
    
    try {
      await project2Link.click();
      await page.waitForLoadState('networkidle');
      const currentUrl = page.url();
      console.log(`🌐 After click, current URL: ${currentUrl}`);
      
      if (currentUrl.includes('project2.html')) {
        console.log('✅ Navigation to project2 SUCCESSFUL!');
      } else {
        console.log('❌ Navigation to project2 FAILED!');
      }
    } catch (clickError) {
      console.log(`❌ Click failed: ${clickError.message}`);
    }
    
  } catch (error) {
    console.log(`❌ Test error: ${error.message}`);
  } finally {
    await browser.close();
  }
}

testProjectClicks().catch(console.error);