export class CheckoutPage{
    constructor(page){
        this.firstName = page.locator('#first-name')
        this.lastName = page.locator('#last-name')
        this.postalCode = page.locator('#postal-code')
        this.continueButton = page.locator('#continue')
        this.finishButton = page.locator('#finish')

    }
    async addressfill(fName,lName,zip){
        await this.firstName.fill(fName)
        await this.lastName.fill(lName)
        await this.postalCode.fill(zip)

    }
    async confirm(){
        await this.continueButton.click()
        await this.finishButton.click()
    }

}