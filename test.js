const { chromium } = require("playwright");

(async () => {

    const browser = await chromium.launch({
        headless: false,
        slowMo: 50
    });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://web.gencat.cat/ca/inici");
    await page.type('[id=cercadorOcultGoogle]', 'agenda cultural');
    await page.keyboard.press('Enter', {delay: 3000});
    await page.click("text=Cultura. gencat.cat");
    await page.click("text=Agenda Cultural");
    //he desactivado el cerrar el navegador para que puedan ver la prueba :)
    //await browser.close();
})();
