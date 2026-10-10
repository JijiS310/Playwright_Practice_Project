# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Checkbox.spec.js >> Checkbox
- Location: tests\Checkbox.spec.js:3:5

# Error details

```
Test timeout of 40000ms exceeded.
```

```
Error: locator.click: Test timeout of 40000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'Input Form' })
    - locator resolved to <a class="nav-link" href="simple-form-demo.php">↵Input Form↵</a>
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
  1  | import test, { expect } from "@playwright/test"
  2  | //Navigates to homepage
  3  | test ('Checkbox',async({page})=>{
  4  |     await page.goto('https://selenium.qabible.in/index.php')
  5  | //clicks on inputform page
  6  | const inputForm = await page.getByRole('link',{name:"Input Form"})
> 7  | await inputForm.click()
     |                 ^ Error: locator.click: Test timeout of 40000ms exceeded.
  8  | 
  9  | const checkboxDemo = await page.getByRole('link',{name:"Checkbox Demo"})
  10 | await checkboxDemo.click()
  11 | 
  12 | const checkclick = await page.getByLabel('Click on this check box')
  13 | await checkclick.check()
  14 | console.log(checkclick)
  15 | 
  16 | const visibilityBoolean = await checkclick.isVisible()
  17 | console.log(visibilityBoolean)
  18 | 
  19 | //await checkclick.uncheck()
  20 | const checktestBool = await checkclick.isChecked()
  21 | console.log(checktestBool)
  22 | 
  23 | await expect(checkclick).toBeChecked()
  24 | 
  25 | /*radio button as task for 12/08/2026*/
  26 | 
  27 | //Click on radio button
  28 | const radioButtonlink = await page.getByRole('link',{name:'Radio Buttons Demo'})
  29 | await radioButtonlink.click()
  30 | 
  31 | //Select gender
  32 | const selectGender = await page.locator('#inlineRadio2')
  33 | await selectGender.check()
  34 | 
  35 | //Assertion for gender select check
  36 | await expect(selectGender).toBeChecked()
  37 | 
  38 | //Click on Show Selected Value
  39 | const showSelectedValue = await page.getByRole('button',{name:'Show Selected Value'})
  40 | await showSelectedValue.click()
  41 | 
  42 | //Check the message after click to be visible - assertion
  43 | const selectedValueMsg = await page.locator('//div[@id = "message-one"]')
  44 | await expect(selectedValueMsg).toBeVisible()
  45 | 
  46 | //check selected value msg is visible - method
  47 | const ShowMsgBoolean = await selectedValueMsg.isVisible()
  48 | console.log(ShowMsgBoolean)
  49 | 
  50 | //extract the contents from show selected value
  51 | const selectedValueContent = await selectedValueMsg.textContent() 
  52 | console.log(selectedValueContent)
  53 | 
  54 | //assertion to check if the contents include 'Female'
  55 | await expect(selectedValueContent).toContain('Female')
  56 | 
  57 | //assertion to check if the selected value message is same as extracted content
  58 | await expect(selectedValueMsg).toHaveText(selectedValueContent)
  59 | 
  60 | })
```