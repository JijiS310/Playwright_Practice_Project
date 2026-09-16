import {test,expect} from "@playwright/test";

test('selectInput', async({page})=>{
    await page.goto('https://selenium.qabible.in/index.php')

    const inputForm = await page.getByRole('link',{name:"Input Form"})
    await inputForm.click()
    const selecIn = await page.getByRole('link',{name:'Select Input'})
    await selecIn.click()
    const selecClr = await page.locator('#single-input-field')
    await selecClr.selectOption('Yellow')

    const selecClrMsg = await page.locator('//div[@id="message-one"]')
    const msgText = await selecClrMsg.textContent()   //textcontent fetches the data from single locator and alltextcontent fetchs data from multiple locators
    console.log(msgText)
    
    //assertions
    await expect(msgText).toContain('Yellow')
    await expect(selecClrMsg).toHaveText(msgText)   //will check if text is there inside loctor

})
