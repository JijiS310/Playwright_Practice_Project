import { CartPage } from "./CartPage"
import { CheckoutPage } from "./CheckoutPage"
import { LoginPage } from "./LoginPage"
import { OrderConfirmPage } from "./OrderConfirmPage"
import { ProductPage } from "./ProductPage"

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