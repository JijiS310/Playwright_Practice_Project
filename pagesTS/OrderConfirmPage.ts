import { expect, Locator, Page } from "@playwright/test"

export class OrderConfirmPage{
    confirmMsg:Locator
    constructor(page:Page){
        this.confirmMsg =  page.locator('.complete-header')

    }
async orderCreated(){
    console.log(await this.confirmMsg.textContent())
    await expect(this.confirmMsg).toHaveText('Thank you for your order!')

}
}


