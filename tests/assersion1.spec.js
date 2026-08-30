
const { test, expect } = require('@playwright/test')  //this is very important filed to any playwright code

test('AssersionTest', async ({ page }) => { // in to under this line we will be write all code

    // 1. Log in to the application first
    await page.goto('https://testautomationpractice.blogspot.com/')


    // 5. expect (locator).toBeChecked()
    // Use the actual radio input element selector to ensure .toBeChecked() works
    const maleRadioButton = page.locator('#male')
    await maleRadioButton.click()
    await expect(maleRadioButton).toBeChecked()

    // this also for the checkbox button toBeChecked or not
    const selectSundayButton = page.locator('#sunday')
    await selectSundayButton.click()
    await expect(selectSundayButton).toBeChecked()

    // 6. expect (locator).toHaveAttribute()
    const subButton = page.locator('#btn3')
    await expect(subButton).toHaveAttribute('id', 'btn3')

    // 7. expect (locator).toHaveText()
    const headerText = page.locator('h2:has-text("Tabs")')
    await expect(headerText).toHaveText('Tabs')

    // 8. expect (locator).toContainText()
    await expect(await page.locator('h2:has-text("Tabs")')).toContainText('Tab')  //  like this also we can wright 

    // 9. expect (locator).toHaveValue()
    const emailInput = await page.locator("#email")
    await emailInput.fill('test@yopmail.com')
    await expect(emailInput).toHaveValue('test@yopmail.com')

    // 10. expect (locator).toHaveCount()
    const animalOptions = await page.locator("#animals option")
    await expect(animalOptions).toHaveCount(10)  // this is for the select box count

})
