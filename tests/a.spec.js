const {test, expect} = require('@playwright/test');

test('superadmin login', async ({ page }) => {
await page.goto('https://superadmin-amoz.betadelivery.com/login');
await expect(page).toHaveTitle('AMOZ | Admin');
});

test('companyadmin login', async ({ page }) => {
await page.goto('https://companyadmin-amoz.betadelivery.com/login');
await expect(page).toHaveTitle('AMOZ | Admin');
});

test('orangehrm login', async ({ page }) => {
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
await expect(page).toHaveTitle('OrangeHRM');
});