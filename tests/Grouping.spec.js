import {test, expect} from '@playwright/test';

/*
test.beforeEach(async ({ page }) => {
})
*/

test('Grouping', async ({ page }) => {
  

    //this is login 
    await page.goto('https://testing.superadmin-amoz.betadelivery.com/login')

    await page.locator("//input[@placeholder='Enter your email']").fill('amozit@yopmail.com');
    await page.locator("//input[@placeholder='Enter your password']").fill('Admin@123');
    await page.locator("//button[normalize-space()='Sign In']").click();

await page.locator('//input[@aria-label="Character 1 of 4"]').fill('1');
await page.locator('//input[@aria-label="Character 2 of 4"]').fill('2');
await page.locator('//input[@aria-label="Character 3 of 4"]').fill('3');
await page.locator('//input[@aria-label="Character 4 of 4"]').fill('4'); 
await page.locator("//button[normalize-space()='Verify']").click();


await page.locator("//span[@class='rt-Text rt-r-size-6']").isVisible();


//logout 

await page.locator("//span[@class='rt-Text rt-r-size-2 rt-r-weight-bold']").click();
await page.locator("//span[normalize-space()='Sign Out']").click();

    await page.waitForTimeout(5000);

})

test('Grouping2', async ({ page }) => {

    //login 

    await page.goto('https://testing.superadmin-amoz.betadelivery.com/login')

    await page.locator("//input[@placeholder='Enter your email']").fill('amozit@yopmail.com');
    await page.locator("//input[@placeholder='Enter your password']").fill('Admin@123');
    await page.locator("//button[normalize-space()='Sign In']").click();

await page.locator('//input[@aria-label="Character 1 of 4"]').fill('1');
await page.locator('//input[@aria-label="Character 2 of 4"]').fill('2');
await page.locator('//input[@aria-label="Character 3 of 4"]').fill('3');
await page.locator('//input[@aria-label="Character 4 of 4"]').fill('4'); 
await page.locator("//button[normalize-space()='Verify']").click();


const img = await page.locator("//img[@alt='A house in a forest']")
await expect(img).toBeVisible();


//logout 
await page.locator("//span[@class='rt-Text rt-r-size-2 rt-r-weight-bold']").click();
await page.locator("//span[normalize-space()='Sign Out']").click();

})

test('Grouping3', async ({ page }) => {

    //login 
    

    await page.goto('https://testing.superadmin-amoz.betadelivery.com/login')

    await page.locator("//input[@placeholder='Enter your email']").fill('amozit@yopmail.com');
    await page.locator("//input[@placeholder='Enter your password']").fill('Admin@123');
    await page.locator("//button[normalize-space()='Sign In']").click();

await page.locator('//input[@aria-label="Character 1 of 4"]').fill('1');
await page.locator('//input[@aria-label="Character 2 of 4"]').fill('2');
await page.locator('//input[@aria-label="Character 3 of 4"]').fill('3');
await page.locator('//input[@aria-label="Character 4 of 4"]').fill('4'); 
await page.locator("//button[normalize-space()='Verify']").click();


const text = await page.locator("//span[normalize-space()='Daily']")
await expect(text).toHaveText("Daily"); 


//logout 
await page.locator("//span[@class='rt-Text rt-r-size-2 rt-r-weight-bold']").click();
await page.locator("//span[normalize-space()='Sign Out']").click();

})

test('Grouping4', async ({ page }) => {

    //login 

    await page.goto('https://testing.superadmin-amoz.betadelivery.com/login')

    await page.locator("//input[@placeholder='Enter your email']").fill('amozit@yopmail.com');
    await page.locator("//input[@placeholder='Enter your password']").fill('Admin@123');
    await page.locator("//button[normalize-space()='Sign In']").click();

await page.locator('//input[@aria-label="Character 1 of 4"]').fill('1');
await page.locator('//input[@aria-label="Character 2 of 4"]').fill('2');
await page.locator('//input[@aria-label="Character 3 of 4"]').fill('3');
await page.locator('//input[@aria-label="Character 4 of 4"]').fill('4'); 
await page.locator("//button[normalize-space()='Verify']").click();


const text = await page.locator("//span[normalize-space()='Daily']")
await expect(text).toHaveText("Daily"); 


//logout 
await page.locator("//span[@class='rt-Text rt-r-size-2 rt-r-weight-bold']").click();
await page.locator("//span[normalize-space()='Sign Out']").click();

})