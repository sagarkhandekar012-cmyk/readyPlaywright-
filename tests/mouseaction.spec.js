const {test, expect} = require('@playwright/test');

test('Mouse actions', async ({ page }) => {

  await page.goto('https://superadmin-amoz.betadelivery.com/login');

await page.locator("//input[@placeholder='Enter your email']").fill('amozit@yopmail.com');
await page.locator("//input[@placeholder='Enter your password']").fill('Admin@123');
await page.locator("//*[name()='path' and contains(@d,'m2 2 20 20')]").hover();
await page.locator("//*[name()='path' and contains(@d,'m2 2 20 20')]").click();
await page.locator("//button[normalize-space()='Sign In']").click();

await page.locator("//input[@aria-label='Character 1 of 4']").fill('1');
await page.locator("//input[@aria-label='Character 2 of 4']").fill('2');
await page.locator("//input[@aria-label='Character 3 of 4']").fill('3');
await page.locator("//input[@aria-label='Character 4 of 4']").fill('4');
await page.locator("//button[normalize-space()='Verify']").click();

await page.locator("(//*[name()='svg'][@class='lucide lucide-chevron-down'])[1]").hover();

await page.locator("//button[normalize-space()='Manage Payments']").click();
await page.locator("//div[7]").click();
await page.locator("//tbody/tr[1]/td[15]//*[name()='svg']").hover();
  await page.waitForTimeout(5000); // Wait for 2 seconds to observe the hover effect

});