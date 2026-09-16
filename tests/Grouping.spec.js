import {test, expect} from '@playwright/test';


let page;
let context;
test.beforeAll(async ({ browser }) => {
    context = await browser.newContext(); // Removed 'const'
    page = await context.newPage();
    console.log('.....statrt.....');
});
test.afterAll(async()=>{
    console.log('-----END-----')
})

test.beforeEach(async () => {
    console.log('login');

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

test.afterEach(async ()=>{

    //logout 

await page.locator("//span[@class='rt-Text rt-r-size-2 rt-r-weight-bold']").click();
await page.locator("//span[normalize-space()='Sign Out']").click();
await page.locator("//button[normalize-space()='Sign Out']").click();

await page.waitForTimeout(2000);

console.log('logout');
})


test.describe('group1',() =>{


test('Test1', async () => {

await page.locator("//span[@class='rt-Text rt-r-size-6']").isVisible();

})

test('Test2', async () => {

const img = await page.locator("//img[@alt='A house in a forest']")
await expect(img).toBeVisible();

})

})// here is ending the Group1

test.describe('group2',() =>{



test('Test3', async () => {

const text = await page.locator("//span[normalize-space()='Daily']")
await expect(text).toHaveText("Daily"); 

})

test('Test4', async () => {

// Fixed CSS selector with dots for multiple classes
await page.locator("//button[normalize-space()='Manage Customers']").click();//rt-TableRootTable
  const table = page.locator('.rt-TableRootTable');

    // wait for the table to be ready before counting it
   // await page.waitForTimeout(5000); // wait for 2 seconds to ensure the table is loaded
    await table.waitFor();
    await expect(table).toBeVisible();

    // count columns as expected on this page
    const columns = table.locator('thead tr th');
    console.log('Number of columns: ' + await columns.count());
   // expect(await columns.count()).toHaveCount(7);
await expect(columns).toHaveCount(7);


    // count rows as expected on this page
    const rows = table.locator('tbody tr');
    console.log('Number of rows: ' + await rows.count());
    await expect(rows).toHaveCount(10);

})

})// here is ending the group2 