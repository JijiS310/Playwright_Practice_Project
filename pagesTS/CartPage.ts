import { expect, Locator, Page } from "@playwright/test"

export class CartPage {
    cartProductName:Locator
    checkoutButton:Locator
    constructor(page:Page){
        this.cartProductName =  page.locator('.inventory_item_name')
        this.checkoutButton = page.locator('#checkout')
    }
    async cartProduct(myProduct:string){
        await expect(this.cartProductName).toHaveText(myProduct)
        const productName = await this.cartProductName.textContent()
        console.log(productName)
    }

    async checkout(){
    await this.checkoutButton.click()
    }

   
}