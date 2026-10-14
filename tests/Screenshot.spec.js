import {test, expect} from '@playwright/test'
test('Screenshot', async ({page}) => {

    await page.goto('https://selenium.qabible.in/index.php')
    //page level screenshot
    await page.screenshot({path: 'screenshot/Homepage.png',fullPage:true}) //screenshot folder creates and image of
    const alertButton = page.locator('#alert-modal')
    await alertButton.screenshot({path: 'screenshot/AlertButton.png'})

})

test.only('VisualTesting',async({page}) =>{
    await page.goto('https://selenium.qabible.in/index.php')
    await expect(page).toHaveScreenshot('HomeImage.png')
    const alertButton = page.locator('#alert-modal')
    await expect(alertButton).toHaveScreenshot('AlertImage.png')
})