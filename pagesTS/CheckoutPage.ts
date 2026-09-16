import { Locator, Page } from "@playwright/test"

export class CheckoutPage{
    firstName:Locator
    lastName:Locator
    postalCode:Locator
    continueButton:Locator
    finishButton:Locator
    constructor(page:Page){
        this.firstName = page.locator('#first-name')
        this.lastName = page.locator('#last-name')
        this.postalCode = page.locator('#postal-code')
        this.continueButton = page.locator('#continue')
        this.finishButton = page.locator('#finish')

    }
    async addressfill(fName:string,lName:string,zip:string){
        await this.firstName.fill(fName)
        await this.lastName.fill(lName)
        await this.postalCode.fill(zip)

    }
    async confirm(){
        await this.continueButton.click()
        await this.finishButton.click()
    }

}