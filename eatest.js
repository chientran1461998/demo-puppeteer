const puppeteer = require('puppeteer');
(async() => {
    const browser = await puppeteer.launch({
        "headless": false,
        "slowMo": 50
    });
    const page = await browser.newPage();

    await page.setViewport({
        "width": 1440,
        "height": 10000
    })
    await page.goto("https://demoqa.com/");
    await browser.close();
})();