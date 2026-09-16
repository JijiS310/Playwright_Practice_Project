import test, { expect } from "@playwright/test";

test('windowPopup', async ({page})=>{
    await page.goto('https://selenium.qabible.in/index.php')

    await page.locator('#others').click()
    //const source = await page.getByText('Draggable n°4', { exact: true })
    //all sources
    //drag and drop method - await source.dragto(destination)
    //await source.dragTo(destin)
    const allSource = await page.locator('#todrag span[draggable="true"]')
    const destin = await page.locator('#mydropzone')
    
    const count = await allSource.count() 
    console.log(count)

    for(let i=0;i<count;i++){
        await allSource.first().dragTo(destin)
        await page.waitForTimeout(3000)
    }

})