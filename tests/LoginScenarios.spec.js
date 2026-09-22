/*task for 20/08/2026
login scenario spec 4 tests
incorrect password and username error visibility check
1)Username and password empty
2)Empty username
3)Empty password
4)Valid username and invalid password 
5)Invalid username and valid password
 */

import {test,expect} from "@playwright/test";
//1)Empty Username and Password
test('@Login EmptyUserPass', async ({page}) => {
    await page.goto('https://www.saucedemo.com')
    const userName = await page.locator('#user-name').fill('')
    const passWord = await page.locator('#password').fill('')
    const loginBtn = await page.locator('#login-button').click()
    const loginError =await page.locator('[data-test="error"]')
    await expect(loginError).toBeVisible()
    const loginErrorMsg = await loginError.textContent()
    console.log(`Error message is '${loginErrorMsg }'`)
    await expect(loginError).toContainText('Username is required')
})

//2)Empty Username
test('EmptyUsername', async ({page}) => {
    await page.goto('https://www.saucedemo.com')
    const userName = await page.locator('#user-name').fill('')
    const passWord = await page.locator('#password').fill('secret_sauce')
    const loginBtn = await page.locator('#login-button').click()
    const loginError =await page.locator('[data-test="error"]')
    await expect(loginError).toBeVisible()
    const loginErrorMsg = await loginError.textContent()
    console.log(`Error message is '${loginErrorMsg }'`)
    await expect(loginError).toContainText('Username is required')
})

//3)Empty Password
test('EmptyPassWord', async ({page}) => {
    await page.goto('https://www.saucedemo.com')
    const userName = await page.locator('#user-name').fill('standard_user')
    const passWord = await page.locator('#password').fill('')
    const loginBtn = await page.locator('#login-button').click()
    const loginError =await page.locator('[data-test="error"]')
    await expect(loginError).toBeVisible()
    const loginErrorMsg = await loginError.textContent()
    console.log(`Error message is '${loginErrorMsg }'`)
    await expect(loginError).toContainText('Password is required')
})

//4) Valid Username and Invalid Password
test('InvalidPassword', async ({page})=>{
    await page.goto('https://www.saucedemo.com')
    const userName = await page.locator('#user-name').fill('standard_user')
    const passWord = await page.locator('#password').fill('abdnc')
    const loginBtn = await page.locator('#login-button').click()
    const loginError =await page.locator('[data-test="error"]')
    await expect(loginError).toBeVisible()
    const loginErrorMsg = await loginError.textContent()
    console.log(`Error message is '${loginErrorMsg }'`)
    await expect(loginError).toContainText('Username and password do not match')
})

//5) Invalid Username and Valid Password
test('InvalidUsername', async ({page})=>{
await page.goto('https://www.saucedemo.com')
    const userName = await page.locator('#user-name').fill('standard')
    const passWord = await page.locator('#password').fill('secret_sauce')
    const loginBtn = await page.locator('#login-button').click()
    const loginError =await page.locator('[data-test="error"]')
    await expect(loginError).toBeVisible()
    const loginErrorMsg = await loginError.textContent()
    console.log(`Error message is '${loginErrorMsg }'`)
    await expect(loginError).toContainText('Username and password do not match')
})