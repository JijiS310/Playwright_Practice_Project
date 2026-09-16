import test from "@playwright/test";
//test1
test('demo test',async ({browser})=>{   //for each test we need 'test' function, parameter =(test title, body)
    const context = await browser.newContext()   //Fixture function {browser} ,'browser.newContext'
    const page = await context.newPage()    //await is needed for waiting or holding it for some time.await works along with async (added before arrow function) so add it as well
    await page.goto("https://www.amazon.in/")
})  

//test2
test('demo test2',async ({page})=>{   //test.only gets prioritized and only that test will run. test.skip ==> skips that particular test
    await page.goto("https://www.google.com/")
    //await page.pause()
})

//test.skip ==> to skip running that test
//test.only ==> for running only that test