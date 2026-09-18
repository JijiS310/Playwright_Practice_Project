import test from "@playwright/test";

test ('UploadFile', async ({page})=>{
    await page.goto("https://demo.automationtesting.in/FileUpload.html")
    const browseButton = page.locator('#input-4') //here within inspector ==> type="file" thus setInputFile method can be used
    await browseButton.setInputFiles("D://Jiji//Automation//Playwright//utils//Fruits.xlsx")

})

test('DownloadFile', async ({page})=> {
    await page.goto("https://demoqa.com/upload-download")
    //before download we need to add below promise
    const downloadPromise = page.waitForEvent('download')
    const downloadButton = page.locator('#downloadButton')
    await downloadButton.click()
    const download = await downloadPromise //wait for downloadPromise to complete and then we need to save
    await download.saveAs('D://Jiji//Automation//Playwright//utils//downloadFile.png')

})



