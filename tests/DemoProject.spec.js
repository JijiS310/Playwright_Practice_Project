import {test,expect} from "@playwright/test";
import {customTest} from "../utils/CustomData.js"
import {myTest} from "../utils/CustomFunction.js"
import {customLocators} from  "../utils/CustomTypesTest.js"

test.skip('DemoProject', async ({page}) => {
await page.goto('https://www.saucedemo.com')

const userName = await page.locator('#user-name').fill('standard_user')
const passWord = await page.locator('#password').fill('secret_sauce')
const loginBtn = await page.locator('#login-button').click()
//await page.pause()
//extracting all products list
const allProductsName = page.locator('.inventory_item_name').allTextContents()
console.log(allProductsName)
//count of listed products
const productCount = await page.locator('.inventory_item_name').count()
console.log(productCount)

const myProduct = "Sauce Labs Onesie"
//await page.pause()
for(let i=0; i<productCount; i++){
    //locator chaining
    if(await page.locator('.inventory_item_description').nth(i).locator('.inventory_item_name').textContent() == myProduct)
    {
        const cartButton= page.locator('.inventory_item_description').nth(i).getByRole('button', { name: 'Add to cart' })
        await cartButton.click()
    }
}
const cartLink = page.locator('.shopping_cart_link')
await cartLink.click()
const cartProductName = await page.locator('.inventory_item_name').textContent()
//assertion
await expect(cartProductName).toBe(myProduct)
console.log(cartProductName)

const checkoutButton = page.locator('#checkout')
await checkoutButton.click()

const firstName = page.locator('#first-name')
await firstName.fill('test')

const lastName = page.locator('#last-name')
await lastName.fill('check')

const postalCode = page.locator('#postal-code')
await postalCode.fill('234511')

const continueButton = page.locator('#continue')
await continueButton.click()

const finishButton = page.locator('#finish')
await finishButton.click()

const confirmMsg =  page.locator('.complete-header')
console.log(await confirmMsg.textContent())

await expect(confirmMsg).toContain('Thank you')

})

const users = ["loginData1","loginData2"]

customTest.skip('SampleCustomTest', async ({page,loginData1}) => {
    
    await page.goto('https://www.saucedemo.com')

    const userName = await page.locator('#user-name').fill(loginData1.username)
    const passWord = await page.locator('#password').fill(loginData1.password)
    const loginBtn = await page.locator('#login-button').click()
    
})

myTest.skip('SampleCustom', async ({page,userDetail}) => {
 for(const user of userDetail){
    await page.goto('https://www.saucedemo.com')

    const userName = await page.locator('#user-name').fill(user.username)
    const passWord = await page.locator('#password').fill(user.password)
    const loginBtn = await page.locator('#login-button').click()
 }
})

customLocators('LocatorCustom',async ({page,loginFunction})=> {
    await loginFunction('standard_user','secret_sauce')

    
})

