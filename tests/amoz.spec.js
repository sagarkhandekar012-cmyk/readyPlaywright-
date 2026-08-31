const {test , expect } = require ('@playwright/test');

test('newFrame', async ({page}) => {

    await page.goto("https://testing.companyadmin-amoz.betadelivery.com/login");

    const totalFrames = page.frames();
    console.log('total frames', totalFrames.length);

    const welcomeText = page.getByText('Welcome to Company Admin')
    await expect(welcomeText).toBeVisible();

    const isVisible = await page.locator("img[alt='Logo']").isVisible();

    if (isVisible) {
        console.log('Logo is visible');
    
    }
    else{
        console.log('Logo is not visible');
    }

    const isEmailInputEnabled = page.locator("//input[@placeholder='Enter Email Id']")
    await expect(isEmailInputEnabled).toBeEnabled();
    await isEmailInputEnabled.fill('shopby@yopmail.com');
    await expect(isEmailInputEnabled).toHaveValue("shopby@yopmail.com");

const continueText  = page.locator("(//span[@class='rt-Text rt-r-size-3 rt-r-weight-regular rt-r-mb-4'])[1]")
await expect(continueText).toHaveText("Please Login to continue ");

await expect(page.locator("//span[@class='rt-Text rt-r-size-2 rt-r-weight-regular rt-r-mt-2']")).toContainText("Don't")

const passwordInput = page.getByRole('textbox', { name: 'Password' });
await passwordInput.fill('Test@123');

const loginButton = page.locator("//button[normalize-space()='Login']");
    await expect(loginButton).toHaveAttribute('type', 'submit');
    await loginButton.click();


const afterLoginFrame =page.frames();
console.log('after login frame', afterLoginFrame.length);

    const textVrify = page.locator("(//span[normalize-space()='Ecommerce'])[1]")
    await expect(textVrify).toBeVisible();
    await expect(textVrify).toHaveText("Ecommerce");

const textVrify1 = page.locator("(//span[@class='rt-Text rt-r-size-2 rt-r-weight-medium'][normalize-space()='Dashboard'])[1]")
await expect(textVrify1).toBeVisible();
await expect(textVrify1).toHaveText("Dashboard");

const filedIsVisible = await page.locator("body div[id='root'] div[class='radix-themes light'] div[class='rt-Flex rt-r-fd-row rt-r-w rt-r-h'] div[class='rt-Flex rt-r-fd-column rt-r-ai-center rt-r-gap-0 rt-r-w rt-r-h'] div[class='rt-Flex rt-r-ai-center rt-r-jc-center rt-r-w rt-r-h rt-r-overflow-auto'] div[class='rt-Flex rt-r-fd-column rt-r-w rt-r-h'] div[class='rt-Flex rt-r-fd-column rt-r-gap-5 rt-r-px-6 rt-r-py-6'] div[class='rt-Flex rt-r-fd-row rt-r-fw-wrap rt-r-gap-5'] div:nth-child(1)").isVisible();

if (filedIsVisible) {
    console.log('Field is visible');
} else {
    console.log('Field is not visible');
}
const valueVerify = page.locator("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > span:nth-child(1)")  
await expect(valueVerify).not.toHaveText("0");
if (await valueVerify.textContent() === "0") {
    console.log('Value is zero');
} else {    
console.log('Value is not zero');
}
const textVerify2 = page.locator("(//span[normalize-space()='Total Number Of Booked Orders'])[1]")
await expect(textVerify2).toContainText("Total Number Of Booked Orders");
if (await textVerify2.textContent() === "Total Number Of Booked Orders") {
    console.log('there is Total Number Of Booked Orders text is correct');
} else
    {
        console.log('Text is incorrect');
    }

    await page.locator("(//button[normalize-space()='Weekly'])[1]").click();
    const txtWeek = page.locator("(//span[normalize-space()='This Week'])[1]")
    await expect(txtWeek).toBeVisible();
    await expect(txtWeek).toHaveText("This Week");
    if (await txtWeek.textContent() === "This Week") {
        console.log('there is This Week text is correct');
    }   else {
        console.log('There is This Week text is incorrect');
    }

    await page.locator("(//button[normalize-space()='Monthly'])[1]").click();
    const txtMonth = page.locator("(//span[normalize-space()='This Month'])[1]")
    await expect(txtMonth).toBeVisible();
    await expect(txtMonth).toHaveText("This Month");
    if (await txtMonth.textContent() === "This Month") {
        console.log('there is This Month text is correct');
    } else {
        console.log('There is This Month text is incorrect');
    }

await page.locator(".lucide.lucide-chevron-down").first().click(); 
await page.locator("(//span[normalize-space()='Brand Profiles'])[1]").click();
const theBrand = page.locator("(//span[@class='rt-Text rt-r-size-2 rt-r-weight-medium'][normalize-space()='Brand Profiles'])[1]"); 
await expect(theBrand).toHaveText("Brand Profiles");

const buttonVisible = page.locator(".lucide.lucide-plus");
await expect(buttonVisible).toBeEnabled();
await expect(buttonVisible).toBeVisible();
const buttonAttribute = page.locator("(//button[normalize-space()='Add Brand Profile'])[1]")
await expect(buttonAttribute).toHaveAttribute('style','cursor: pointer;');
await buttonAttribute.click();





//await page.locator("//span[contains(text(),'Select Brand Name')]").click();
//await page.locator("//div[@class='rt-Flex rt-r-fd-column rt-r-gap-1']//div//div//div//input[@placeholder='Search...']").fill('Adi');

// this is for the select option from the dropdown using the value and then check the selected option is selected or not
const selectBrand = page.locator("//span[contains(text(),'Select Brand Name')]");
await selectBrand.isEnabled();
await selectBrand.isVisible();
await selectBrand.click();
const brandSearchInput = page.locator("//div[@class='rt-Flex rt-r-fd-column rt-r-gap-1']//div//div//div//input[@placeholder='Search...']");
await brandSearchInput.isEnabled();
await brandSearchInput.isVisible();
//await brandSearchInput.fill('Addidas');
const addidasOption = page.locator("//div[contains(text(),'Addidas')]");
await addidasOption.isEnabled();
await addidasOption.isVisible();
await addidasOption.first().click();

//category selection
const categoryButton = page.locator("//div[@class='rt-Flex rt-r-gap-3']//div[1]//div[1]//button[1]");
await categoryButton.isEnabled();
await categoryButton.isVisible();
await categoryButton.click();
const categorySearchInput = page.locator("(//input[@placeholder='Search...'])[2]");
await categorySearchInput.isEnabled();
await categorySearchInput.isVisible();
//await categorySearchInput.fill('Fashi');
const fashionMenOption = page.locator("//div[contains(text(),'Fashion - Men')]");
await fashionMenOption.isEnabled();
await fashionMenOption.isVisible();
await fashionMenOption.first().click();

//subcategory selection
const subcategoryButton = page.locator("//div[@class='rt-Flex rt-r-gap-3']//div[2]//div[1]//button[1]");
await subcategoryButton.isEnabled();
await subcategoryButton.isVisible();
await subcategoryButton.click();
const subcategorySearchInput = page.locator("//div[@class='rt-Flex rt-r-fd-column rt-r-gap-1']//div//div//div//input[@placeholder='Search...']");
await subcategorySearchInput.isEnabled();
await subcategorySearchInput.isVisible();
//await subcategorySearchInput.fill('Foot');
const footwearOption = page.locator("//div[contains(text(),'Footwear')]");
await footwearOption.isEnabled();
await footwearOption.isVisible();
await footwearOption.click();


//subscription selection
await page.locator("//div[4]//div[1]//button[1]").click();
const subscription = page.locator("//div[normalize-space()='Gold Brand Spotlight']");
const subscriptionPrice = page.locator("//input[@name='price']");
const durationTime = page.locator("//input[@name='duration']");
if (await subscription.isVisible()) {
    console.log("there is Subscription");
    await subscription.click();
    
    // MOVE THIS INSIDE THE IF STATEMENT
    // Only check the price if we actually clicked the subscription!
    await expect(subscriptionPrice).toHaveValue("60.00");
    if (await subscriptionPrice.inputValue() === "60.00") {
        console.log('Subscription Price is correct');
    } else {
        console.log('Subscription Price is incorrect');
    }
    
} else {
    console.log("there is no Subscription");
    // The test will safely skip the price check if it doesn't find the subscription.
}

if (await durationTime.isVisible()) {
    console.log("there is Duration Time");
}
    await expect(durationTime).toHaveValue("2 weekly");
    if (await durationTime.inputValue() === "2 weekly") {
        console.log('Duration Time is correct');
    } else {
        console.log('Duration Time is incorrect');
    }

const descriptionInput = page.locator("//div[@class='ql-editor ql-blank']//p");
await descriptionInput.isEnabled();
await descriptionInput.isVisible();
await descriptionInput.fill('This is a test description for the brand profile.');

const docName = page.locator("//input[@placeholder='e.g. Brand Profile Name']");
await docName.isEnabled();
await docName.isVisible();
await docName.fill('Test Brand Profile Name');  

const fileChooserPromise = page.waitForEvent('filechooser');
//await page.locator(':text-is("Click to upload (PNG, JPG, PDF)")')
const docLink = page.locator('"Click to upload (PNG, JPG, PDF)"');
await docLink.isEnabled();
await docLink.isVisible();
await docLink.click();
const fileChooser = await fileChooserPromise;
await fileChooser.setFiles('C:\\Users\\wdila\\Downloads\\2mb.pdf');

//const submitButton = page.locator("button[type='submit'] font[dir='auto'] font[dir='auto']");
const submitButton =page.locator("button[type='submit']" );
await expect(submitButton).toBeEnabled();
await expect(submitButton).toBeVisible();
if (await submitButton.isEnabled()) {
    console.log('Submit button is enabled');
    //await submitButton.click();
}
const cancelButton = page.locator(".rt-reset.rt-BaseButton.rt-r-size-2.rt-variant-soft.rt-Button")
await cancelButton.isEnabled();
await cancelButton.isVisible();
if (await cancelButton.isEnabled()) {
    console.log('Cancel button is enabled');
    await cancelButton.click();
}

await page.locator("img[alt='A house in a forest']").isVisible();
await page.waitForTimeout(5000);

});