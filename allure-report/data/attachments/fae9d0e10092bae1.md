# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: retry.spec.js >> pom
- Location: tests\retry.spec.js:6:5

# Error details

```
TypeError: _login.logininpage is not a constructor
```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test';
  2  | import { logininpage } from './pages/login';
  3  | import { homePage } from './pages/home';
  4  | import { last } from './pages/last';
  5  | 
  6  | test('pom' ,async({page})=> {
  7  | 
  8  |     //login
> 9  |     const login = new logininpage(page);
     |                   ^ TypeError: _login.logininpage is not a constructor
  10 |     await login.gotoLoginPage();
  11 |     await login.login('kalakendra@yopmail.com','Test@123');
  12 |     await page.waitForTimeout(5000);
  13 | 
  14 |     //home
  15 |     const turrfs = new homePage(page);
  16 |     await turrfs.turfs('Rk turf');
  17 |     await page.waitForTimeout(5000);
  18 | 
  19 | //last
  20 | const view = new last(page);
  21 | await page.waitForTimeout(5000);
  22 | const status=await view.newPage('Turf Information');
  23 | expect(await status).toBe(true);
  24 | });
```