const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: false})
  const page = await browser.newPage()
  await page.setViewport({ width: 1500, height: 768});

  await page.goto('https://account-d.docusign.com/')

  await page.type('#username', 'TYPEYOURUSERNAME@EMAIL.COM')
  await page.click('.btn.btn-main.btn-lg')

  await page.waitForNavigation()

  await page.type('#password', 'TYPEYOURPASSWORD')
  await page.click('.btn.btn-main.btn-lg')

  await page.waitForSelector('.title.heading-3.ng-binding')
  await page.goto('https://appdemo.docusign.com/documents?label=action-required')

  await page.waitForSelector('.m-top-medium.text-center span')
}) ()
