// in that code there i am checkin the alert message but the messages are not visible we have to manage that 

const {test, expect} = require('@playwright/test');
test.fixme();

test('login page message box',async({page})=> {

 await page.goto("https://testing.companyadmin-amoz.betadelivery.com/login", );
//login
    const isEmailInputEnabled = page.locator("//input[@placeholder='Enter Email Id']")
    await expect(isEmailInputEnabled).toBeEnabled();
    await isEmailInputEnabled.fill('cleanerservices@yopmail.com');
    await expect(isEmailInputEnabled).toHaveValue("cleanerservices@yopmail.com");


    const loginButton = await page.locator("//button[normalize-space()='Login']");
    await expect(loginButton).toHaveAttribute('type', 'submit');
    await loginButton.click();

    //const loginPagemessage = await page.getByText('Please fix the highlighted field')
const loginPagemessage =await page.locator("//section[@aria-label='Notifications Alt+T']")
    await expect(loginPageMessage).toBeVisible();
  /*  if(await loginPagemessage.isVisible()){
    console.log('there is also this message is visible ')
}
else{
    console.log("there is the message is not visible")
}

if(await loginPagemessage.textContent() === "Please fix the highlighted field"){
    console.log("there is the message is showing")
}
else{
    console.log('there is the message is not showing')
}
*/

})

test('alert amoz', async({page}) => {
test.skip();
 await page.goto("https://testing.companyadmin-amoz.betadelivery.com/login", );
//login
    const isEmailInputEnabled = page.locator("//input[@placeholder='Enter Email Id']")
    await expect(isEmailInputEnabled).toBeEnabled();
    await isEmailInputEnabled.fill('cleanerservices@yopmail.com');
    await expect(isEmailInputEnabled).toHaveValue("cleanerservices@yopmail.com");

    const passwordInput = page.getByRole('textbox', { name: 'Password' });
    await passwordInput.fill('Test@123');

    

    
    const loginButton = page.locator("//button[normalize-space()='Login']");
    await expect(loginButton).toHaveAttribute('type', 'submit');
    await loginButton.click();
/*
await page.on('dialog', async dialog=> {
expect(dialog.type()).toContain('alert')
expect(dialog.message()).toContainText('hello')
})
*/
//const toastMessage = page.locator("//section[@aria-label='Notifications Alt+T']");
// Replace lines 27-31 with this clean, robust approach:
const toastMessage = page.getByText('Login Successfully');
if(await toastMessage.isVisible())
{
    console.log("message is visible ")
}
else{
console.log("message is not visible ")
}

// Wait for it to become visible and verify it contains the text
//await expect(toastMessage).toBeVisible();
await expect(toastMessage).toHaveText('Login Successfully');
if(await toastMessage.textContent() === "Login Successfully"){
    console.log("machig the text exactly ")
}
else{
    console.log('not maching the text ')
}
await page.waitForTimeout(5000);


})