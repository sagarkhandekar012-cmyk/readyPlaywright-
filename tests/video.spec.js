import { expect, test } from '@playwright/test';

test('sign in', async ({ page }) => {

    await page.goto('https://testing.superadmin-amoz.betadelivery.com/login', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(2000);

    const logo = await page.locator("//img[@alt='AMOZ']");

    await expect(logo).toBeVisible();

    await page.locator("//input[@placeholder='Enter your email']").fill('amozit@yopmail.com');
    await page.locator("//input[@placeholder='Enter your password']").fill('Admin@123');
    await page.locator("//button[normalize-space()='Sign In']").click();

    await page.locator('//input[@aria-label="Character 1 of 4"]').fill('1');
    await page.locator('//input[@aria-label="Character 2 of 4"]').fill('2');
    await page.locator('//input[@aria-label="Character 3 of 4"]').fill('3');
    await page.locator('//input[@aria-label="Character 4 of 4"]').fill('4'); 
    await page.locator("//button[normalize-space()='Verify']").click();

    await page.locator("//span[@class='rt-Text rt-r-size-2 rt-r-weight-bold']").click();
    await page.locator("//span[normalize-space()='Sign Out']").click();
    await page.locator("//button[normalize-space()='Sign Out']").click();


    await page.waitForURL(/.*\/login/, { timeout: 20000 });

    // 3. Then assert logo visibility
    await expect(logo).toBeVisible({ timeout: 20000 });
    // Fix: wrapped in expect()
        //await expect(logo).toBeVisible();



    console.log('------- THE END -------');
});