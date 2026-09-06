const {test, expect} = require('@playwright/test'); 
test('Mouse Double Click', async ({ page }) => {

page.goto('https://testautomationpractice.blogspot.com/');

const copyButton = await page.locator("//button[normalize-space()='Copy Text']");
await copyButton.dblclick();

const field2 = await page.locator("//input[@id='field2']");
await expect(field2).toHaveValue('Hello World!');


await page.waitForTimeout(5000); // Wait for 5 seconds to observe the hover effect
});