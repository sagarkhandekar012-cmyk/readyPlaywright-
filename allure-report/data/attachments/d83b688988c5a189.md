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
- generic [active] [ref=e1]:
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
                - button "Manage Add-Ons" [ref=e34]
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
                - generic [ref=e79]: Manage Turf
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
        - generic [ref=e102]:
          - generic [ref=e103]:
            - combobox [ref=e104]:
              - generic [ref=e105]: All Locations
            - combobox [ref=e108]:
              - generic [ref=e109]: All Categories
            - combobox [ref=e112]:
              - generic [ref=e113]: All Status
          - generic [ref=e117]:
            - generic [ref=e118]:
              - textbox "Search..." [ref=e121]
              - button "Add New" [ref=e122] [cursor=pointer]
            - table [ref=e129]:
              - rowgroup [ref=e130]:
                - row [ref=e131]:
                  - columnheader "SR NO." [ref=e132]
                  - columnheader "Turf Name" [ref=e135] [cursor=pointer]
                  - columnheader "Location" [ref=e138] [cursor=pointer]
                  - columnheader "Courts" [ref=e141] [cursor=pointer]
                  - columnheader "Service Subcategory" [ref=e144] [cursor=pointer]
                  - columnheader "Approve Status" [ref=e147] [cursor=pointer]
                  - columnheader "Available" [ref=e150]
                  - columnheader "Actions" [ref=e153]
              - rowgroup [ref=e156]:
                - row [ref=e157]:
                  - cell "1" [ref=e158]
                  - cell "sk patil turf" [ref=e159]
                  - cell "Mumbai" [ref=e160]
                  - cell "1" [ref=e161]
                  - cell "Cricket" [ref=e162]
                  - cell "Approved" [ref=e163]
                  - cell [ref=e165]:
                    - switch [checked] [ref=e167]
                  - cell [ref=e169]:
                    - generic [ref=e170]:
                      - img [ref=e171] [cursor=pointer]
                      - img [ref=e174] [cursor=pointer]
                      - img [ref=e177] [cursor=pointer]
                - row [ref=e180]:
                  - cell "2" [ref=e181]
                  - cell "Rk turf" [ref=e182]
                  - cell "muscat" [ref=e183]
                  - cell "1" [ref=e184]
                  - cell "Football" [ref=e185]
                  - cell "Disapproved" [ref=e186]
                  - cell [ref=e188]:
                    - switch [ref=e190]
                  - cell [ref=e192]:
                    - generic [ref=e193]:
                      - img [ref=e194] [cursor=pointer]
                      - img [ref=e197] [cursor=pointer]
                      - img [ref=e200] [cursor=pointer]
                - row [ref=e203]:
                  - cell "3" [ref=e204]
                  - cell "prati balaji" [ref=e205]
                  - cell "Mumbai" [ref=e206]
                  - cell "1" [ref=e207]
                  - cell "Cricket" [ref=e208]
                  - cell "Approved" [ref=e209]
                  - cell [ref=e211]:
                    - switch [checked] [ref=e213]
                  - cell [ref=e215]:
                    - generic [ref=e216]:
                      - img [ref=e217] [cursor=pointer]
                      - img [ref=e220] [cursor=pointer]
                      - img [ref=e223] [cursor=pointer]
                - row [ref=e226]:
                  - cell "4" [ref=e227]
                  - cell "fifa turf" [ref=e228]
                  - cell "Mumbai" [ref=e229]
                  - cell "1" [ref=e230]
                  - cell "Football" [ref=e231]
                  - cell "Approved" [ref=e232]
                  - cell [ref=e234]:
                    - switch [checked] [ref=e236]
                  - cell [ref=e238]:
                    - generic [ref=e239]:
                      - img [ref=e240] [cursor=pointer]
                      - img [ref=e243] [cursor=pointer]
                      - img [ref=e246] [cursor=pointer]
                - row [ref=e249]:
                  - cell "5" [ref=e250]
                  - cell "balaji turf" [ref=e251]
                  - cell "pune" [ref=e252]
                  - cell "2" [ref=e253]
                  - cell "Football" [ref=e254]
                  - cell "In-Complete" [ref=e255]
                  - cell [ref=e257]:
                    - switch [ref=e259]
                  - cell [ref=e261]:
                    - generic [ref=e262]:
                      - img [ref=e263] [cursor=pointer]
                      - img [ref=e266] [cursor=pointer]
                      - img [ref=e269] [cursor=pointer]
            - generic [ref=e272]:
              - generic [ref=e273]:
                - generic [ref=e274]: "Showing page 1 of 1 Results:"
                - combobox [ref=e275] [cursor=pointer]:
                  - option "5"
                  - option "10" [selected]
                  - option "20"
                  - option "50"
              - generic [ref=e276]:
                - button [disabled] [ref=e277]
                - generic [ref=e280]: "1"
                - button [disabled] [ref=e281]
    - region "Notifications Alt+T"
  - generic [aria-hidden] [ref=e288]: $0
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