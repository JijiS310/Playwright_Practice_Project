import { expect } from "@playwright/test"

export class OrderConfirmPage{
    constructor(page){
        this.confirmMsg =  page.locator('.complete-header')

    }
async orderCreated(){
    console.log(await this.confirmMsg.textContent())
    await expect(this.confirmMsg).toHaveText('Thank you for your order!')

}
}


