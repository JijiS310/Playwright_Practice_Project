import test, { expect } from "@playwright/test"
//Navigates to homepage
test ('Checkbox',async({page})=>{
    await page.goto('https://selenium.qabible.in/index.php')
//clicks on inputform page
const inputForm = await page.getByRole('link',{name:"Input Form"})
await inputForm.click()

const checkboxDemo = await page.getByRole('link',{name:"Checkbox Demo"})
await checkboxDemo.click()

const checkclick = await page.getByLabel('Click on this check box')
await checkclick.check()
console.log(checkclick)

const visibilityBoolean = await checkclick.isVisible()
console.log(visibilityBoolean)

//await checkclick.uncheck()
const checktestBool = await checkclick.isChecked()
console.log(checktestBool)

await expect(checkclick).toBeChecked()

/*radio button as task for 12/08/2026*/

//Click on radio button
const radioButtonlink = await page.getByRole('link',{name:'Radio Buttons Demo'})
await radioButtonlink.click()

//Select gender
const selectGender = await page.locator('#inlineRadio2')
await selectGender.check()

//Assertion for gender select check
await expect(selectGender).toBeChecked()

//Click on Show Selected Value
const showSelectedValue = await page.getByRole('button',{name:'Show Selected Value'})
await showSelectedValue.click()

//Check the message after click to be visible - assertion
const selectedValueMsg = await page.locator('//div[@id = "message-one"]')
await expect(selectedValueMsg).toBeVisible()

//check selected value msg is visible - method
const ShowMsgBoolean = await selectedValueMsg.isVisible()
console.log(ShowMsgBoolean)

//extract the contents from show selected value
const selectedValueContent = await selectedValueMsg.textContent() 
console.log(selectedValueContent)

//assertion to check if the contents include 'Female'
await expect(selectedValueContent).toContain('Female')

//assertion to check if the selected value message is same as extracted content
await expect(selectedValueMsg).toHaveText(selectedValueContent)

})