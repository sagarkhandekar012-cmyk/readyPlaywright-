# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: alertamoz.spec.js >> login page message box
- Location: tests\alertamoz.spec.js:6:1

# Error details

```
ReferenceError: loginPageMessage is not defined
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - button "Toggle language" [ref=e5] [cursor=pointer]:
      - generic [ref=e6]: AR
    - img "Logo" [ref=e11]
    - generic [ref=e13]:
      - generic [ref=e14]: Welcome to Company Admin
      - generic [ref=e15]: Please Login to continue
      - generic [ref=e17]:
        - textbox "Enter Email Id" [ref=e20]: cleanerservices@yopmail.com
        - generic [ref=e21]:
          - generic [ref=e22]:
            - textbox "Enter Password" [ref=e23]
            - button "Show password" [ref=e24]
          - generic [ref=e30]: Password is required
        - link "Forgot Password?" [ref=e31] [cursor=pointer]:
          - /url: /forgot-password
        - button "Login" [active] [ref=e32]
        - generic [ref=e33]:
          - text: Don't have an account?
          - link "Sign up" [ref=e34] [cursor=pointer]:
            - /url: /select-service
  - region "Notifications Alt+T":
    - alert [ref=e36]:
      - text: Please fix the highlighted field
      - button "close" [ref=e40] [cursor=pointer]
      - progressbar "notification timer" [ref=e45]
```

# Test source

```ts
  1  | // in that code there i am checkin the alert message but the messages are not visible we have to manage that 
  2  | 
  3  | const {test, expect} = require('@playwright/test');
  4  | //test.fixme();
  5  | 
  6  | test('login page message box',async({page})=> {
  7  | 
  8  |  await page.goto("https://testing.companyadmin-amoz.betadelivery.com/login", );
  9  | //login
  10 |     const isEmailInputEnabled = page.locator("//input[@placeholder='Enter Email Id']")
  11 |     await expect(isEmailInputEnabled).toBeEnabled();
  12 |     await isEmailInputEnabled.fill('cleanerservices@yopmail.com');
  13 |     await expect(isEmailInputEnabled).toHaveValue("cleanerservices@yopmail.com");
  14 | 
  15 | 
  16 |     const loginButton = await page.locator("//button[normalize-space()='Login']");
  17 |     await expect(loginButton).toHaveAttribute('type', 'submit');
  18 |     await loginButton.click();
  19 | 
  20 |     //const loginPagemessage = await page.getByText('Please fix the highlighted field')
  21 | const loginPagemessage =await page.locator("//section[@aria-label='Notifications Alt+T']")
> 22 |     await expect(loginPageMessage).toBeVisible();
     |                  ^ ReferenceError: loginPageMessage is not defined
  23 |   /*  if(await loginPagemessage.isVisible()){
  24 |     console.log('there is also this message is visible ')
  25 | }
  26 | else{
  27 |     console.log("there is the message is not visible")
  28 | }
  29 | 
  30 | if(await loginPagemessage.textContent() === "Please fix the highlighted field"){
  31 |     console.log("there is the message is showing")
  32 | }
  33 | else{
  34 |     console.log('there is the message is not showing')
  35 | }
  36 | */
  37 | 
  38 | })
  39 | 
  40 | test('alert amoz', async({page}) => {
  41 | //test.skip();
  42 |  await page.goto("https://testing.companyadmin-amoz.betadelivery.com/login", );
  43 | //login
  44 |     const isEmailInputEnabled = page.locator("//input[@placeholder='Enter Email Id']")
  45 |     await expect(isEmailInputEnabled).toBeEnabled();
  46 |     await isEmailInputEnabled.fill('cleanerservices@yopmail.com');
  47 |     await expect(isEmailInputEnabled).toHaveValue("cleanerservices@yopmail.com");
  48 | 
  49 |     const passwordInput = page.getByRole('textbox', { name: 'Password' });
  50 |     await passwordInput.fill('Test@123');
  51 | 
  52 |     
  53 | 
  54 |     
  55 |     const loginButton = page.locator("//button[normalize-space()='Login']");
  56 |     await expect(loginButton).toHaveAttribute('type', 'submit');
  57 |     await loginButton.click();
  58 | /*
  59 | await page.on('dialog', async dialog=> {
  60 | expect(dialog.type()).toContain('alert')
  61 | expect(dialog.message()).toContainText('hello')
  62 | })
  63 | */
  64 | //const toastMessage = page.locator("//section[@aria-label='Notifications Alt+T']");
  65 | // Replace lines 27-31 with this clean, robust approach:
  66 | const toastMessage = page.getByText('Login Successfully');
  67 | if(await toastMessage.isVisible())
  68 | {
  69 |     console.log("message is visible ")
  70 | }
  71 | else{
  72 | console.log("message is not visible ")
  73 | }
  74 | 
  75 | // Wait for it to become visible and verify it contains the text
  76 | //await expect(toastMessage).toBeVisible();
  77 | await expect(toastMessage).toHaveText('Login Successfully');
  78 | if(await toastMessage.textContent() === "Login Successfully"){
  79 |     console.log("machig the text exactly ")
  80 | }
  81 | else{
  82 |     console.log('not maching the text ')
  83 | }
  84 | await page.waitForTimeout(5000);
  85 | 
  86 | 
  87 | })
```