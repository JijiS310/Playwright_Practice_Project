import test from "@playwright/test";

test('AlertModals', async ({page})=>{
    await page.goto('https://selenium.qabible.in/index.php')
    

    const alertModalPage = await page.locator('#alert-modal')
    await alertModalPage.click()

    const bootStrapModal = await page.getByRole('link',{name:"Bootstrap Modal"})
    await bootStrapModal.click()

    const singleLaunchModal = await page.getByRole('button',{name:"Launch modal"}).nth(0)
    await singleLaunchModal.click()
    
    const modalWindow = await page.getByRole('document')
   
    const saveChanges = modalWindow.getByRole('button',{name:"Save changes"}) //child window button so not using page rather child window
    await saveChanges.click()

   
    const close = modalWindow.locator("//button[@class = 'btn btn-secondary']").nth(0)
    await close.click()

    //task for 13/08/2026 - multiple launch modal

    const multiLaunchModal = await page.getByRole('button',{ name:"Launch modal"}).nth(1)
    await multiLaunchModal.click()

   // const modalWindow1 = await page.getByRole('document')
   
    const launchAnotherModal = modalWindow.locator('[data-target="#exampleModalCenter2"]')
    await launchAnotherModal.click()

    //const modalWindow2 = await page.getByRole('document')
    
    const anotherSaveChanges = modalWindow.getByRole('button',{name:"Save changes"}).nth(1)
    await anotherSaveChanges.click()

    const anotherClose = modalWindow.locator("//button[@class = 'btn btn-secondary']").nth(2)
    await anotherClose.click()
    
    const multiSaveChanges = modalWindow.getByRole('button',{name:"Save changes"}).nth(0)
    await multiSaveChanges.click()
    
    const multiClose = modalWindow.locator("//button[@class = 'btn btn-secondary']").nth(1)
    await multiClose.click() 
    
} )

/*const modalWindow = await page.locator('#exampleModalCenter').nth(0)
const singleLaunchModal = await page.locator('[data-target="#exampleModalCenter"]')
 //const close = modalWindow.locator('.btn.btn-secondary') // when within class we are having 2 class name like btn btn-secondary we represent space with .
const multiLaunchModal =  await page.locator('[data-target="#exampleModalCenter1"]')
const modalWindow1 = await page.locator('#exampleModalCenter').nth(1)
const launchAnotherModal = modalWindow1.getByRole('button',{name:"Launch another modal"})
const modalWindow2 = await page.locator('#exampleModalCenter').nth(2) 
const anotherSaveChanges = modalWindow2.getByRole('button',{name:"Save changes"})
const anotherClose = modalWindow2.locator("//button[@class = 'btn btn-secondary']")
const multiSaveChanges = modalWindow1.getByRole('button',{name:"Save changes"})
const multiClose = modalWindow1.locator("//button[@class = 'btn btn-secondary']")
*/