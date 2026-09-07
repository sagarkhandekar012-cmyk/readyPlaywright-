const {test, expect} = require('@playwright/test');

test('Keyboard Action', async ({ page }) => {

    await page.goto("https://gotranscript.com/text-compare");

    //await page.locator("name='text1'").fill('i am doing the practice of keyboard action'); // Fill the text area with the specified text
    //await page.type('[name="text1"]', 'i am doing the practice of keyboard action'); //  Type the specified text into the text area
await page.locator('[name="text1"]').pressSequentially('i am doing the practice of keyboard action');



    // there the press is use for when want to press the multipe key at one time like ctrl+a, ctrl+c, ctrl+v etc. 
    // and down and up is use for when we want to press the single key like tab, enter etc.
// ctrl+a
await page.keyboard.press('Control+A');

//ctrl+c
await page.keyboard.press('Control+C');

//tab
await page.keyboard.down('Tab');//down is use for when we want to press the key down and hold it
await page.keyboard.up('Tab');//up is use for when we want to release the key after pressing it down
//ctrl+v
await page.keyboard.press('Control+V');

    await page.waitForTimeout(5000); // Wait for 5 seconds to observe the page load
});