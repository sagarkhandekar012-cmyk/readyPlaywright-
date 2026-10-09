# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: retry.spec.js >> pom
- Location: tests\retry.spec.js:6:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('tbody tr').filter({ hasText: 'Rk turf' }).locator('svg.lucide-eye')

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
                - button "Manage Add-Ons" [ref=e34]
          - link [ref=e38] [cursor=pointer]:
            - /url: /sports-fitness/discount-management
            - button "Discount Management Discount Management" [active] [ref=e39]:
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
                - generic [ref=e79]: Discount Management
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
            - button "Add Discount" [ref=e109] [cursor=pointer]
          - table [ref=e116]:
            - rowgroup [ref=e117]:
              - row [ref=e118]:
                - columnheader "SR NO." [ref=e119]
                - columnheader "Name of Code" [ref=e122] [cursor=pointer]
                - columnheader "Discount Value" [ref=e125] [cursor=pointer]
                - columnheader "Duration" [ref=e128] [cursor=pointer]
                - columnheader "Conditions" [ref=e131] [cursor=pointer]
                - columnheader "Activate" [ref=e134]
                - columnheader "Actions" [ref=e137]
            - rowgroup [ref=e140]:
              - row [ref=e141]:
                - cell "1" [ref=e142]
                - cell "TURFCOUPONT5DZVF1S" [ref=e143]
                - cell "10.00%" [ref=e144]
                - cell "2 days" [ref=e145]
                - cell "test turf coupon" [ref=e146]
                - cell [ref=e147]:
                  - switch [checked] [ref=e149]
                - cell [ref=e151]:
                  - generic [ref=e152]:
                    - img [ref=e153] [cursor=pointer]
                    - img [ref=e156] [cursor=pointer]
                    - img [ref=e159] [cursor=pointer]
          - generic [ref=e162]:
            - generic [ref=e163]:
              - generic [ref=e164]: "Showing page 1 of 1 Results:"
              - combobox [ref=e165] [cursor=pointer]:
                - option "5"
                - option "10" [selected]
                - option "20"
                - option "50"
            - generic [ref=e166]:
              - button [disabled] [ref=e167]
              - generic [ref=e170]: "1"
              - button [disabled] [ref=e171]
    - region "Notifications Alt+T"
  - generic [aria-hidden] [ref=e178]: $0
```

# Test source

```ts
  1  | exports.homePage = class homePage {
  2  |     constructor(page) {
  3  |         this.page = page;
  4  |         this.turfManage = "//span[normalize-space()='Turf Management']";
  5  |         this.manageTurf = "//span[normalize-space()='Manage Turfs']";
  6  |     }
  7  | 
  8  |     async turfs(turfName) {
  9  |         // १. पेजवर नेव्हिगेट करणे
  10 |         await this.page.locator(this.turfManage).click();
  11 |         await this.page.locator(this.manageTurf).click();
  12 | 
  13 |         // २. थेट ती Turf असलेली रो शोधणे (लूपची गरज नाही!)
  14 |         const targetRow = this.page.locator("tbody tr").filter({ hasText: turfName });
  15 | 
  16 |         // ३. त्या विशिष्ट रो मधील आयकॉन किंवा स्विचवर क्लिक करणे
  17 |         // (तुमच्या गरजेनुसार येथे 'svg.lucide-eye' किंवा 'span.rt-SwitchThumb' वापरा)
> 18 |         await targetRow.locator("svg.lucide-eye").click();
     |                                                   ^ Error: locator.click: Test timeout of 30000ms exceeded.
  19 |         
  20 |         console.log(`>>> Successfully clicked for Turf: ${turfName} <<<`);
  21 |     }
  22 | }
```