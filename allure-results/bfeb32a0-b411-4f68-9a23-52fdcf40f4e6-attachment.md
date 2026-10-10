# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: DatePickers.spec.js >> Datepickers
- Location: tests\DatePickers.spec.js:3:5

# Error details

```
Test timeout of 40000ms exceeded.
```

```
Error: locator.click: Test timeout of 40000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'Date Pickers' })
    - locator resolved to <a class="nav-link" href="date-picker.php">↵Date Pickers↵</a>
  - attempting click action
    - waiting for element to be visible, enabled and stable

```

# Test source

```ts
  1  | import {test, expect } from "@playwright/test";
  2  | 
  3  | test('Datepickers', async ({page})=>{
  4  |     await page.goto('https://selenium.qabible.in/index.php')
  5  |     const DatePickerPage = page.getByRole('link',{name:'Date Pickers'})
> 6  |     await DatePickerPage.click()
     |                          ^ Error: locator.click: Test timeout of 40000ms exceeded.
  7  |     const EnterDate = page.locator('#single-input-field')
  8  |     await expect(EnterDate).toBeVisible()
  9  |     await EnterDate.click()
  10 | 
  11 |     const yearSwitch =  page.locator('.datepicker-days th.datepicker-switch')//locator chaining -- .parent_class space child_tagname.child_class name
  12 |     await expect(yearSwitch).toBeVisible();
  13 |     await yearSwitch.click()  
  14 |     const monthSwitch =  page.locator('.datepicker-months th.datepicker-switch')
  15 |     await expect(monthSwitch).toBeVisible();
  16 |     await monthSwitch.click()
  17 |     const myYear = 2035
  18 |     const myMonth = 8
  19 |     const myDate = 22
  20 |     while(true){
  21 |     const yearPicker = await page.locator('.datepicker-years th.datepicker-switch').textContent()
  22 |     console.log(yearPicker)
  23 |     const startYear =  yearPicker.split('-')[0]   //string spliter with ' and saving 1st index value [0]
  24 |     const endYear =  yearPicker.split('-')[1]
  25 |     console.log(startYear)
  26 |     console.log(endYear)
  27 |     //task for 17/08/2026
  28 |     if (myYear>=startYear && myYear<=endYear){
  29 |         break
  30 |     }
  31 |     if(myYear<startYear){
  32 |         //previous button click 
  33 |         await page.locator('.datepicker-years .prev').click()
  34 |     }
  35 |     else{
  36 |         //next button click
  37 |          await page.locator('.datepicker-years .next').click()
  38 |     }
  39 |     
  40 |     } //while loop end 
  41 |     await page.getByText(myYear.toString(),{exact:true}).click()
  42 |     await page.locator('.month').nth(myMonth-1).click()
  43 |     await page.getByText(myDate.toString(),{exact:true}).click()
  44 |     //task for 18/08/2026
  45 |     await page.locator('#button-one').click()
  46 |     const inputDate = await page.locator('#single-input-field').inputValue()
  47 |     console.log('input box Date = ' + inputDate)
  48 |     const showDateMsg = await page.locator('#message-one')
  49 |     console.log('show Date Message = ' + await showDateMsg.textContent())
  50 |     //assertion
  51 |     await expect(showDateMsg).toHaveText('Date : ' + inputDate)
  52 |     await expect(showDateMsg).toContainText(inputDate)
  53 |     
  54 | })
```