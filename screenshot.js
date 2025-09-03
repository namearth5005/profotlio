const puppeteer = require('puppeteer');

(async () => {
  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    
    // Set viewport size
    await page.setViewport({ width: 1920, height: 1080 });
    
    console.log('Navigating to portfolio...');
    await page.goto('http://localhost:3004', { waitUntil: 'networkidle0', timeout: 30000 });
    
    // Wait a bit for animations to settle
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    console.log('Taking screenshot...');
    await page.screenshot({ 
      path: 'portfolio-screenshot.png', 
      fullPage: true
    });
    
    // Get console errors
    const logs = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        logs.push(`Console Error: ${msg.text()}`);
      }
    });
    
    // Check for any errors
    const errors = await page.evaluate(() => {
      const errors = [];
      
      // Check if neural backgrounds are loading
      const neuralBgs = document.querySelectorAll('canvas');
      if (neuralBgs.length === 0) {
        errors.push('No neural network canvases found');
      } else {
        errors.push(`Found ${neuralBgs.length} neural canvases`);
      }
      
      // Check section layout
      const sections = document.querySelectorAll('section');
      errors.push(`Found ${sections.length} sections`);
      
      // Check horizontal layout
      const gridContainer = document.querySelector('.grid.lg\\:grid-cols-2');
      if (gridContainer) {
        errors.push('Horizontal layout found');
      } else {
        errors.push('Horizontal layout NOT found');
      }
      
      return errors;
    });
    
    console.log('Status check results:');
    errors.forEach(error => console.log(`- ${error}`));
    
    await browser.close();
    console.log('Screenshot saved as portfolio-screenshot.png');
    
  } catch (error) {
    console.error('Error taking screenshot:', error);
  }
})();