/*import { expect,test } from "@playwright/test";

test('tag@sanity', async({page})=>{

    await page.goto('https://superadmin-amoz.betadelivery.com/login', {waitUntil:'domcontentloaded'})
    await page.waitForURL(/.*\/login/, { timeout: 20000 });
const element = await page.locator('.rt-Flex.rt-r-ai-center.rt-r-jc-center.rt-r-w.rt-r-h');
    await expect(element).toBeVisible();
})

test('tag2@sanity', async({page})=>{

    await page.goto('https://superadmin-amoz.betadelivery.com/login', {waitUntil:'domcontentloaded'})
    await page.waitForURL(/.*\/login/, { timeout: 20000 });

const logo = await page.locator("//img[@alt='AMOZ']")
if (await logo.isVisible())
{
console.log('logo is visible')
}
else{
    console.log('logo is not visible')
}

})

test('tag3@reg', async({page})=>{

    await page.goto('https://superadmin-amoz.betadelivery.com/login', {waitUntil:'domcontentloaded'})
  await page.locator("//input[@placeholder='Enter your email']").isEnabled();
})


test('tag4@sanity@reg', async ({ page }) => {
    await page.goto('https://superadmin-amoz.betadelivery.com/login', { 
        waitUntil: 'domcontentloaded',
        timeout: 15000 
    });

    const signInButton = page.getByRole('button', { name: 'Sign In' });
    await expect(signInButton).toBeVisible();
});
*/


import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
    await page.goto('https://superadmin-amoz.betadelivery.com/login', { 
        waitUntil: 'domcontentloaded', // Fix: wait for DOM/accessibility tree readiness
        timeout: 30000 
    });
});

test('tag@sanity', async ({ page }) => {
    const element = page.locator('.rt-Flex.rt-r-ai-center.rt-r-jc-center.rt-r-w.rt-r-h');
    await expect(element).toBeVisible();
});

test('tag2@sanity', async ({ page }) => {
    const logo = page.locator("//img[@alt='AMOZ']");
    if (await logo.isVisible()) {
        console.log('logo is visible');
    } else {
        console.log('logo is not visible');
    }
});

test('tag3@reg', async ({ page }) => {
    await expect(page.locator("//input[@placeholder='Enter your email']")).toBeEnabled();
});

test('tag4@sanity@reg', async ({ page }) => {
    const signInButton = page.locator('button[type="submit"]');
    await expect(signInButton).toBeVisible();
});