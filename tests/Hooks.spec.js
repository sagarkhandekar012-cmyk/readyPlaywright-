const { test, expect } = require('@playwright/test');


test('homePage', async ({ page }) => {

    // open login page
    await page.goto('https://testing.companyadmin-amoz.betadelivery.com/login');

    // login with valid user credentials
    await page.locator("//input[@placeholder='Enter Email Id']").fill('shopby@yopmail.com');
    await page.locator("//input[@placeholder='Enter Password']").fill('Test@123');
    await page.locator("//button[normalize-space()='Login']").click();

    // navigate to Brand Profiles page
    await page.locator("//span[normalize-space()='Brand Management']").click();
    await page.getByRole('link', { name: 'Brand Profiles' }).click();

    // keep the correct table class used by the page
    const table = page.locator('.rt-TableRootTable');

    // wait for the table to be ready before counting it
    await page.waitForTimeout(5000); // wait for 2 seconds to ensure the table is loaded
    await table.waitFor();
    await expect(table).toBeVisible();

    // count columns as expected on this page
    const columns = table.locator('thead tr th');
    console.log('Number of columns: ' + await columns.count());
    expect(await columns.count()).toBe(10);

    // count rows as expected on this page
    const rows = table.locator('tbody tr');
    console.log('Number of rows: ' + await rows.count());
    await expect(rows).toHaveCount(8);

    // logout section
    await page.locator("//div[@class='rt-Flex rt-r-ai-center rt-r-jc-start rt-r-gap-4 rt-r-w']").click();
    await page.locator("//span[normalize-space()='Sign Out']").click();

    await page.waitForTimeout(5000); // wait for 2 seconds to ensure the logout is completed
});



test('addVehiclePage', async ({ page }) => {

    await page.waitForTimeout(5000); // wait for 2 seconds to ensure the page is loaded

    await page.goto('https://testing.companyadmin-amoz.betadelivery.com/login');
    // login
  await page.locator("//input[@placeholder='Enter Email Id']").fill('shopby@yopmail.com');
    await page.locator("//input[@placeholder='Enter Password']").fill('Test@123');
    await page.locator("//button[normalize-space()='Login']").click();
    
    
    // add to cart
    await page.locator("//span[normalize-space()='Brand Management']").click();
    await page.getByRole('link', { name: 'Brand Profiles' }).click();

     await page.waitForTimeout(5000); 

    const onOfButton = await page.locator("//body[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/table[1]/tbody[1]/tr[4]/td[10]/div[1]/div[1]/button[1]/span[1]");
    await expect(onOfButton).toBeVisible();
    if (await onOfButton.isVisible()) {
        console.log('On/Off button is visible');
    } else {
        console.log('On/Off button is not visible');
    
    }
    
    // logout
     await page.locator("//div[@class='rt-Flex rt-r-ai-center rt-r-jc-start rt-r-gap-4 rt-r-w']").click();
    await page.locator("//span[normalize-space()='Sign Out']").click();
})

