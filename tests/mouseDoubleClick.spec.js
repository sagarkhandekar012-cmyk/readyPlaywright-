const {test, expect} = require('@playwright/test');

test('Mouse Double Click', async ({ page }) => {

await page.goto('https://testautomationpractice.blogspot.com/');

const copyTextButton = await page.locator("//button[normalize-space()='Copy Text']");
copyTextButton.dblclick();

const text = await page.locator("//input[@id='field2']");
await expect(text).toHaveValue("Hello World!");

await page.waitForTimeout(5000); // Wait for  seconds to observe the page load
});