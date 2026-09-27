exports.loginpage =
class loginpage {

constructor(page){

this.page = page;
this.emailInput = "//input[@placeholder='Enter Email Id']";
this.passwordInput = ".custom-textfield.password-input";
this.loginButton ="//button[normalize-space()='Login']";
}

async gotoLoginPage(){
    await this.page.goto("https://companyadmin-amoz.betadelivery.com/");
}

async login(email,password){
await this.page.locator(this.emailInput).fill(email);
await this.page.locator(this.passwordInput).fill(password);
await this.page.locator(this.loginButton).click();
}
}