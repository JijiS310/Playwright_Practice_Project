/*10/08/2028
css locators
<tagname attribute = "attribute value"  ===> <input type = "text" */
import test, { expect } from "@playwright/test";

test('locator',async ({page})=>{
    await page.goto('https://selenium.qabible.in/form-submit.php')
    //id
    const firstName_Locator = await page.locator('#validationCustom01')  // locating elemeng with id = #
    await firstName_Locator.fill('Jiji')
    //await page.pause()     //page gets paused

    //class
    const lastName_Locator = await page.locator('.form-control').nth(1)  //class = .classname (.nth(1) == multiple class(strict mode violation) with same name thus pointing the correct index)
    await lastName_Locator.fill('Sasidharan')

    //attribute = attributename using placeholder
    const userName =  await page.locator('input[placeholder="Username"]') //('tagname[attributename ="attributename"]')
    await userName.fill('jps')

    //xpath using id
    const city = await page.locator('//input[@id="validationCustom03"]') //('//tagname[@attributename = "attribute value"]')
    await city.fill('Thrissur')

    //special locators = getByAttributeNAme
    const state = await page.getByPlaceholder('State')
    await state.fill('Kerala')

    //getByLabel
    const checkbox = await page.getByLabel('Agree to terms and conditions')
    await checkbox.check()  //checkbox.click or checkbox.check

    //task for 10/08/26 button and zip
    //zip
    //const zip = await page.locator('.form-control').nth(5)
    const zip = await page.getByPlaceholder('Zip')
    await zip.fill('680519')
    
    //button
    /*const submit_button = await page.locator('//button[@class ="btn btn-primary"]')
    await submit_button.click()
    await page.pause()*/

    //getByRole
    const submit_button = await page.getByRole('button',{name:"Submit form"})  //getByRole for button, link, agree conditions etc
    await submit_button.click()

    //successmsg
    const successMsg = await page.locator('#message-one')
    //assertion for locator visibility
    await expect(successMsg) .toBeVisible()    //toBeVisible to check if the locator is visible.for not visible ==> not.toBeVisible
    //await expect(successMsg) .not.toBeVisible() 
    
    const visibilityBoolean = await successMsg.isVisible()  //not an assertion rather visible or not true or false check
    console.log(visibilityBoolean)
    await expect(visibilityBoolean).toBeTruthy()  

    const msgText = await successMsg.textContent()   //textcontent fetches the data from single locator and alltextcontent fetchs data from multiple locators
    console.log(msgText)

    //Assertions
    await expect(msgText) .toContain('successfully') //toContain check if one substring is there within the text
    


})

