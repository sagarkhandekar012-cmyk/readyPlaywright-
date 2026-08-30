const {test ,expect} = require('@playwright/test');

test('handleFrames', async ({page}) => { 

    await page.goto("https://ui.vision/demo/webtest/frames/")

    //total frames
    const alloverFrames = page.frames();
    console.log('all over Frames Number',alloverFrames.length);

    await page.waitForTimeout(5000);

    // aproch 1: using name or url
   const frame = page.frame({ url: "https://ui.vision/demo/webtest/frames/frame_1" }); 
   await frame.fill('//input[@name="mytext1"]', 'John');

   // aproch 2: using frame locator
   const inputBox =await page.frameLocator("frame[src='frame_2.html']").locator("input[name='mytext2']");
   await inputBox.fill('Raghu Bhai');

    await page.waitForTimeout(5000);

})