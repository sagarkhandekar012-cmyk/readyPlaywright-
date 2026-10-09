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

Expected: false
Received: true
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
                - link "Manage Turf" [ref=e79] [cursor=pointer]:
                  - /url: /sports-fitness/manage-turf
              - generic [ref=e80]:
                - generic [ref=e81]: ›
                - generic [ref=e82]: View Details
          - generic [ref=e83]:
            - button "Toggle language" [ref=e84] [cursor=pointer]:
              - generic [ref=e85]: العربية
            - generic [ref=e89]:
              - button [ref=e90] [cursor=pointer]
              - generic [ref=e94]: 99+
            - heading "K kalakendra sports and fitness" [level=2] [ref=e95] [cursor=pointer]:
              - generic [ref=e96]:
                - generic [ref=e97]: K
                - generic [ref=e99]: kalakendra sports and fitness
        - generic [ref=e105]:
          - button "Back" [ref=e108]
          - generic [ref=e109]:
            - generic [ref=e110]:
              - heading "Turf Images" [level=1] [ref=e111]
              - generic [ref=e112]:
                - img "Turf Media" [ref=e113]
                - img "Turf Media" [ref=e114]
                - img "Turf Media" [ref=e115]
            - heading "Turf Information" [level=1] [ref=e116]
            - generic [ref=e118]:
              - generic [ref=e119]: "Turf Name:"
              - generic [ref=e120]: Rk turf
            - heading "Contact Information" [level=1] [ref=e121]
            - generic [ref=e122]:
              - generic [ref=e123]:
                - generic [ref=e124]: "Phone number:"
                - generic [ref=e125]: +91-9874561235
              - generic [ref=e126]:
                - generic [ref=e127]: "Email id:"
                - generic [ref=e128]: kalakendra@yopmail.com
            - heading "Location" [level=1] [ref=e129]
            - generic [ref=e130]: New Link Road, Malad West, muscat, Muscat, Oman, 400064
            - heading "Courts" [level=1] [ref=e132]
            - generic [ref=e135]:
              - heading [level=3] [ref=e136]:
                - button "ronaldo" [expanded] [ref=e137]
              - region "ronaldo" [ref=e140]:
                - generic [ref=e141]:
                  - generic [ref=e142]:
                    - generic [ref=e143]: "Capacity:"
                    - generic [ref=e144]: "23"
                  - generic [ref=e145]:
                    - generic [ref=e146]: "Size:"
                    - generic [ref=e147]: "244"
                  - generic [ref=e148]:
                    - generic [ref=e149]: "Type:"
                    - generic [ref=e150]: Indoor Turf
                  - generic [ref=e151]:
                    - generic [ref=e152]: "Sport:"
                    - generic [ref=e153]: Cricket
                  - generic [ref=e154]:
                    - generic [ref=e155]: "Pricing:"
                    - generic [ref=e157]:
                      - img "Omani Rial currency symbol" [ref=e160]
                      - generic [ref=e161]: "100.000"
                      - generic [ref=e162]: / hour
                - generic [ref=e163]:
                  - generic [ref=e164]: "Images:"
                  - generic [ref=e165]:
                    - img "ronaldo image" [ref=e166]
                    - img "ronaldo image" [ref=e167]
                    - img "ronaldo image" [ref=e168]
                    - img "ronaldo image" [ref=e169]
          - button "Edit" [ref=e171] [cursor=pointer]
    - region "Notifications Alt+T"
  - generic [aria-hidden] [ref=e179]: $0
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
> 23 | expect(await status).toBe(false);
     |                      ^ Error: expect(received).toBe(expected) // Object.is equality
  24 | });
```