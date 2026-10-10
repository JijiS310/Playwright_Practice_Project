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

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - link [ref=e8] [cursor=pointer]:
      - /url: index.php
      - img "logo" [ref=e9]
    - navigation [ref=e14]:
      - list [ref=e16]:
        - listitem [ref=e17]:
          - link "Home" [ref=e18] [cursor=pointer]:
            - /url: index.php
        - listitem [ref=e19]:
          - link "Input Form" [ref=e20] [cursor=pointer]:
            - /url: simple-form-demo.php
        - listitem [ref=e21]:
          - link "Date Pickers" [ref=e22] [cursor=pointer]:
            - /url: date-picker.php
        - listitem [ref=e23]:
          - link "Table" [ref=e24] [cursor=pointer]:
            - /url: table-pagination.php
        - listitem [ref=e25]:
          - link "Progress Bars" [ref=e26] [cursor=pointer]:
            - /url: jquery-progress-bar.php
        - listitem [ref=e27]:
          - link "Alerts and Modals" [ref=e28] [cursor=pointer]:
            - /url: bootstrap-alert.php
        - listitem [ref=e29]:
          - link "List Box" [ref=e30] [cursor=pointer]:
            - /url: bootstrap-dual-list.php
        - listitem [ref=e31]:
          - link "Others" [ref=e32] [cursor=pointer]:
            - /url: drag-drop.php
  - generic [ref=e37]:
    - list [ref=e38]:
      - listitem [ref=e39] [cursor=pointer]
      - listitem [ref=e40] [cursor=pointer]
      - listitem [ref=e41] [cursor=pointer]
      - listitem [ref=e42] [cursor=pointer]
    - generic [ref=e44]:
      - img "Bootstrap 4 slider with text animation" [ref=e45]
      - generic [ref=e46]:
        - heading "Free Download" [level=3] [ref=e47]
        - heading "Bootstrap 4 slider with text animation" [level=3] [ref=e48]
    - button "Previous" [ref=e49] [cursor=pointer]
    - button "Next" [ref=e52] [cursor=pointer]
  - contentinfo [ref=e55]:
    - paragraph [ref=e58]: © 2021 Obsqura Testing, All Rights Reserved.
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