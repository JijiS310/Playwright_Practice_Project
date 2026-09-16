/*
Different types of click options
single click = locator.click()
double click = locator.dblclick()
triple click = locator.click({clickCount:3})
Right click =locator.click({button:'right'})
Task for 20/08/2026
Checkbox try all these click options

Mouse Hover = locator.hover()*/

import test, { expect } from "@playwright/test"
test ('Checkbox',async({page})=>{
    await page.goto('https://selenium.qabible.in/index.php')
const inputForm = await page.getByRole('link',{name:"Input Form"})
await inputForm.click()

const checkboxDemo = await page.getByRole('link',{name:"Checkbox Demo"})
await checkboxDemo.click()

const singleClick = await page.locator('#check-box-one')
await singleClick.click()  //single click
const singleCheck = await singleClick.isChecked()
console.log(singleCheck)
//await page.pause()

const dblClick = await page.locator('#check-box-two')
await dblClick.dblclick()  //double click
const dblCheck = await dblClick.isChecked()
console.log(dblCheck)

const tripleClick = await page.locator('#check-box-three')
await tripleClick.click({clickCount:3})  //triple click
const tripleCheck = await tripleClick.isChecked()
console.log(tripleCheck)

const rightClick = await page.locator('#check-box-four')
await rightClick.click({button:'right'}) //right click
const rightCheck = await rightClick.isChecked()
console.log(rightCheck)

})

test('hover', async ({page})=>{
    await page.goto('https://selenium.qabible.in/index.php')

    await page.locator('#others').click()

    await page.getByRole('link',{name:'Chart Demo'}).click()
    await page.pause()

    await page.locator('#barChart').hover()

})