import { Locator, Page } from "@playwright/test"

export class LoginPage{
    userName:Locator
    passWord:Locator
    page:Page
    loginBtn:Locator
    constructor(page:Page){
        this.page = page
        this.userName = page.locator('#user-name')
        this.passWord = page.locator('#password')
        this.loginBtn = page.locator('#login-button')

    }
    async gotoPage(){
        await this.page.goto('https://www.saucedemo.com')
    }
    async validateUser(uname:string,pwd:string){  //String - class, type -string
        await this.userName.fill(uname)
        await this.passWord.fill(pwd)
        await this.loginBtn.click()
    }
}
    

