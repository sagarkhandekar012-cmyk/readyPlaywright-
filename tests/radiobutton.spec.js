const {test,expect}=require('@playwright/test')  //this is very important filed to any playwright code

test('radiobutton',async ({page})=>{ // in to under this line we will be write all code
    
await page.goto ('https://testautomationpractice.blogspot.com/')

//radio button
//await page.locator("//input[@id='male']").check();
await page.check("//input[@id='male']"); //this is also for the radio button check method
await expect(await page.locator("//input[@id='male']")).toBeChecked()  // this is for the radio button checked or not
await expect(await page.locator("//input[@id='male']").isChecked()).toBeTruthy();  // this is also for the radio button checked or not


await expect(await page.locator("(//input[@id='female'])[1]").isChecked()).toBeFalsy()  // this is for the radio button checked or not
//await expect(await page.locator("(//input[@id='female'])[1]")).not.toBeChecked()  // this is also for the radio button checked or not


await page.waitForTimeout(5000);

})