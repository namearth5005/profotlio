const puppeteer = require('puppeteer');

(async () => {
  try {
    console.log('Launching browser to inspect border issue...');
    const browser = await puppeteer.launch({ headless: false }); // Use false to see what's happening
    const page = await browser.newPage();
    
    await page.setViewport({ width: 1920, height: 1080 });
    
    console.log('Navigating to portfolio...');
    await page.goto('http://localhost:3004', { 
      waitUntil: 'networkidle0', 
      timeout: 30000 
    });
    
    // Wait for page to settle
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Inspect the border area
    const borderInfo = await page.evaluate(() => {
      const hero = document.getElementById('hero');
      const experience = document.getElementById('experience');
      
      const heroStyles = hero ? window.getComputedStyle(hero) : null;
      const experienceStyles = experience ? window.getComputedStyle(experience) : null;
      
      const heroRect = hero ? hero.getBoundingClientRect() : null;
      const expRect = experience ? experience.getBoundingClientRect() : null;
      
      return {
        heroStyles: heroStyles ? {
          marginBottom: heroStyles.marginBottom,
          paddingBottom: heroStyles.paddingBottom,
          borderBottom: heroStyles.borderBottom,
          height: heroStyles.height,
          bottom: heroRect.bottom
        } : null,
        experienceStyles: experienceStyles ? {
          marginTop: experienceStyles.marginTop,
          paddingTop: experienceStyles.paddingTop,
          borderTop: experienceStyles.borderTop,
          top: expRect.top
        } : null,
        gap: expRect && heroRect ? expRect.top - heroRect.bottom : null,
        heroRect: heroRect,
        expRect: expRect
      };
    });
    
    console.log('=== BORDER INSPECTION RESULTS ===');
    console.log('Hero styles:', JSON.stringify(borderInfo.heroStyles, null, 2));
    console.log('Experience styles:', JSON.stringify(borderInfo.experienceStyles, null, 2));
    console.log('Gap between sections:', borderInfo.gap + 'px');
    
    // Take detailed screenshot
    await page.screenshot({ 
      path: 'border-inspection.png', 
      fullPage: true 
    });
    
    console.log('Screenshot saved as border-inspection.png');
    
    await browser.close();
    
  } catch (error) {
    console.error('Error:', error.message);
  }
})();