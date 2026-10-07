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
            - button "Customer Bookings Customer Bookings" [active] [ref=e15]:
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
                - generic [ref=e79]: Customer Booking
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
        - generic [ref=e103]:
          - generic [ref=e104]:
            - tablist [ref=e105]:
              - tab "New Bookings" [selected] [ref=e106] [cursor=pointer]
              - tab "Active Bookings" [ref=e107] [cursor=pointer]
              - tab "Completed Bookings (18)" [ref=e108] [cursor=pointer]
              - tab "Cancelled Bookings (15)" [ref=e109] [cursor=pointer]
            - generic [ref=e110]:
              - textbox "Search..." [ref=e112]
              - button "Bookings" [ref=e113]
          - tabpanel "New Bookings" [ref=e116]:
            - generic [ref=e119]:
              - tablist [ref=e120]:
                - generic [ref=e121]:
                  - generic [ref=e126]: No new bookings found
                  - generic [ref=e127]: New bookings will show up here when available
              - generic [ref=e129]:
                - button "Previous page" [disabled] [ref=e130]
                - button "Page 1" [ref=e133] [cursor=pointer]: "1"
                - button "Next page" [disabled] [ref=e134]
    - region "Notifications Alt+T"
  - generic [aria-hidden] [ref=e141]: $0
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