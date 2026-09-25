import { expect,test } from "@playwright/test";

test('auto suggestion location in amoz', async({page})=>{

await page.goto("https://companyadmin-amoz.betadelivery.com/" , { waitUntil: 'domcontentloaded' })

await page.locator("//input[@placeholder='Enter Email Id']").fill("kalakendra@yopmail.com")
const passwordInput = page.getByRole('textbox', { name: 'Password' });
    await passwordInput.fill('Test@123');
await page.locator("//button[normalize-space()='Login']").click();

await page.locator("//span[normalize-space()='Turf Management']").click();
await page.locator(" //span[normalize-space()='Manage Turfs']").click();
await page.locator("//button[normalize-space()='Add New']").click();

await page.locator("//input[@placeholder='Enter turf name']").fill("sachin turf")



await page.locator("//span[contains(text(),'Select Turf Type')]").click();
await page.locator("//div[normalize-space()='Football']").click();

// 1. Arm the listener FIRST (without awaiting it yet)
const fileChooserPromise = page.waitForEvent('filechooser');

// 2. Click the element to trigger the file dialog
const fill = page.locator("(//span[normalize-space()='Add images'])[1]");
await fill.click();

// 3. Now await the promise to catch the file chooser event
const fileChooser = await fileChooserPromise;
await fileChooser.setFiles(["C:\\Users\\wdila\\Pictures\\images (3).jpg",
                "C:\\Users\\wdila\\Pictures\\images (2).jpg",
                "C:\\Users\\wdila\\Pictures\\images (1).jpg",
                "C:\\Users\\wdila\\Pictures\\images (4).jpg"
]);

/*
const fileChooserPromise = page.waitForEvent('filechooser');
//await page.locator(':text-is("Click to upload (PNG, JPG, PDF)")')
const docLink = page.locator('"Click to upload (PNG, JPG, PDF)"');
await docLink.isEnabled();
await docLink.isVisible();
await docLink.click();
const fileChooser = await fileChooserPromise;
await fileChooser.setFiles('C:\\Users\\wdila\\Downloads\\2mb.pdf');
*/




/*await page.locator()
await page.locator()
await page.locator()
await page.locator()
await page.locator()
await page.locator()

*/
await page.waitForTimeout(5000)
})