const {test, expect} = require('@playwright/test');

test('checkbox', async ({page}) => {

await page.goto('https://testautomationpractice.blogspot.com/');

//single checkbox
await page.locator("(//input[@id='monday'])[1]").check();  // this is for the single checkbox check method
//await page.check("(//input[@id='monday'])[1]");

expect (await page.locator ("(//input[@id='monday'])[1]")).toBeChecked();  // this is for the single checkbox checked or not
expect (await page.locator ("(//input[@id='monday'])[1]").isChecked()).toBeTruthy(); // this is for the single checkbox checked or not

expect (await page.locator ("(//input[@id='friday'])[1]").isChecked()).toBeFalsy();  // this is for the single checkbox checked or not

//multiple checkbox
const checkboxes =[ // this is the array of the multiple checkbox and we are using the array to check the multiple checkbox
                        "(//input[@id='monday'])[1]",
                        "(//input[@id='wednesday'])[1]",
                        "(//input[@id='thursday'])[1]"

];

for (const locat of checkboxes)/*there is the checkboxes array and
                                 we are using the for loop to check the multiple checkbox andthe locat is the 
                                variable which is used to store the value of the checkbox and we are using the 
                                check() method to check the checkbox*/
     {
        await page.locator(locat).check(); /*this is for the multiple checkbox check method passing the
                                             locat variable to the check() method*/
     }

await page.waitForTimeout(5000);

for (const locat of checkboxes)
{
    if (await page.locator(locat).isChecked()) /*this is the if conditon for the multiple checkbox checked
                                                 or not there we will check the checkbox is checked or not*/
{
await page.locator(locat).uncheck(); /*this is for the multiple checkbox uncheck method passing the if
                                         condition when pass the checkbox are checked then the only that 
                                         checkbox will be unchecked*/
}
    }

await page.waitForTimeout(5000)

})