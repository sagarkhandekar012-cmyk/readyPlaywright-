import { expect,test } from "@playwright/test";

test.skip('test1', async({page})=>{

    console.log("hello 1")

})


test.skip('test2', async({page})=>{

    console.log("hello 2")
    
})


test('test3', async({page, browserName})=>{
if(browserName==='chromium')
{
    test.skip()
}
    console.log("hello 3")
    
})


test('test4', async({page})=>{
test.fixme()
    console.log("hello 4")
    
})


test('test5', async({page})=>{
test.fail()//this we can use for the negative testing
    console.log("hello 5")
    expect(1).toBe(2);
})

test('test6', async({page, browserName})=>{
    console.log("hello 6")

if(browserName==='firefox'){
test.fail()//this we can use for the negative testing
}
console.log("hello 6")
    
})

test('test7', async({page})=>{
//test.slow(); // using this it will be incriesces the 3x 
test.setTimeout(10000)//using this we set the time for this manualy
    console.log("hello 7")
    await page.goto('https://testing.superadmin-amoz.betadelivery.com/login', { waitUntil: 'domcontentloaded' });

})