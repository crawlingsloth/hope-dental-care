import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  
  // Listen for console messages
  page.on('console', msg => {
    console.log(`Console [${msg.type()}]: ${msg.text()}`);
  });
  
  // Listen for errors
  page.on('pageerror', error => {
    console.error(`Page Error: ${error.message}`);
  });
  
  // Listen for failed requests
  page.on('requestfailed', request => {
    console.error(`Request Failed: ${request.url()} - ${request.failure().errorText}`);
  });
  
  await page.goto('http://localhost:5173/');
  await page.waitForTimeout(5000);
  
  // Check if CSS is loaded
  const stylesheets = await page.evaluate(() => {
    return Array.from(document.styleSheets).map(sheet => ({
      href: sheet.href,
      disabled: sheet.disabled,
      rules: sheet.cssRules ? sheet.cssRules.length : 'Access denied'
    }));
  });
  
  console.log('Stylesheets:', stylesheets);
  
  // Check computed styles of body
  const bodyStyles = await page.evaluate(() => {
    const computed = getComputedStyle(document.body);
    return {
      backgroundColor: computed.backgroundColor,
      fontFamily: computed.fontFamily,
      margin: computed.margin
    };
  });
  
  console.log('Body styles:', bodyStyles);
  
  await browser.close();
})();