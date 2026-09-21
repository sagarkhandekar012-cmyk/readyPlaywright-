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