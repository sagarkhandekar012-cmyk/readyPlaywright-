const {test,expect}=require('@playwright/test')  //this is very important filed to any playwright code

test('InputBoxTest',async ({page})=>{ // in to under this line we will be write all code
    
await page.goto ('https://testautomationpractice.blogspot.com/')

//Input box 

await expect(page.locator("//input[@id='name']")).toBeVisible()  // this is for the input box visible or not
await expect(page.locator("//input[@id='name']")).toBeEnabled()  // this is for the input box enabled or not
await expect(page.locator("//input[@id='name']")).toBeEmpty()  // this is for the input box empty or not
await expect(page.locator("//input[@id='name']")).toBeEditable()  // this is for the input box editable or not




//await page.locator("//input[@id='name']").fill('sagar')
await page.fill("//input[@id='name']","sagar")  // this is also for the input box fill method


await page.waitForTimeout(5000)

})