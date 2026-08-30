const {test, expect} = require('@playwright/test');

test('Date  Picker', async({page}) => {

 await page.goto("https://testing.companyadmin-amoz.betadelivery.com/login");
//login
    const isEmailInputEnabled = page.locator("//input[@placeholder='Enter Email Id']")
    await expect(isEmailInputEnabled).toBeEnabled();
    await isEmailInputEnabled.fill('shopby@yopmail.com');
    await expect(isEmailInputEnabled).toHaveValue("shopby@yopmail.com");

    const passwordInput = page.getByRole('textbox', { name: 'Password' });
    await passwordInput.fill('Test@123');


    const loginButton = page.locator("//button[normalize-space()='Login']");
    await expect(loginButton).toHaveAttribute('type', 'submit');
    await loginButton.click();


    //select date from date picker
    await page.locator('//*[@id="root"]/div/div/aside/div/div/a[3]/button/span').click();
    await page.locator("(//*[name()='svg'][@class='lucide lucide-calendar-days'])[1]").click();
    await page.locator("input[name='delivery_date']").fill('2026-09-05');


    await page.waitForTimeout(5000);

});