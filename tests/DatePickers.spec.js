import {test, expect } from "@playwright/test";

test('Datepickers', async ({page})=>{
    await page.goto('https://selenium.qabible.in/index.php')
    const DatePickerPage = page.getByRole('link',{name:'Date Pickers'})
    await DatePickerPage.click()
    const EnterDate = page.locator('#single-input-field')
    await expect(EnterDate).toBeVisible()
    await EnterDate.click()

    const yearSwitch =  page.locator('.datepicker-days th.datepicker-switch')//locator chaining -- .parent_class space child_tagname.child_class name
    await expect(yearSwitch).toBeVisible();
    await yearSwitch.click()  
    const monthSwitch =  page.locator('.datepicker-months th.datepicker-switch')
    await expect(monthSwitch).toBeVisible();
    await monthSwitch.click()
    const myYear = 2035
    const myMonth = 8
    const myDate = 22
    while(true){
    const yearPicker = await page.locator('.datepicker-years th.datepicker-switch').textContent()
    console.log(yearPicker)
    const startYear =  yearPicker.split('-')[0]   //string spliter with ' and saving 1st index value [0]
    const endYear =  yearPicker.split('-')[1]
    console.log(startYear)
    console.log(endYear)
    //task for 17/08/2026
    if (myYear>=startYear && myYear<=endYear){
        break
    }
    if(myYear<startYear){
        //previous button click 
        await page.locator('.datepicker-years .prev').click()
    }
    else{
        //next button click
         await page.locator('.datepicker-years .next').click()
    }
    
    } //while loop end 
    await page.getByText(myYear.toString(),{exact:true}).click()
    await page.locator('.month').nth(myMonth-1).click()
    await page.getByText(myDate.toString(),{exact:true}).click()
    //task for 18/08/2026
    await page.locator('#button-one').click()
    const inputDate = await page.locator('#single-input-field').inputValue()
    console.log('input box Date = ' + inputDate)
    const showDateMsg = await page.locator('#message-one')
    console.log('show Date Message = ' + await showDateMsg.textContent())
    //assertion
    await expect(showDateMsg).toHaveText('Date : ' + inputDate)
    await expect(showDateMsg).toContainText(inputDate)
    
})