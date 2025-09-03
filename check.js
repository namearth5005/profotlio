const puppeteer = require('puppeteer');

(async () => {
  try {
    console.log('Launching browser...');
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    
    // Set viewport
    await page.setViewport({ width: 1920, height: 1080 });
    
    // Collect console logs
    const logs = [];
    page.on('console', msg => {
      logs.push(`${msg.type()}: ${msg.text()}`);
    });
    
    // Collect errors
    page.on('pageerror', error => {
      logs.push(`Page Error: ${error.message}`);
    });
    
    console.log('Navigating to portfolio...');
    try {
      await page.goto('http://localhost:3004', { 
        waitUntil: 'domcontentloaded', 
        timeout: 10000 
      });
      console.log('Page loaded successfully');
    } catch (e) {
      console.log('Navigation error:', e.message);
      await browser.close();
      return;
    }
    
    // Wait for page to settle
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Check what's on the page
    const pageInfo = await page.evaluate(() => {
      const info = [];
      
      // Check sections
      const sections = document.querySelectorAll('section');
      info.push(`Found ${sections.length} sections`);
      
      sections.forEach((section, i) => {
        const id = section.id || 'no-id';
        const classes = section.className;
        info.push(`Section ${i}: id="${id}", classes="${classes}"`);
      });
      
      // Check neural backgrounds
      const canvases = document.querySelectorAll('canvas');
      info.push(`Found ${canvases.length} canvas elements (neural backgrounds)`);
      
      // Check grid layout
      const grid = document.querySelector('.grid.lg\\:grid-cols-2');
      info.push(`Horizontal grid layout: ${grid ? 'FOUND' : 'NOT FOUND'}`);
      
      // Check for any visible text
      const heroText = document.querySelector('h1');
      info.push(`Hero title found: ${heroText ? heroText.textContent.substring(0, 50) + '...' : 'NOT FOUND'}`);
      
      return info;
    });
    
    console.log('\n=== PAGE ANALYSIS ===');
    pageInfo.forEach(info => console.log(info));
    
    console.log('\n=== CONSOLE LOGS ===');
    logs.forEach(log => console.log(log));
    
    // Take a quick screenshot
    try {
      await page.screenshot({ path: 'debug-screenshot.png' });
      console.log('\nScreenshot saved as debug-screenshot.png');
    } catch (e) {
      console.log('Screenshot failed:', e.message);
    }
    
    await browser.close();
    
  } catch (error) {
    console.error('Error:', error.message);
  }
})();