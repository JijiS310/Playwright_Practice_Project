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
Error: locator.hover: Test timeout of 40000ms exceeded.
Call log:
  - waiting for locator('#button-one')
    - locator resolved to <button type="button" id="button-one" class="btn btn-primary">Show Message</button>
  - attempting hover action
    - waiting for element to be visible and stable

```

# Page snapshot

```yaml
- generic [ref=e1]:
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
  - generic [ref=e35]:
    - generic [ref=e38]:
      - generic [ref=e39]: Menu
      - list [ref=e40]:
        - listitem [ref=e41]:
          - link "Simple Form Demo" [ref=e42] [cursor=pointer]:
            - /url: simple-form-demo.php
        - listitem [ref=e43]:
          - link "Checkbox Demo" [ref=e44] [cursor=pointer]:
            - /url: check-box-demo.php
        - listitem [ref=e45]:
          - link "Radio Buttons Demo" [ref=e46] [cursor=pointer]:
            - /url: radio-button-demo.php
        - listitem [ref=e47]:
          - link "Select Input" [ref=e48] [cursor=pointer]:
            - /url: select-input.php
        - listitem [ref=e49]:
          - link "Form Submit" [ref=e50] [cursor=pointer]:
            - /url: form-submit.php
        - listitem [ref=e51]:
          - link "Ajax Form Submit" [ref=e52] [cursor=pointer]:
            - /url: ajax-form-submit.php
        - listitem [ref=e53]:
          - link "Jquery Select2" [ref=e54] [cursor=pointer]:
            - /url: jquery-select.php
    - generic [ref=e55]:
      - generic [ref=e57]:
        - generic [ref=e58]: Single Input Field
        - generic [ref=e60]:
          - generic [ref=e61]:
            - generic [ref=e62]: Enter Message
            - textbox "Message" [ref=e63]: testing
          - button "Show Message" [ref=e64] [cursor=pointer]
          - generic [ref=e65]: "Your Message :"
      - generic [ref=e67]:
        - generic [ref=e68]: Two Input Fields
        - generic [ref=e70]:
          - generic [ref=e71]:
            - generic [ref=e72]: Enter value A
            - textbox "Enter Value" [active] [ref=e73]: testing
          - generic [ref=e74]:
            - generic [ref=e75]: Enter value B
            - textbox "Enter Value" [ref=e76]
          - button "Get Total" [ref=e77] [cursor=pointer]
          - generic [ref=e78]: "Total A + B :"
  - contentinfo [ref=e79]:
    - paragraph [ref=e82]: © 2021 Obsqura Testing, All Rights Reserved.
```

# Test source

```ts
  1  | import test from "@playwright/test";
  2  | 
  3  | test('@Login KeyboardActions', async ({page}) => {
  4  |     await page.goto("https://selenium.qabible.in/simple-form-demo.php")
  5  |     const inputbox1 = page.locator('#single-input-field')
  6  |     await inputbox1.focus()  // cursor gets focused here
  7  |     await page.keyboard.type('testing')
  8  |     await page.keyboard.press('Control+A')
  9  |     await page.keyboard.press('Control+C')
  10 |     const inputbox2 = page.locator('#value-a')
  11 |     await inputbox2.focus()
  12 |     await page.keyboard.press('Control+V')
  13 | 
  14 |     //MouseActions
  15 |     const showMsgButton = page.locator('#button-one')
> 16 |     await showMsgButton.hover()
     |                         ^ Error: locator.hover: Test timeout of 40000ms exceeded.
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