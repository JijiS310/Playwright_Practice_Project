import test from "@playwright/test";

test('KeyboardActions', async ({page}) => {
    await page.goto("https://selenium.qabible.in/simple-form-demo.php")
    const inputbox1 = page.locator('#single-input-field')
    await inputbox1.focus()  // cursor gets focused here
    await page.keyboard.type('testing')
    await page.keyboard.press('Control+A')
    await page.keyboard.press('Control+C')
    const inputbox2 = page.locator('#value-a')
    await inputbox2.focus()
    await page.keyboard.press('Control+V')

    //MouseActions
    const showMsgButton = page.locator('#button-one')
    await showMsgButton.hover()

    await showMsgButton.click({button:'right'})
    await page.waitForTimeout(3000)

    await showMsgButton.dblclick() 
    await showMsgButton.click({clickCount:3})
    

})