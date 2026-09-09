const {test, expect} = require('@playwright/test');

test('single upload a file', async ({ page }) => {
  await page.goto('https://companyadmin-amoz.betadelivery.com/login');

  //email
  const emailInput = page.locator('//input[@placeholder="Enter Email Id"]');
  await emailInput.fill('rentavehicle24@yopmail.com');
  await expect(emailInput).toHaveValue('rentavehicle24@yopmail.com');
  

  //password
  const passwordInput = page.locator('//input[@placeholder="Enter Password"]');
  await passwordInput.fill('Test@123');
  await expect(passwordInput).toHaveValue('Test@123');
  await page.locator("//button[normalize-space()='Login']").click();

await page.locator("//span[normalize-space()='Vehicle Management']").click();
await page.locator("//span[normalize-space()='Manage Vehicles']").click();
await page.locator("//button[normalize-space()='Add New']").click();

const doc = page.locator("//label[@for='insuranceDocument']");
//await doc.waitForSelector("//label[@for='insuranceDocument']");
await doc.waitFor({ state: 'visible' });
await doc.isEnabled();
await doc.setInputFiles("C:\\Users\\wdila\\Downloads\\2mb.pdf");

  await page.waitForTimeout(5000);
});
