# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: amoz.spec.js >> newFrame
- Location: tests\amoz.spec.js:3:1

# Error details

```
Error: expect(locator).toHaveValue(expected) failed

Locator:  locator('//input[@name=\'price\']')
Expected: "60.00"
Received: "60.000"
Timeout:  5000ms

Call log:
  - Expect "toHaveValue" locator('//input[@name=\'price\']') with timeout 5000ms
  - waiting for locator('//input[@name=\'price\']')
    14 × locator resolved to <input readonly name="price" type="number" placeholder="" spellcheck="false" class="rt-reset rt-TextFieldInput"/>
       - unexpected value "60.000"

```

```yaml
- spinbutton: "60.000"
```

# Test source

```ts
  68  | if (await textVerify2.textContent() === "Total Number Of Booked Orders") {
  69  |     console.log('there is Total Number Of Booked Orders text is correct');
  70  | } else
  71  |     {
  72  |         console.log('Text is incorrect');
  73  |     }
  74  | 
  75  |     await page.locator("(//button[normalize-space()='Weekly'])[1]").click();
  76  |     const txtWeek = page.locator("(//span[normalize-space()='This Week'])[1]");
  77  |     await expect(txtWeek).toBeVisible();
  78  |     await expect(txtWeek).toHaveText("This Week");
  79  |     if (await txtWeek.textContent() === "This Week") {
  80  |         console.log('there is This Week text is correct');
  81  |     }   else {
  82  |         console.log('There is This Week text is incorrect');
  83  |     }
  84  | 
  85  |     await page.locator("(//button[normalize-space()='Monthly'])[1]").click();
  86  |     const txtMonth = page.locator("(//span[normalize-space()='This Month'])[1]")
  87  |     await expect(txtMonth).toBeVisible();
  88  |     await expect(txtMonth).toHaveText("This Month");
  89  |     if (await txtMonth.textContent() === "This Month") {
  90  |         console.log('there is This Month text is correct');
  91  |     } else {
  92  |         console.log('There is This Month text is incorrect');
  93  |     }
  94  | 
  95  | await page.locator(".lucide.lucide-chevron-down").first().click(); 
  96  | await page.locator("(//span[normalize-space()='Brand Profiles'])[1]").click();
  97  | const theBrand = page.locator("(//span[@class='rt-Text rt-r-size-2 rt-r-weight-medium'][normalize-space()='Brand Profiles'])[1]"); 
  98  | await expect(theBrand).toHaveText("Brand Profiles");
  99  | 
  100 | const buttonVisible = page.locator(".lucide.lucide-plus");
  101 | await expect(buttonVisible).toBeEnabled();
  102 | await expect(buttonVisible).toBeVisible();
  103 | const buttonAttribute = page.locator("(//button[normalize-space()='Add Brand Profile'])[1]");
  104 | await expect(buttonAttribute).toHaveAttribute('style','cursor: pointer;');
  105 | await buttonAttribute.click();
  106 | 
  107 | 
  108 | 
  109 | 
  110 | 
  111 | //await page.locator("//span[contains(text(),'Select Brand Name')]").click();
  112 | //await page.locator("//div[@class='rt-Flex rt-r-fd-column rt-r-gap-1']//div//div//div//input[@placeholder='Search...']").fill('Adi');
  113 | 
  114 | // this is for the select option from the dropdown using the value and then check the selected option is selected or not
  115 | const selectBrand = page.locator("//span[contains(text(),'Select Brand Name')]");
  116 | await selectBrand.isEnabled();
  117 | await selectBrand.isVisible();
  118 | await selectBrand.click();
  119 | const brandSearchInput = page.locator("//div[@class='rt-Flex rt-r-fd-column rt-r-gap-1']//div//div//div//input[@placeholder='Search...']");
  120 | await brandSearchInput.isEnabled();
  121 | await brandSearchInput.isVisible();
  122 | //await brandSearchInput.fill('Addidas');
  123 | const addidasOption = page.locator("//div[contains(text(),'Addidas')]");
  124 | await addidasOption.isEnabled();
  125 | await addidasOption.isVisible();
  126 | await addidasOption.first().click();
  127 | 
  128 | //category selection
  129 | const categoryButton = page.locator("//div[@class='rt-Flex rt-r-gap-3']//div[1]//div[1]//button[1]");
  130 | await categoryButton.isEnabled();
  131 | await categoryButton.isVisible();
  132 | await categoryButton.click();
  133 | const categorySearchInput = page.locator("(//input[@placeholder='Search...'])[2]");
  134 | await categorySearchInput.isEnabled();
  135 | await categorySearchInput.isVisible();
  136 | //await categorySearchInput.fill('Fashi');
  137 | const fashionMenOption = page.locator("//div[contains(text(),'Fashion - Men')]");
  138 | await fashionMenOption.isEnabled();
  139 | await fashionMenOption.isVisible();
  140 | await fashionMenOption.first().click();
  141 | 
  142 | //subcategory selection
  143 | const subcategoryButton = page.locator("//div[@class='rt-Flex rt-r-gap-3']//div[2]//div[1]//button[1]");
  144 | await subcategoryButton.isEnabled();
  145 | await subcategoryButton.isVisible();
  146 | await subcategoryButton.click();
  147 | const subcategorySearchInput = page.locator("//div[@class='rt-Flex rt-r-fd-column rt-r-gap-1']//div//div//div//input[@placeholder='Search...']");
  148 | await subcategorySearchInput.isEnabled();
  149 | await subcategorySearchInput.isVisible();
  150 | //await subcategorySearchInput.fill('Foot');
  151 | const footwearOption = page.locator("//div[contains(text(),'Footwear')]");
  152 | await footwearOption.isEnabled();
  153 | await footwearOption.isVisible();
  154 | await footwearOption.click();
  155 | 
  156 | 
  157 | //subscription selection
  158 | await page.locator("//div[4]//div[1]//button[1]").click();
  159 | const subscription = page.locator("//div[normalize-space()='Gold Brand Spotlight']");
  160 | const subscriptionPrice = page.locator("//input[@name='price']");
  161 | const durationTime = page.locator("//input[@name='duration']");
  162 | if (await subscription.isVisible()) {
  163 |     console.log("there is Subscription");
  164 |     await subscription.click();
  165 |     
  166 |     // MOVE THIS INSIDE THE IF STATEMENT
  167 |     // Only check the price if we actually clicked the subscription!
> 168 |     await expect(subscriptionPrice).toHaveValue("60.00");
      |                                     ^ Error: expect(locator).toHaveValue(expected) failed
  169 |     if (await subscriptionPrice.inputValue() === "60.00")
  170 |          {
  171 |         console.log('Subscription Price is correct');
  172 |     } else {
  173 |         console.log('Subscription Price is incorrect');
  174 |     }
  175 |     
  176 | } else {
  177 |     console.log("there is no Subscription");
  178 |     // The test will safely skip the price check if it doesn't find the subscription.
  179 | }
  180 | 
  181 | if (await durationTime.isVisible()) {
  182 |     console.log("there is Duration Time");
  183 | }
  184 |     await expect(durationTime).toHaveValue("2 weekly");
  185 |     if (await durationTime.inputValue() === "2 weekly") 
  186 |         {
  187 |         console.log('Duration Time is correct');
  188 |     } else {
  189 |         console.log('Duration Time is incorrect');
  190 |     }
  191 | 
  192 | const descriptionInput = page.locator("//div[@class='ql-editor ql-blank']//p");
  193 | await descriptionInput.isEnabled();
  194 | await descriptionInput.isVisible();
  195 | await descriptionInput.fill('This is a test description for the brand profile.');
  196 | 
  197 | const docName = page.locator("//input[@placeholder='e.g. Brand Profile Name']");
  198 | await docName.isEnabled();
  199 | await docName.isVisible();
  200 | await docName.fill('Test Brand Profile Name');  
  201 | 
  202 | const fileChooserPromise = page.waitForEvent('filechooser');
  203 | //await page.locator(':text-is("Click to upload (PNG, JPG, PDF)")')
  204 | const docLink = page.locator('"Click to upload (PNG, JPG, PDF)"');
  205 | await docLink.isEnabled();
  206 | await docLink.isVisible();
  207 | await docLink.click();
  208 | const fileChooser = await fileChooserPromise;
  209 | await fileChooser.setFiles('C:\\Users\\wdila\\Downloads\\2mb.pdf');
  210 | 
  211 | //const submitButton = page.locator("button[type='submit'] font[dir='auto'] font[dir='auto']");
  212 | const submitButton =page.locator("button[type='submit']" );
  213 | await expect(submitButton).toBeEnabled();
  214 | await expect(submitButton).toBeVisible();
  215 | if (await submitButton.isEnabled()) {
  216 |     console.log('Submit button is enabled');
  217 |     //await submitButton.click();
  218 | }
  219 | const cancelButton = page.locator(".rt-reset.rt-BaseButton.rt-r-size-2.rt-variant-soft.rt-Button")
  220 | await cancelButton.isEnabled();
  221 | await cancelButton.isVisible();
  222 | if (await cancelButton.isEnabled())
  223 |      {
  224 |     console.log('Cancel button is enabled');
  225 |     await cancelButton.click();
  226 | }
  227 | 
  228 | await page.locator("img[alt='A house in a forest']").isVisible();
  229 | await page.waitForTimeout(5000);
  230 | 
  231 | });
```