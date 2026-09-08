const {test, expect} = require('@playwright/test');

test('single upload a file', async ({ page }) => {
  await page.goto('https://companyadmin-amoz.betadelivery.com/login');

await page.locator('//input[@placeholder="Enter Email Id"]').fill('rentavehicle24@yopmail.com');
await page.locator('//input[@placeholder="Enter Password"]').fill('Test@123');
await page.locator("//button[normalize-space()='Login']").click();

await page.locator("//span[normalize-space()='Vehicle Management']").click();
await page.locator("//span[normalize-space()='Manage Vehicles']").click();
await page.locator("//button[normalize-space()='Add New']").click();

await page.waitForSelector("//label[@for='insuranceDocument']");
await page.locator("//label[@for='insuranceDocument']").isEnabled();
await page.locator("//input[@id='insuranceDocument']").setInputFiles("C:\\Users\\wdila\\Downloads\\2mb.pdf");

  await page.waitForTimeout(5000);
});

/*
test('multiple upload a file', async ({ page }) => {

    await page.goto('');


    await page.waitForTimeout(5000);
});
*/