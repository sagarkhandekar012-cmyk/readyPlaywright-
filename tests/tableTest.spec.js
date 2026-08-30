const {test, expect} = require('@playwright/test');

test('table', async({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/")


    const table = await page.locator("#productTable");

    const caolums = await table.locator("thead tr th")
    console.log('Number of columns: ' + await caolums.count());
    expect(await caolums.count()).toBe(4);

    const rows = await table.locator('tbody tr');
    console.log('Number of rows: ' + await rows.count());
    expect(await rows.count()).toBe(5);

    /*
    const matchingRow = await rows.filter({
    has: page.locator("td"),
    hasText: "	Wireless Earbuds"
    })
    await matchingRow.locator("input[type='checkbox']").check();
*/

//select product by calling function muliple times
  /*  await selectproduct(rows, page, "Smartphone");
    await selectproduct(rows, page, "Smartwatch");
    await selectproduct(rows, page, "Tablet");
*/
/*  
for (let i = 0; i < await rows.count(); i++)
     {
        const row = await rows.nth(i);
        const tds = await row.locator("td");
        
        for (let j = 0; j < await tds.count()-1; j++) 
        {
            
            console.log(await tds.nth(j).textContent());
    

        }
     }
*/
//read all the data from the table 
const pages = await page.locator("#pagination li a");

for (let p = 0; p < await pages.count(); p++)
     {
        if(p>0)
        {
            await pages.nth(p).click();
        }
      for (let i = 0; i < await rows.count(); i++)
     {
        const row = await rows.nth(i);
        const tds = await row.locator("td");
        
        for (let j = 0; j < await tds.count()-1; j++) 
        {
            
            console.log(await tds.nth(j).textContent());
    

        }
     }  
     }


await page.waitForTimeout(5000);
});

async function selectproduct(row, page, name) 
{
    const matchingRow = await row.filter({
        has: page.locator("td"),
        hasText: name
    })
    await matchingRow.locator("input[type='checkbox']").check();
}