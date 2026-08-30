const {test, expect} = require('@playwright/test');

test('handle i Frame', async ({page}) =>{

    await page.goto("https://ui.vision/demo/webtest/frames/")

    const frame3 =await page.frame({url: "https://ui.vision/demo/webtest/frames/frame_3"})
    //frame3.locator("//input[@name='mytext3']").fill('Hello brother');

    const chaildFrame = frame3.childFrames();
    await chaildFrame[0].locator("//*[@id='i6']/div[3]/div").check();

    await page.waitForTimeout(5000);

});