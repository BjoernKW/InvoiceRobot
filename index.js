#!/usr/bin/env node

if (process.argv.length < 5) {
    console.log('Please provide username, password, and invoice no. as arguments.');
    process.exit(2);
}

const invoiceNumbers = process.argv.slice(4);

const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    const navigationPromise = page.waitForNavigation();

    await page.goto('https://fahrkarten.bahn.de/privatkunde/start/start.post?lang=de&country=DEU&scope=bahnbrs&dbkanal_007=L01_S01_D001_KIN0001_top-navi-flyout_meinebahn-uebersicht_LZ01');

    await page.setViewport({width: 1272, height: 1018});

    await page.type('#login-input-loginname', process.argv[2]);
    await page.type('#password', process.argv[3]);
    await page.click('.button-abschnitt button');
    await page.waitForNavigation();

    for (const invoiceNumber of invoiceNumbers) {
		await page.type('#auftragsnr', invoiceNumber);
        await page.click('.button-inside button');
		await page.waitForNavigation();

		await page.click('.button-abschnitt button');
		await page.waitForNavigation();

		await page.click('.button-abschnitt .right button');
		await page.waitForNavigation();

		for (let i = 0; i < 2; i++) {
			await page.click('.button-abschnitt .left button');
			await page.waitForNavigation();
		}
	}

    await navigationPromise;
    await browser.close();

    process.exit(0);
})();
