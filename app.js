const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({headless: true})
    const page = await browser.newPage()
    await page.setViewport({ width: 1500, height: 768});

}) ()
