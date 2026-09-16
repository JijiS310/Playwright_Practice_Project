import test, { expect } from "@playwright/test";

test('windowPopup', async ({page})=>{
    await page.goto('https://selenium.qabible.in/index.php')

    const alertModalPage = await page.locator('#alert-modal')
    await alertModalPage.click()

    const popupLink = await page.getByRole('link',{name:'Window Popup'}).click()

    const facebookButton = await page.locator('.btn.btn-primary.windowSingle')
    console.log(await page.title())     //extracts title of the page

    //new window
    const [newPage] = await Promise.all([   //promise.all takes multiple tasks thus accepts in as an array
        page.waitForEvent('popup'),        //waiting for new page
        facebookButton.click()
    ]) 
    await page.waitForLoadState()       //while moving from one page to new page waiting to load the new page
    console.log(await newPage.title())  //title of new page we need to mention that page name.title()

    await newPage.getByLabel('Email address or phone number').fill('abcd@gmail.com')
    await newPage.getByText('Password', { exact: true }).fill('1234ths')
    
    await newPage.close() //closing the newPage or popup


})