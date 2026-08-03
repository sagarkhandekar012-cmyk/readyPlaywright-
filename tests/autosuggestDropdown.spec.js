const {test , expect} = require('@playwright/test');

test.use({ 
    channel: 'chrome', 
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
    extraHTTPHeaders: {
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9'
    }
});
test('autosuggestDropdown', async ({page}) => {

    await page.goto('https://www.redbus.in/', { waitUntil: 'domcontentloaded' });

    await page.locator("//label[normalize-space()='From']").fill('Mumbai'); /* there we have fill on the data in to the dropdown by using locator */
    
await page.waitForSelector("div[id^='suggestion-']");/*here we are waiting for the suggestion to appear*/
    
const fromCityOptions = await page.$$("div[id^='suggestion-']");/* there is we are taking the all suggestionsin to the verable  */ 
    
    for(let option of fromCityOptions)/* there is we are reading the text of each suggestion */
{
    const optionText = await option.textContent(); /*there we are capturing the text of each suggestion */
   // console.log(optionText);/*there is we are printing the text of each suggestion *//*also when you print the value and after select any result and select that  */
if(optionText.includes('Andheri EastMumbaiBoard at'))
 {
    await option.click();/*there is we are clicking on the suggestion which we want to select */
}
}

await page.waitForTimeout(5000);

})