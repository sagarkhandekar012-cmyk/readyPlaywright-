# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pomtest.spec.js >> pom
- Location: tests\pomtest.spec.js:6:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://companyadmin-amoz.betadelivery.com/", waiting until "load"

```

# Test source

```ts
  1  | exports.loginpage =
  2  | class loginpage {
  3  | 
  4  | constructor(page){
  5  | 
  6  | this.page = page;
  7  | this.emailInput = "//input[@placeholder='Enter Email Id']";
  8  | this.passwordInput = ".custom-textfield.password-input";
  9  | this.loginButton ="//button[normalize-space()='Login']";
  10 | }
  11 | 
  12 | async gotoLoginPage(){
> 13 |     await this.page.goto("https://companyadmin-amoz.betadelivery.com/");
     |                     ^ Error: page.goto: Test timeout of 30000ms exceeded.
  14 | }
  15 | 
  16 | async login(email,password){
  17 | await this.page.locator(this.emailInput).fill(email);
  18 | await this.page.locator(this.passwordInput).fill(password);
  19 | await this.page.locator(this.loginButton).click();
  20 | }
  21 | }
```