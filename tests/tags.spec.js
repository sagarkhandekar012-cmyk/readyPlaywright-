import { expect,test } from "@playwright/test";

test('tag', async({page})=>{

    await page.goto('https://superadmin-amoz.betadelivery.com/login', {waitUntil:'domcontentloaded'})
    await page.waitForURL(/.*\/login/, { timeout: 20000 });
await page.locator('.rt-Flex.rt-r-ai-center.rt-r-jc-center.rt-r-w.rt-r-h').toBeVisible();

})

test('tag2', async({page})=>{

    await page.goto('https://superadmin-amoz.betadelivery.com/login', {waitUntil:'domcontentloaded'})

const logo = await page.locator("//img[@alt='AMOZ']")
if (await logo.isVisible())
{
console.log('logo is visible')
}
else{
    console.log('logo is not visible')
}

})