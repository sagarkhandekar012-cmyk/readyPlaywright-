const {test, expect} = require('@playwright/test');

test('multiSelectDropdown', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    //select multiple option from multiselect dropdown

    //await page.locator('#colors').selectOption(['Blue', 'Red', 'Yellow']); // this is for the select multiple option from the multiselect dropdown using the value

    //Assertions
    // 1. check number of options in the multiselect dropdown
    
    //const ranga = await page.locator('#colors option');  // in this line we are check the 
    //await expect(ranga).toHaveCount(7);

    /*
    // 2. check number of options in dropdown using js array
    const ranga = await page.$$('#colors option'); 
    await expect(ranga.length).toBe(7);
    //console.log('number of the color option', ranga.length);  //if this line want to run commentout the the othere lines regarding to the const ranga line  
    //await expect(ranga).toHaveCount(7);  // comentout the console log and then remove the comment of this line 
*/

    // 3. check the presence of value in the dropdown
    const content=await page.locator('#colors').textContent();
    //await expect(content.includes('Blue')).toBeTruthy(); //only one line will run at one time the othere line will be always will be commentout
    await expect(content.includes('black')).toBeFalsy(); //only one line will run at one time the othere line will be always will be commentout


await page.waitForTimeout(5000); // this is for the wait for the timeout

}) 