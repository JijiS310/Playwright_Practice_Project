# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Screenshot.spec.js >> Screenshot
- Location: tests\Screenshot.spec.js:2:1

# Error details

```
Error: locator.screenshot: Target page, context or browser has been closed
Call log:
  - waiting for locator('#login-button')

```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test'
  2  | test('Screenshot', async ({page}) => {
  3  | 
  4  |     await page.goto('https://selenium.qabible.in/index.php')
  5  |     //page level screenshot
  6  |     await page.screenshot({path: 'screenshot/Homepage.png',fullPage:true}) //screenshot folder creates and image of
  7  |     const loginButton = page.locator('#login-button')
> 8  |     await loginButton.screenshot({path: 'screenshot/LoginButton.png'})
     |                       ^ Error: locator.screenshot: Target page, context or browser has been closed
  9  | 
  10 | })
  11 | 
  12 | test('VisualTesting',async({page}) =>{
  13 |     await page.goto('https://selenium.qabible.in/index.php')
  14 |     await expect(page).toHaveScreenshot('screenshot/Homepage1.png')
  15 | })
```