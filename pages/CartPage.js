import { expect } from "@playwright/test"

export class CartPage {
    constructor(page){
        this.cartProductName =  page.locator('.inventory_item_name')
        this.checkoutButton = page.locator('#checkout')
    }
    async cartProduct(myProduct){
        await expect(this.cartProductName).toHaveText(myProduct)
        const productName = await this.cartProductName.textContent()
        console.log(productName)
    }

    async checkout(){
    await this.checkoutButton.click()
    }

   
}