const {test, expect} = require('@playwright/test'); 
test('Mouse Double Click', async ({ page }) => {

await page.goto('https://testautomationpractice.blogspot.com/');

const uchalIthun = await page.locator("#draggable");
const itheTak = await page.locator("#droppable");

//approch 1
/*
await uchalIthun.hover();
await page.mouse.down();

await itheTak.hover();
await page.mouse.up();
*/

//approch 2
await page.waitForTimeout(1000);

await uchalIthun.dragTo(itheTak);


await page.waitForTimeout(10000); // Wait for 10 seconds to observe the page load
});