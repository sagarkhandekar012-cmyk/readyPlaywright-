const {test, expect} = require('@playwright/test');

test('Mouse Right Click', async ({ page }) => {

  await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');

const contextMenu = await page.locator("//span[@class='context-menu-one btn btn-neutral']");
await contextMenu.click({button: 'right'});

//await page.locator("//li[@class='context-menu-item context-menu-icon context-menu-icon-edit']").click();

 await page.waitForTimeout(10000);
});