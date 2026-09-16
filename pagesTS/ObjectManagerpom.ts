import { Page } from "@playwright/test"
import { CartPage } from "../pagesTS/CartPage.ts"
import { CheckoutPage } from "../pagesTS/CheckoutPage.ts"
import { LoginPage } from "../pagesTS/LoginPage.ts"
import { OrderConfirmPage } from "../pagesTS/OrderConfirmPage.ts"
import { ProductPage } from "../pagesTS/ProductPage.ts"

export class ObjectManagerpom {
    loginpage:LoginPage   //class also a type thus give that classname as type
    productpage:ProductPage
    cartpage:CartPage
    checkoutpage:CheckoutPage
    orderconfirmpage:OrderConfirmPage

    constructor(page:Page){
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