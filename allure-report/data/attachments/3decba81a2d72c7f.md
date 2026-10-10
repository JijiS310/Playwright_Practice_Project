# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: javascriptAlert.spec.js >> javascriptAlert
- Location: tests\javascriptAlert.spec.js:3:5

# Error details

```
Test timeout of 40000ms exceeded.
```

```
Error: locator.click: Test timeout of 40000ms exceeded.
Call log:
  - waiting for locator('#alert-modal')
    - locator resolved to <a class="nav-link" id="alert-modal" href="bootstrap-alert.php">↵Alerts and Modals↵</a>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - performing click action

```

# Test source

```ts
  1  | import test, { expect } from "@playwright/test";
  2  | 
  3  | test('javascriptAlert',async ({page})=>{
  4  |     await page.goto('https://selenium.qabible.in/index.php')
  5  |     
  6  |     const alertModalPage = await page.locator('#alert-modal')
> 7  |     await alertModalPage.click()
     |                          ^ Error: locator.click: Test timeout of 40000ms exceeded.
  8  | 
  9  |     const jsAlert = await page.getByRole('link',{name:'Javascript Alert'})
  10 |     await jsAlert.click()
  11 | 
  12 |     const click2 = await page.locator('//button[@class="btn btn-warning"]')
  13 |      //javascript dialog box handling
  14 |     page.on('dialog', async(dialog) =>{
  15 |         //await page.waitForTimeout(5000)
  16 |    //   await dialog.accept()    //by default clicks 'ok'
  17 |         await dialog.dismiss()   //for cancelation
  18 |     })
  19 |     await click2.click()
  20 | 
  21 |     const confirmText = await page.locator('#confirm-demo')
  22 |     const msgText = await confirmText.textContent()  
  23 |     console.log(msgText)
  24 |     await expect(msgText) .toContain('Cancel') 
  25 | 
  26 | })
  27 | 
  28 |     test('promptCheck',async ({page})=>{
  29 |     await page.goto('https://selenium.qabible.in/index.php')
  30 |     
  31 |     const alertModalPage = await page.locator('#alert-modal')
  32 |     await alertModalPage.click()
  33 | 
  34 |     const jsAlert = await page.getByRole('link',{name:'Javascript Alert'})
  35 |     await jsAlert.click()
  36 | 
  37 |     const clickPrompt = await page.locator('.btn.btn-danger')
  38 |     page.on('dialog', async(dialog) =>{
  39 |         await page.waitForTimeout(5000)
  40 |         console.log(dialog.message())
  41 |         await dialog.accept('Hello')
  42 |     })
  43 |     await clickPrompt.click()
  44 |    // await page.pause()
  45 |     //task for 14/08/2026
  46 |     const promoptmsg = await page.locator('#prompt-demo')
  47 |     const promptmsgtext = await promoptmsg.textContent()
  48 |     console.log(promptmsgtext)
  49 |     await expect(promptmsgtext) .toContain('Hello')
  50 | 
  51 | })
```