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
- generic [ref=e3]:
  - generic [ref=e4]:
    - complementary [ref=e5]:
      - heading "A house in a forest" [level=2] [ref=e6]:
        - img "A house in a forest"
      - generic [ref=e8]:
        - link [ref=e9] [cursor=pointer]:
          - /url: /sports-fitness/dashboard
          - button "Dashboard Dashboard" [ref=e10]:
            - img "Dashboard" [ref=e11]
            - generic [ref=e12]: Dashboard
        - link [ref=e13] [cursor=pointer]:
          - /url: /sports-fitness/customer-booking
          - button "Customer Bookings Customer Bookings" [ref=e14]:
            - img "Customer Bookings" [ref=e15]
            - generic [ref=e16]: Customer Bookings
        - generic [ref=e17]:
          - button [expanded] [ref=e18] [cursor=pointer]:
            - button "Turf Management Turf Management" [ref=e19]:
              - generic [ref=e21]:
                - img "Turf Management" [ref=e22]
                - generic [ref=e23]: Turf Management
          - region "Turf Management Turf Management" [ref=e26]:
            - link [ref=e27] [cursor=pointer]:
              - /url: /sports-fitness/manage-turf
              - button "Manage Turfs" [active] [ref=e28]
            - link [ref=e32] [cursor=pointer]:
              - /url: /sports-fitness/manage-add-ons
              - button "Manage Add-Ons" [ref=e33]
        - link [ref=e37] [cursor=pointer]:
          - /url: /sports-fitness/discount-management
          - button "Discount Management Discount Management" [ref=e38]:
            - img "Discount Management" [ref=e39]
            - generic [ref=e40]: Discount Management
        - link [ref=e41] [cursor=pointer]:
          - /url: /sports-fitness/payment-management
          - button "Payment Management Payment Management" [ref=e42]:
            - img "Payment Management" [ref=e43]
            - generic [ref=e44]: Payment Management
        - link [ref=e45] [cursor=pointer]:
          - /url: /sports-fitness/subscription-model
          - button "Subscription model Subscription model" [ref=e46]:
            - img "Subscription model" [ref=e47]
            - generic [ref=e48]: Subscription model
        - link [ref=e49] [cursor=pointer]:
          - /url: /sports-fitness/customer-subscription
          - button "Customer Subscription Customer Subscription" [ref=e50]:
            - img "Customer Subscription" [ref=e51]
            - generic [ref=e52]: Customer Subscription
        - link [ref=e53] [cursor=pointer]:
          - /url: /general-queries
          - button "General Queries" [ref=e54]
    - generic [ref=e58]:
      - generic [ref=e59]:
        - generic [ref=e60]:
          - button [ref=e61]
          - generic [ref=e73]:
            - generic [ref=e74]: Sports Fitness
            - generic [ref=e76]:
              - generic [ref=e77]: ›
              - generic [ref=e78]: Manage Turf
        - generic [ref=e79]:
          - button "Toggle language" [ref=e80] [cursor=pointer]:
            - generic [ref=e81]: العربية
          - generic [ref=e85]:
            - button [ref=e86] [cursor=pointer]
            - generic [ref=e90]: 99+
          - heading "K kalakendra sports and fitness" [level=2] [ref=e91] [cursor=pointer]:
            - generic [ref=e92]:
              - generic [ref=e93]: K
              - generic [ref=e95]: kalakendra sports and fitness
      - generic [ref=e101]:
        - generic [ref=e102]:
          - combobox [ref=e103]:
            - generic [ref=e104]: All Locations
          - combobox [ref=e107]:
            - generic [ref=e108]: All Categories
          - combobox [ref=e111]:
            - generic [ref=e112]: All Status
        - generic [ref=e116]:
          - generic [ref=e117]:
            - textbox "Search..." [ref=e120]
            - button "Add New" [ref=e121] [cursor=pointer]
          - table [ref=e128]:
            - rowgroup [ref=e129]:
              - row [ref=e130]:
                - columnheader "SR NO." [ref=e131]
                - columnheader "Turf Name" [ref=e134] [cursor=pointer]
                - columnheader "Location" [ref=e137] [cursor=pointer]
                - columnheader "Courts" [ref=e140] [cursor=pointer]
                - columnheader "Service Subcategory" [ref=e143] [cursor=pointer]
                - columnheader "Approve Status" [ref=e146] [cursor=pointer]
                - columnheader "Available" [ref=e149]
                - columnheader "Actions" [ref=e152]
            - rowgroup [ref=e155]:
              - row [ref=e156]:
                - cell [ref=e157]:
                  - status "Loading" [ref=e159]:
                    - generic [ref=e164]: Loading data…
          - generic [ref=e165]:
            - generic [ref=e166]:
              - generic [ref=e167]: "Showing page 0 of 0 Results:"
              - combobox [ref=e168] [cursor=pointer]:
                - option "5"
                - option "10" [selected]
                - option "20"
                - option "50"
            - generic [ref=e169]:
              - button [disabled] [ref=e170]
              - generic [ref=e173]: "0"
              - button [disabled] [ref=e174]
  - region "Notifications Alt+T"
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