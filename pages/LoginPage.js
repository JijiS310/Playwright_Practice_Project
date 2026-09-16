export class LoginPage{
    constructor(page){
        this.page = page
        this.userName = page.locator('#user-name')
        this.passWord = page.locator('#password')
        this.loginBtn = page.locator('#login-button')

    }
    async gotoPage(){
        await this.page.goto('https://www.saucedemo.com')
    }
    async validateUser(uname,pwd){
        await this.userName.fill(uname)
        await this.passWord.fill(pwd)
        await this.loginBtn.click()
    }
}
    

