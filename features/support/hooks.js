import { Before, BeforeStep ,After, AfterStep } from "@cucumber/cucumber";
import {ObjectManagerpom} from "../../pages/ObjectManagerpom.js";
import { chromium } from 'playwright';
import { Status } from "@cucumber/cucumber";

Before(async function () {
    // This hook will run before each scenario
    // You can perform any setup or initialization here
    console.log("Before hook executed after each scenario");
    this.browser = await chromium.launch({headless: false})   //browser launch
    this.context = await this.browser.newContext()  //new context
    this.page = await this.context.newPage()  //new page
    this.pom = new ObjectManagerpom(this.page)  
});

BeforeStep(async function () {
    // This hook will run before each step
    // You can perform any setup or initialization here
    console.log("Before hook executed after each step");
})

After(async function () {
    // This hook will run after each scenario
    // You can perform any cleanup or teardown here
    console.log("After hook executed after each scenario");
    if(this.browser){
        await this.browser.close();
    }
    if(this.context){
        await this.context.close();
    }   
    if(this.page){
        await this.page.close();
    }
    
} )

AfterStep(async function ({result}) {
    // This hook will run after each step
    // You can perform any cleanup or teardown here
    console.log("After hook executed after each step");
    if (result.status === Status.FAILED) {
        // Capture screenshot on step failure
       await this.page.screenshot({ path: `screenshots/${Date.now()}.png`, fullPage: true });
        // Attach the screenshot to the report
       // this.attach(screenshot, 'image/png');
    }
    

} )