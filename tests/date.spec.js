const {test, expect} = require('@playwright/test');

test('table', async({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/")

//await page.locator('#datepicker','01/12/2027')

await page.locator('#datepicker').click()

const year="2027"
const month="December"
const date="1"

while(true){
    const currentyear=await page.locator('.ui-datepicker-year').textContent()
    const currentmonth=await page.locator('.ui-datepicker-month').textContent()

    if(currentyear == year && currentmonth == month){
        break;
    }
    await page.locator('.ui-icon.ui-icon-circle-triangle-e').click()
    //await page.locator('.ui-icon.ui-icon-circle-triangle-w').click()
}

const dates = await page.$$("//a[@class='ui-state-default']")
//date select using loop
/*
for (const dt of dates)
{
    if(await dt.textContent()==date)
    {
        await dt.click();
        break;
    }
}
*/

await page.locator(`//a[@class='ui-state-default'] [text()='${date}']`).click();


await page.waitForTimeout(5000);
});