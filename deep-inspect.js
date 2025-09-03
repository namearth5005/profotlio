const puppeteer = require('puppeteer');

(async () => {
  try {
    console.log('Deep inspection of the line issue...');
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    
    await page.setViewport({ width: 1920, height: 1080 });
    
    await page.goto('http://localhost:3004', { 
      waitUntil: 'networkidle0', 
      timeout: 30000 
    });
    
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Get detailed information about all elements between hero and experience
    const elementInfo = await page.evaluate(() => {
      const hero = document.getElementById('hero');
      const experience = document.getElementById('experience');
      const main = document.querySelector('main');
      
      const getAllElementsBetween = (start, end) => {
        const elements = [];
        let current = start?.nextSibling;
        
        while (current && current !== end) {
          if (current.nodeType === Node.ELEMENT_NODE) {
            const rect = current.getBoundingClientRect();
            const styles = window.getComputedStyle(current);
            elements.push({
              tagName: current.tagName,
              className: current.className,
              id: current.id,
              rect: {
                top: rect.top,
                bottom: rect.bottom,
                height: rect.height
              },
              styles: {
                marginTop: styles.marginTop,
                marginBottom: styles.marginBottom,
                paddingTop: styles.paddingTop,
                paddingBottom: styles.paddingBottom,
                borderTop: styles.borderTop,
                borderBottom: styles.borderBottom,
                backgroundColor: styles.backgroundColor,
                display: styles.display
              }
            });
          }
          current = current.nextSibling;
        }
        return elements;
      };
      
      const heroRect = hero?.getBoundingClientRect();
      const expRect = experience?.getBoundingClientRect();
      const mainStyles = main ? window.getComputedStyle(main) : null;
      
      return {
        heroRect: heroRect,
        experienceRect: expRect,
        gap: expRect && heroRect ? expRect.top - heroRect.bottom : null,
        mainStyles: mainStyles ? {
          padding: mainStyles.padding,
          margin: mainStyles.margin,
          gap: mainStyles.gap
        } : null,
        betweenElements: getAllElementsBetween(hero, experience),
        heroParentStyles: hero?.parentElement ? (() => {
          const styles = window.getComputedStyle(hero.parentElement);
          return {
            tagName: hero.parentElement.tagName,
            className: hero.parentElement.className,
            gap: styles.gap,
            padding: styles.padding,
            margin: styles.margin
          };
        })() : null
      };
    });
    
    console.log('=== DEEP INSPECTION RESULTS ===');
    console.log('Gap between sections:', elementInfo.gap + 'px');
    console.log('Main element styles:', JSON.stringify(elementInfo.mainStyles, null, 2));
    console.log('Hero parent styles:', JSON.stringify(elementInfo.heroParentStyles, null, 2));
    console.log('Elements between hero and experience:', JSON.stringify(elementInfo.betweenElements, null, 2));
    
    // Take screenshot
    await page.screenshot({ 
      path: 'deep-inspection.png', 
      fullPage: true 
    });
    
    await browser.close();
    console.log('Deep inspection complete. Screenshot saved as deep-inspection.png');
    
  } catch (error) {
    console.error('Error:', error.message);
  }
})();