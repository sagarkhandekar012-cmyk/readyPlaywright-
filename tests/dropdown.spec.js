const {test, expect} = require('@playwright/test');

test('dropdown', async ({page}) => {


await page.goto('https://testautomationpractice.blogspot.com/');

// multiple ways to select option from the dropdown
 
//await page.locator("#country").selectOption({label: "India"}); //this is for the select option from the
                                                                //dropdown using the label */
//await page.locator('#country').selectOption('India'); //this is for the select option from the dropdown 
                                                        //using the value
//await page.locator('#country').selectOption({value: 'uk'}); // this is for the select option from the 
                                                              // dropdown using the value
//await page.locator('#country').selectOption({index: 3}); // this is for the select option from the 
                                                           // dropdown using the index
//await page.selectOption('#country',"India"); // this is for the select option from the dropdown using 
                                            //the value

//Assertions 
// 1. check number of options in the dropdown
//const options = await page.locator('#country option');
//await expect(options).toHaveCount(10); // this is for the check number of options in the dropdown


// 2. check number of optionsin the dropdown -approach 2
//const options =await page.$$("#country option")
//console.log("Number of options in the dropdown: " , options.length);  // this is for the check number of options in the dropdown if you want to check there is how many option have that time you can use the console.log to check the number of options in the dropdown
//await expect(options.length).toBe(10); // this is for the check number of options in the dropdown this is assersionto check the number os option have in the dropdown if you want to check there is how many option have that time you can use the console.log to check the number of options in the dropdown

// 3. check presence of option in the dropdown Approach 1
//const content = await page.locator("#country").textContent(); // this is for the check presence of option in the dropdown
//await  expect(content.includes("India")).toBeTruthy(); // this is for the check presence of option in the dropdown if you want to check there is how many option have that time you can use the console.log to check the number of options in the dropdown

/*
// 4. check presence of value in the dropdown Approach 2 -using looping
const options = await page.locator('#country option').all(); // this is for the check presence of value in the dropdown
let status = false; // this is for the check presence of value in the dropdown
for (const option of options)
{
//console.log(await option.textContent()); // this is for the check presence of value in the dropdown
let value = await option.textContent(); // this is for the check presence of value in the dropdown
if(value.includes('France')) // this is for the check presence of value in the dropdown
{
    status = true; // this is for the check presence of value in the dropdown
    break; // this is for the check presence of value in the dropdown
}
}
expect(status).toBeTruthy(); // this is for the check presence of value in the dropdown
*/

//  5. select option using looping statement 
//  when the select the option using looping statement and then check the selected option is selected or not
const options = await page.locator('#country option').all(); 
for (const option of options)
{
    let value = await option.textContent();
    if(value.includes('France'))
    {
        await page.selectOption('#country', 'France');
        break;
    }
}



await page.waitForTimeout(5000);





})