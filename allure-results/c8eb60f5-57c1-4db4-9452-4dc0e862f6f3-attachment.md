# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: retry.spec.js >> pom
- Location: tests\retry.spec.js:6:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: true
Received: false
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e3]:
    - generic [ref=e4]:
      - complementary [ref=e5]:
        - heading [level=2] [ref=e6]:
          - img "A house in a forest" [ref=e7]
        - generic [ref=e9]:
          - link [ref=e10] [cursor=pointer]:
            - /url: /sports-fitness/dashboard
            - button "Dashboard Dashboard" [ref=e11]:
              - img "Dashboard" [ref=e12]
              - generic [ref=e13]: Dashboard
          - link [ref=e14] [cursor=pointer]:
            - /url: /sports-fitness/customer-booking
            - button "Customer Bookings Customer Bookings" [ref=e15]:
              - img "Customer Bookings" [ref=e16]
              - generic [ref=e17]: Customer Bookings
          - generic [ref=e18]:
            - button [expanded] [ref=e19] [cursor=pointer]:
              - button "Turf Management Turf Management" [ref=e20]:
                - generic [ref=e22]:
                  - img "Turf Management" [ref=e23]
                  - generic [ref=e24]: Turf Management
            - region "Turf Management Turf Management" [ref=e27]:
              - link [ref=e28] [cursor=pointer]:
                - /url: /sports-fitness/manage-turf
                - button "Manage Turfs" [ref=e29]
              - link [ref=e33] [cursor=pointer]:
                - /url: /sports-fitness/manage-add-ons
                - button "Manage Add-Ons" [active] [ref=e34]
          - link [ref=e38] [cursor=pointer]:
            - /url: /sports-fitness/discount-management
            - button "Discount Management Discount Management" [ref=e39]:
              - img "Discount Management" [ref=e40]
              - generic [ref=e41]: Discount Management
          - link [ref=e42] [cursor=pointer]:
            - /url: /sports-fitness/payment-management
            - button "Payment Management Payment Management" [ref=e43]:
              - img "Payment Management" [ref=e44]
              - generic [ref=e45]: Payment Management
          - link [ref=e46] [cursor=pointer]:
            - /url: /sports-fitness/subscription-model
            - button "Subscription model Subscription model" [ref=e47]:
              - img "Subscription model" [ref=e48]
              - generic [ref=e49]: Subscription model
          - link [ref=e50] [cursor=pointer]:
            - /url: /sports-fitness/customer-subscription
            - button "Customer Subscription Customer Subscription" [ref=e51]:
              - img "Customer Subscription" [ref=e52]
              - generic [ref=e53]: Customer Subscription
          - link [ref=e54] [cursor=pointer]:
            - /url: /general-queries
            - button "General Queries" [ref=e55]
      - generic [ref=e59]:
        - generic [ref=e60]:
          - generic [ref=e61]:
            - button [ref=e62]
            - generic [ref=e74]:
              - generic [ref=e75]: Sports Fitness
              - generic [ref=e77]:
                - generic [ref=e78]: ›
                - generic [ref=e79]: Manage Add Ons
          - generic [ref=e80]:
            - button "Toggle language" [ref=e81] [cursor=pointer]:
              - generic [ref=e82]: العربية
            - generic [ref=e86]:
              - button [ref=e87] [cursor=pointer]
              - generic [ref=e91]: 99+
            - heading "K kalakendra sports and fitness" [level=2] [ref=e92] [cursor=pointer]:
              - generic [ref=e93]:
                - generic [ref=e94]: K
                - generic [ref=e96]: kalakendra sports and fitness
        - generic [ref=e104]:
          - generic [ref=e105]:
            - textbox "Search..." [ref=e108]
            - button "Add New" [ref=e109]
          - table [ref=e116]:
            - rowgroup [ref=e117]:
              - row [ref=e118]:
                - columnheader "SR NO." [ref=e119]
                - columnheader "Image" [ref=e122]
                - columnheader "Name" [ref=e125] [cursor=pointer]
                - columnheader "Price" [ref=e128] [cursor=pointer]
                - columnheader "Quantity" [ref=e131] [cursor=pointer]
                - columnheader "Actions" [ref=e134]
            - rowgroup [ref=e137]:
              - row [ref=e138]:
                - cell "1" [ref=e139]
                - cell [ref=e141]
                - cell "bat" [ref=e145]
                - cell "Omani Rial currency symbol 20.000" [ref=e147]:
                  - generic [ref=e149]:
                    - img "Omani Rial currency symbol" [ref=e152]
                    - generic [ref=e153]: "20.000"
                - cell "3" [ref=e154]
                - cell [ref=e156]:
                  - generic [ref=e157]:
                    - img [ref=e158] [cursor=pointer]
                    - img [ref=e161] [cursor=pointer]
              - row [ref=e164]:
                - cell "2" [ref=e165]
                - cell [ref=e167]
                - cell "football" [ref=e171]
                - cell "Omani Rial currency symbol 100.000" [ref=e173]:
                  - generic [ref=e175]:
                    - img "Omani Rial currency symbol" [ref=e178]
                    - generic [ref=e179]: "100.000"
                - cell "450" [ref=e180]
                - cell [ref=e182]:
                  - generic [ref=e183]:
                    - img [ref=e184] [cursor=pointer]
                    - img [ref=e187] [cursor=pointer]
          - generic [ref=e190]:
            - generic [ref=e191]:
              - generic [ref=e192]: "Showing page 1 of 1 Results:"
              - combobox [ref=e193] [cursor=pointer]:
                - option "5" [selected]
                - option "10"
                - option "20"
                - option "50"
            - generic [ref=e194]:
              - button [disabled] [ref=e195]
              - generic [ref=e198]: "1"
              - button [disabled] [ref=e199]
    - region "Notifications Alt+T"
  - generic [aria-hidden] [ref=e206]: $0
```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test';
  2  | import { loginpage } from './pages/login';
  3  | import { homePage } from './pages/home';
  4  | import { last } from './pages/last';
  5  | 
  6  | test('pom' ,async({page})=> {
  7  | 
  8  |     //login
  9  |     const login = new loginpage(page);
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
> 23 | expect(await status).toBe(true);
     |                      ^ Error: expect(received).toBe(expected) // Object.is equality
  24 | });
```