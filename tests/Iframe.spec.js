import {test} from "@playwright/test"

test('Iframe', async ({page})=>{
    await page.goto('https://demoqa.com/frames')
    const iframeId = page.frameLocator('#frame1')
    const iframeHeading = await iframeId.locator('#sampleHeading').textContent()
    console.log(iframeHeading)
})