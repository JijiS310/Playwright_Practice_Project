import test from "@playwright/test";
exports.customLocators = test.extend({
    commonLocators:async ({page},use) =>{   //commonLocators fixture
        const locators = {
            userName : page.locator('#user-name'),
            passWord : page.locator('#password'),
            loginBtn : page.locator('#login-button')
        } 
        await use(locators)
    },
    loginFunction:async ({page,commonLocators},use) =>{    //loginFunction fixture
        const login = async(uname,pw)=>{
            await page.goto('https://www.saucedemo.com')
            await commonLocators.userName.fill(uname)
            await commonLocators.passWord.fill(pw)
            await commonLocators.loginBtn.click()
        }
        await use(login)
    }
})