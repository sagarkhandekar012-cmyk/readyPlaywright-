//const {test, expect} = require('@playwright/test');
import { test, expect } from '@playwright/test';
test('table', async({page}) => {

    await page.goto("https://testing.companyadmin-amoz.betadelivery.com/login");
//login
    const isEmailInputEnabled = page.locator("//input[@placeholder='Enter Email Id']")
    await expect(isEmailInputEnabled).toBeEnabled();
    await isEmailInputEnabled.fill('shopby@yopmail.com');
    await expect(isEmailInputEnabled).toHaveValue("shopby@yopmail.com");

    const passwordInput = page.getByRole('textbox', { name: 'Password' });
    await passwordInput.fill('Test@123');


    const loginButton = page.locator("//button[normalize-space()='Login']");
    await expect(loginButton).toHaveAttribute('type', 'submit');
    await loginButton.click();

// redirect to table page
    await page.locator('//*[@id="root"]/div/div/aside/div/div/a[3]/button/span').click();


    const table = page.locator('(//table[@class="rt-TableRootTable"])[1]');
    await table.waitFor();


    const columns = await table.locator("thead tr th")
    console.log('Number of columns: ' + await columns.count());
    expect(await columns.count()).toBe(10);

    

    const rows = await table.locator('tbody tr');
    await rows.nth(7).waitFor();
    console.log('Number of rows: ' + await rows.count());
    expect(await rows.count()).toBe(8);

//use filter to search for a specific row
    const matchingRow = await rows.filter({
    has: page.locator("td"),
    hasText: "PRD-1115"
    })
    // this will click on the eye icon of the matching row
    //await matchingRow.locator('svg.lucide-eye').click();
    

        for (let i = 0; i < await rows.count(); i++)
     {
        const row = await rows.nth(i);
        const tds = await row.locator("td");
        
        for (let j = 0; j < await tds.count()-1; j++) 
        {
            
            console.log(await tds.nth(j).textContent());
    

        }
     }


    await page.waitForTimeout(5000);
});