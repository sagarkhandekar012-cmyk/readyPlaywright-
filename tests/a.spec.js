const {test ,expect} = require('@playwright/test');

//1
test.skip('alert', async ({page}) => { 

    await page.goto("https://testautomationpractice.blogspot.com/")

    /*here we are enbaleing the dialog box to handle the alert */  //dialog window handler  
    page.on('dialog', async dialog=>{
    expect(dialog.type()).toContain('alert') /* here we are checking the alert is present or not */
    expect(dialog.message()).toContain('I am an alert box!') /* here we are checking the alert message is present or not */
    await dialog.accept(); /* here we are accepting the alert */
    
})
    await page.getByRole('button', { name: 'Simple Alert' }).click(); /* here we are clicking the button to trigger the alert */    

    await page.waitForTimeout(5000); /* here we are waiting for the alert to appear */

});

//2
test.skip('Confirmation Dialog-Alert with OK and Cancel buttons', async ({page}) => { 

    await page.goto("https://testautomationpractice.blogspot.com/")

    /*here we are enbaleing the dialog box to handle the alert */  //dialog window handler  
    page.on('dialog', async dialog=>{
    expect(dialog.type()).toContain('confirm') /* here we are checking the confirm dialog is present or not */
    expect(dialog.message()).toContain('Press a button!') /* here we are checking the confirm dialog message is present or not */
    //await dialog.accept(); /* here we are accepting the alert */
    await dialog.accept(); /* here we are accepting the alert */
    //await dialog.dismiss(); /* here we are dismissing the alert */

})
    await page.click("//button[@id='confirmBtn']"); /* here we are clicking the button to trigger the confirm dialog */    
    
    await expect(page.locator("//p[@id='demo']")).toHaveText('You pressed OK!') /* here we are checking the confirm dialog message is present or not */
    
    
    await page.waitForTimeout(5000); /* here we are waiting for the confirm dialog to appear */

});

//3 
test('prompt Dialog-Alert with OK and Cancel buttons', async ({page}) => { 

    await page.goto("https://testautomationpractice.blogspot.com/")

    /*here we are enbaleing the dialog box to handle the alert */  //dialog window handler  
    page.on('dialog', async dialog=>{
    expect(dialog.type()).toContain('prompt') /* here we are checking the prompt dialog is present or not */
    expect(dialog.message()).toContain('Please enter your name:') /* here we are checking the prompt dialog message is present or not */
    expect(dialog.defaultValue()).toContain('Harry Potter') /* here we are checking the prompt dialog default value is present or not */
    
    await dialog.accept('Raghu Bhai'); /* here we are accepting the alert */
    //await dialog.dismiss(); /* here we are dismissing the alert */

})
    await page.click("(//button[normalize-space()='Prompt Alert'])[1]"); /* here we are clicking the button to trigger the confirm dialog */    
    
    await expect(page.locator("(//p[@id='demo'])[1]")).toHaveText('Hello Raghu Bhai! How are you today?') /* here we are checking the confirm dialog message is present or not */
    
    
    await page.waitForTimeout(5000); /* here we are waiting for the confirm dialog to appear */

});