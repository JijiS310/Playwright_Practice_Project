import { Given, When, Then } from '@cucumber/cucumber';



/*for "type" :"commonjs" below const will support not import
import { createRequire} from module; //to use "require" in ES module
const require = createRequire(import.meta.url); //to use "require" in ES module
const { Given, When, Then } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const { ObjectManagerpom } = require('../../pages/ObjectManagerpom.js');*/


Given('Navigate to the ecomm site and login using {string} and {string}', async function (uname, pwd) {

    let loginpage = this.pom.getLoginPage()
    await loginpage.gotoPage()
    await loginpage.validateUser(uname,pwd)
});

When('Select {string} from product listing page and add it to the cart', async function (productName) {
    let productpage = this.pom.getProductPage()
    await productpage.selectProduct(productName)
    await productpage.shoppingCart()
});

Then('Verify {string} is added to the cart and proceed to checkout',async function (productName) {
    let cartpage = this.pom.getCartPage()
    await cartpage.cartProduct(productName)
    await cartpage.checkout()
});

When('Enter the user details {string} , {string} and {string} and place the order', async function (firstName, lastName, zipCode) {
    let checkoutpage = this.pom.getCheckoutPage()
    await checkoutpage.addressfill(firstName, lastName, zipCode)
    await checkoutpage.confirm()
});

Then('Verify the order is placed successfully', async function () {
    let orderconfirmpage = this.pom.getOrderConfirmPage()
    await orderconfirmpage.orderCreated()
    await this.browser.close();
});

