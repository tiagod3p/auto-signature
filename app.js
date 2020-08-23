const puppeteer = require('puppeteer');

async function sign(page) {
  const hasDocToAssign = await page.$('.css-1f2kg4y')
  if (hasDocToAssign) {
    console.log("Starting signing process...")
    await page.click('.css-1f2kg4y')
    
    await page.waitFor('#action-bar-btn-continue', {timeout: 15000})
    await page.click('#action-bar-btn-continue')

    await page.waitFor('#navigate-btn', {timeout: 5000})
    await page.click('#navigate-btn')

    const elHandleArray = await page.$$('.page-tabs button.tab-button')
    for (const el of elHandleArray) {
      try {
        await el.hover()
        await el.click()
      } catch(e) {
        console.error(e)
      }
    }

    await page.click('.btn-done-signing')
  
    await page.goto('https://appdemo.docusign.com/documents?label=action-required')

    console.log("Finish signing document...")

    await sign(page)
  }
  return
};

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

  try {
    await sign(newPage)
  } catch(err) {
    console.error(err)
    browser.close()
  }

  browser.close()
}) ()
