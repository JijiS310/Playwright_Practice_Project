# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: KeyboardActions.spec.js >> @Login KeyboardActions
- Location: tests\KeyboardActions.spec.js:3:5

# Error details

```
Test timeout of 40000ms exceeded.
```

```
Error: keyboard.type: Test timeout of 40000ms exceeded.
```

# Test source

```ts
  1  | import test from "@playwright/test";
  2  | 
  3  | test('@Login KeyboardActions', async ({page}) => {
  4  |     await page.goto("https://selenium.qabible.in/simple-form-demo.php")
  5  |     const inputbox1 = page.locator('#single-input-field')
  6  |     await inputbox1.focus()  // cursor gets focused here
> 7  |     await page.keyboard.type('testing')
     |                         ^ Error: keyboard.type: Test timeout of 40000ms exceeded.
  8  |     await page.keyboard.press('Control+A')
  9  |     await page.keyboard.press('Control+C')
  10 |     const inputbox2 = page.locator('#value-a')
  11 |     await inputbox2.focus()
  12 |     await page.keyboard.press('Control+V')
  13 | 
  14 |     //MouseActions
  15 |     const showMsgButton = page.locator('#button-one')
  16 |     await showMsgButton.hover()
  17 | 
  18 |     await showMsgButton.click({button:'right'})
  19 |     await page.waitForTimeout(3000)
  20 | 
  21 |     await showMsgButton.dblclick() 
  22 |     await showMsgButton.click({clickCount:3})
  23 |     
  24 | 
  25 | })
```