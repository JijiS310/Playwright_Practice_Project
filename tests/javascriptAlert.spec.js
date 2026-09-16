import test, { expect } from "@playwright/test";

test('javascriptAlert',async ({page})=>{
    await page.goto('https://selenium.qabible.in/index.php')
    
    const alertModalPage = await page.locator('#alert-modal')
    await alertModalPage.click()

    const jsAlert = await page.getByRole('link',{name:'Javascript Alert'})
    await jsAlert.click()

    const click2 = await page.locator('//button[@class="btn btn-warning"]')
     //javascript dialog box handling
    page.on('dialog', async(dialog) =>{
        //await page.waitForTimeout(5000)
   //   await dialog.accept()    //by default clicks 'ok'
        await dialog.dismiss()   //for cancelation
    })
    await click2.click()

    const confirmText = await page.locator('#confirm-demo')
    const msgText = await confirmText.textContent()  
    console.log(msgText)
    await expect(msgText) .toContain('Cancel') 

})

    test('promptCheck',async ({page})=>{
    await page.goto('https://selenium.qabible.in/index.php')
    
    const alertModalPage = await page.locator('#alert-modal')
    await alertModalPage.click()

    const jsAlert = await page.getByRole('link',{name:'Javascript Alert'})
    await jsAlert.click()

    const clickPrompt = await page.locator('.btn.btn-danger')
    page.on('dialog', async(dialog) =>{
        await page.waitForTimeout(5000)
        console.log(dialog.message())
        await dialog.accept('Hello')
    })
    await clickPrompt.click()
    await page.pause()
    //task for 14/08/2026
    const promoptmsg = await page.locator('#prompt-demo')
    const promptmsgtext = await promoptmsg.textContent()
    console.log(promptmsgtext)
    await expect(promptmsgtext) .toContain('Hello')

})