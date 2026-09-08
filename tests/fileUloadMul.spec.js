const {test, expect} = require('@playwright/test');

test('multiple upload a file', async ({ page }) => {

    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');


    page.locator("#filesToUpload")
.setInputFiles(["C:\\Users\\wdila\\Downloads\\2mb.pdf",
                "C:\\Users\\wdila\\Downloads\\3-mb-sample-pdf-file.pdf"
]);

expect(await page.locator("#fileList li:nth-child(1) ")).toHaveText("2mb.pdf");
expect(await page.locator("#fileList li:nth-child(2) ")).toHaveText("3-mb-sample-pdf-file.pdf");

    await page.waitForTimeout(5000);
//remove file from the list

 page.locator("#filesToUpload").setInputFiles([])    

expect(await page.locator("#fileList li:nth-child(1) ")).toHaveText("No Files Selected");

    await page.waitForTimeout(5000);

});