 export class ProductPage{
    constructor(page){
        this.itemLocator = page.locator('.inventory_item_name')
        this.itemDescri =  page.locator('.inventory_item_description')
        this.cartLink = page.locator('.shopping_cart_link')
    }
    async selectProduct(myProduct) {
        const allProductsName = await this.itemLocator.allTextContents()
        const productCount = await this.itemLocator.count()
    

    for(let i=0; i<productCount; i++){
        
        if(await this.itemDescri.nth(i).locator('.inventory_item_name').textContent() == myProduct)
        {
            const cartButton= this.itemDescri.nth(i).getByRole('button', { name: 'Add to cart' })
            await cartButton.click()
        }
        
    }
    }
    async shoppingCart() {
    await this.cartLink.click()
    }
}
