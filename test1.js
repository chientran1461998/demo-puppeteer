const puppeteer = require('puppeteer');
const { sleep } = require('./timeOut');

(async() => {
    const browser = await puppeteer.launch({
        headless: false,
        args: ['--start-maximized'],
    });
    const page = await browser.newPage();
    page.setViewport({
        width: 1920,
        height: 1080,
        deviceScaleFactor: 1,
    });

    await page.goto('https://demoqa.com/');

    const [elementPage] = await page.$x("(//div[@class='card-body'])[1]");
    await elementPage.click();
    await sleep(1000);
    await page.waitForSelector('.main-header');

    const [btnTextBox] = await page.$x("//span[contains(text(),'Text Box')]")
    await btnTextBox.click();

    await page.type('[id=userName]', 'Tran Quang Chien');
    await page.type('[id=userEmail]', 'tqchien@cmcglobal.vn');
    await page.type('[id=currentAddress]', 'Ha Noi');
    await page.type('[id=permanentAddress]', 'Ha Noi');
    await page.click('#submit');
    await sleep(1000);
    // await page.pdf({ path: './file.pdf', format: 'A4', printBackground: true });
    await page.screenshot({ path: 'nytimes.png', fullPage: true });

    await browser.close();
})();