import { test, expect , chromium } from '@playwright/test';

test("Verify the functionality of the Hemdling pages", async () => {
const browser = await chromium.launch();
const context = await browser.newContext();

const page1 = await context.newPage();
const page2 = await context.newPage();

const allPages = context.pages();
console.log("there is numere how many pages have there",allPages.length);

await page1.goto("https://companyadmin-amoz.betadelivery.com/login");
await expect(page1).toHaveTitle("AMOZ | Admin");

await page2.goto("https://superadmin-amoz.betadelivery.com/login");
await expect(page2).toHaveTitle("AMOZ | Admin");

});


test.only("Verify the funct ionality of the Hemdling pages new tab flow", async () => {

const browser = await chromium.launch();
const context = await browser.newContext(); 

const page1 = await context.newPage();

console.log("there is numere how many pages have there",context.pages().length);

await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
await expect(page1).toHaveTitle("OrangeHRM");

const navinPan = context.waitForEvent('page');
await page1.locator("//a[normalize-space()='OrangeHRM, Inc']").click();

const newPage = await navinPan;
await expect(newPage).toHaveTitle("OrangeHRM: All in One HR Software for Businesses | OrangeHRM");


await page1.waitForTimeout(2000);
await newPage.waitForTimeout(2000);

await browser.close();


});
//hemdlingpages.spec.js