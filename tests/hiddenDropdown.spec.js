const {test , expect} = require('@playwright/test');

test('hiddenDropdown', async ({page}) => {  

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList')

await page.locator("[name='username']").fill('Admin'); /* there we have fill on the data in to the dropdown by using locator */
await page.locator("[name='password']").fill('admin123'); 
await page.locator("[type='submit']").click();/*there we have fill on the data in to the dropdown by using locator */


await page.locator('div.oxd-layout.orangehrm-upgrade-layout').click(); /* there we have fill on the data in to the dropdown by using locator */

await page.locator("div:nth-child(6) div:nth-child(1) div:nth-child(2) div:nth-child(1) div:nth-child(1) div:nth-child(2) i:nth-child(1)").click();

/* there we are waiting for the option */
await page.waitForTimeout(5000);

const options = await page.$$("//div[@role='listbox']//span") /* here we are getting the all the options in to the list */

for (let option of options) 
{
const jobTitle = await option.textContent();
console.log(jobTitle); /* here we are printing the all the options in to the console */

if (jobTitle.includes('QA Lead'))  /* here we are checking the option is present or not */
{
    console.log('Option is present in the list', jobTitle); /* here we are printing the message in to the console */
   await option.click(); /* here we are clicking the option */
    break;
}
}
await page.waitForTimeout(5000); /* here we are waiting for the option */
});