const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({headless: true})
    const page = await browser.newPage()
    await page.setViewport({ width: 1500, height: 768});

    await page.goto('https://account-d.docusign.com/')

    await page.type('#username', 'TYPEYOURUSERNAME@EMAIL.COM')
    await page.click('.btn.btn-main.btn-lg')
  
    await page.waitForNavigation()
  
    await page.type('#password', 'TYPEYOURPASSWORD')
    await page.click('.btn.btn-main.btn-lg')

}) ()
