
import { test, expect, chromium } from '@playwright/test';

test("Verify the functionality of the Handling pages", async () => {

    const browser = await chromium.launch();
    const context = await browser.newContext();

    const page1 = await context.newPage();
    const page2 = await context.newPage();
    const page3 = await context.newPage();

    await page1.goto('https://superadmin-amoz.betadelivery.com/login');
    await expect(page1).toHaveTitle('AMOZ | Admin');


    await page2.goto('https://companyadmin-amoz.betadelivery.com/login');
    await expect(page2).toHaveTitle('AMOZ | Admin');


    await page3.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page3).toHaveTitle('OrangeHRM');

});