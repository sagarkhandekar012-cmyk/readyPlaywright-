import { expect, test } from "@playwright/test";
exports.CompanyLogin = class CompanyLogin {

    constructor(page) {
        this.page = page;
        this.emailInput = "//input[@placeholder='Enter Email Id']";
        this.passwordInput = ".custom-textfield.password-input";
        this.loginButton = "//button[normalize-space()='Login']";
    }
    async gotoLoginPage() {
        await this.page.goto("https://companyadmin-amoz.betadelivery.com/");
    }
    async login(email, password) {
        await this.page.locator(this.emailInput).fill(email);
        //await this.page.locator(this.emailInput).t
        await expect(this.page.locator(this.emailInput)).toHaveValue(email);//there we are ecpecting the value of email input field to be equal to the email we are passing in the function
        await this.page.locator(this.passwordInput).fill(password);

        await expect(this.page.locator(this.loginButton)).toBeVisible();//there we are ecpecting the login button to be visible after filling the email and password
        await expect(this.page.locator(this.loginButton)).toBeEnabled();//there we are ecpecting the login button to be enabled after filling the email and password
        await this.page.locator(this.loginButton).click();
    }
}