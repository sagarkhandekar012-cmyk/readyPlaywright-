import { expect,test } from "@playwright/test";
import { loginpage } from "./pages/login";
import { homePage } from "./pages/home";

test('pom' ,async({page})=> {

    //login
    const login = new loginpage(page);
    await login.gotoLoginPage();
    await login.login('kalakendra@yopmail.com','Test@123');
    await page.waitForTimeout(5000);
    
    //home
    const turrfs = new homePage(page);
    
    await turrfs.turfs('Rk turf');
await page.waitForTimeout(5000);
})

















/*
test('auto suggestion location in amoz', async({page})=>{

await page.goto("https://companyadmin-amoz.betadelivery.com/" , { waitUntil: 'domcontentloaded' })

await page.locator("//input[@placeholder='Enter Email Id']").fill("kalakendra@yopmail.com")
const passwordInput = page.getByRole('textbox', { name: 'Password' });
    await passwordInput.fill('Test@123');
await page.locator("//button[normalize-space()='Login']").click();



});

*/