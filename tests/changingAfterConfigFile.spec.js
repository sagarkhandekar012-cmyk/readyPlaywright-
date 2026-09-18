import {expect, test} from '@playwright/test' 

test('sign in', async({page})=>{

        await page.goto('https://testing.superadmin-amoz.betadelivery.com/login')

        await page.waitForTimeout(2000);

    await page.locator("//input[@placeholder='Enter your email']").fill('amozit@yopmail.com');
    await page.locator("//input[@placeholder='Enter your password']").fill('Admin@123');
    await page.locator("//button[normalize-space()='Sign In']").click();

await page.locator('//input[@aria-label="Character 1 of 4"]').fill('1');
await page.locator('//input[@aria-label="Character 2 of 4"]').fill('2');
await page.locator('//input[@aria-label="Character 3 of 4"]').fill('3');
await page.locator('//input[@aria-label="Character 4 of 4"]').fill('4'); 
await page.locator("//button[normalize-space()='Verify']").click();

})

//changingAfterConfigFile
