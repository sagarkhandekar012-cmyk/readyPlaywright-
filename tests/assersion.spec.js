const {test, expect}=require('@playwright/test')  //this is very important filed to any playwright code 

test('AssersionTest',async ({page})=>{ // in to under this line we will be write all code

    await page.goto ('https://testing.companyadmin-amoz.betadelivery.com/') // in this line we have to add the url of the websaite which we want to test

    // 1. expect (page).toHaveURL() this is the first assertion which we are going to use in this test case for the url validation
   await expect (page).toHaveURL('https://testing.companyadmin-amoz.betadelivery.com/')

   // 2. expect (page).toHaveTitle() this is the second assertion which we are going to use in this test case for the title validation
   await expect (page).toHaveTitle('AMOZ | Admin')

   // 3. expect (locator).toBeVisible() this is the third assertion which we are going to use in this test case for the logo validation by usin the toBeVisible() method we can check the logo is visible or not on the page and also we can check the button and other things are visible or not on the page
   const logoElement=await page.locator("(//img[@alt='Logo'])[1]")
   await expect (logoElement).toBeVisible()

   // 4. expect (locator).toBeEnabled() this is the fourth assertion which we can check the enabled fileds are actuly enabled 
   const mailBox=await page.locator('[name="email"]')
   await expect (mailBox).toBeEnabled()
   // 4.1 expect (locator).toBeDisabled()

   
   
})