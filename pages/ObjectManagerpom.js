import { CartPage } from "./CartPage.js"
import { CheckoutPage } from "./CheckoutPage.js"
import { LoginPage } from "./LoginPage.js"
import { OrderConfirmPage } from "./OrderConfirmPage.js"
import { ProductPage } from "./ProductPage.js"

export class ObjectManagerpom {
    constructor(page){
        this.loginpage =  new LoginPage(page) //object creation as importing LoginPage and passing page as parame
        this.productpage = new ProductPage(page)
        this.cartpage = new CartPage(page)
        this.checkoutpage = new CheckoutPage(page)
        this.orderconfirmpage = new OrderConfirmPage(page)
    }

    getLoginPage (){
        return this.loginpage
    }

    getProductPage(){
        return this.productpage
    }

    getCartPage (){
        return this.cartpage
    }

    getCheckoutPage(){
        return this.checkoutpage
    }

    getOrderConfirmPage(){
        return this.orderconfirmpage
    }

}