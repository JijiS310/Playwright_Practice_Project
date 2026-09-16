import {test} from "@playwright/test";
import {ObjectManagerpom} from "../pagesTS/ObjectManagerpom"
import inputData from "../utils/inputData.json"
//if array input we can skip below line rather use for of loop
//const inputDataJSObj = JSON.parse(JSON.stringify(inputData))   //inputData(json) to string using stringify and that to javascript object using parse
let currentDate = new Date().toLocaleDateString() 
for(let inputDataJSObj of inputData){ //closing at the end of test, instead of i here used inputDataJSObj for easiness

//test(`DemoProject ${inputDataJSObj.myProduct}`, async ({page}) => { // modified here as while running with different pproduct names, test will runs with same project name Demoproject so to avoid that we just added prpduct name along with test name for avoiding duplication

test('DemoProject' + inputDataJSObj.myProduct + "," + currentDate, async ({page}) => { 
let pom = new ObjectManagerpom(page)
 
let loginpage = pom.getLoginPage()
await loginpage.gotoPage()
await loginpage.validateUser(inputDataJSObj.username,inputDataJSObj.password) //data driven

let productpage = pom.getProductPage()
await productpage.selectProduct(inputDataJSObj.myProduct)
await productpage.shoppingCart()

let cartpage = pom.getCartPage()
await cartpage.cartProduct(inputDataJSObj.myProduct)
await cartpage.checkout()

let checkoutpage = pom.getCheckoutPage()
await checkoutpage.addressfill(inputDataJSObj.firstname,inputDataJSObj.lastname,inputDataJSObj.postalcode)
await checkoutpage.confirm()

let orderconfirmpage = pom.getOrderConfirmPage()
await orderconfirmpage.orderCreated()
})
}

