# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: SecondTest.spec.js >> locator
- Location: tests\SecondTest.spec.js:6:5

# Error details

```
Test timeout of 40000ms exceeded.
```

```
Error: locator.check: Test timeout of 40000ms exceeded.
Call log:
  - waiting for getByLabel('Agree to terms and conditions')
    - locator resolved to <input value="" required="" type="checkbox" id="invalidCheck" class="form-check-input"/>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - performing click action

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
    - generic [ref=e57]:
      - generic [ref=e58]: Form with validations
      - generic [ref=e60]:
        - generic [ref=e61]:
          - generic [ref=e62]:
            - generic [ref=e63]: First name
            - textbox "First name" [ref=e64]: Jiji
          - generic [ref=e65]:
            - generic [ref=e66]: Last name
            - textbox "Last name" [ref=e67]: Sasidharan
          - generic [ref=e68]:
            - generic [ref=e69]: Username
            - generic [ref=e70]:
              - generic [ref=e71]: "@"
              - textbox "Username" [ref=e73]: jps
        - generic [ref=e74]:
          - generic [ref=e75]:
            - generic [ref=e76]: City
            - textbox "City" [ref=e77]: Thrissur
          - generic [ref=e78]:
            - generic [ref=e79]: State
            - textbox "State" [active] [ref=e80]: Kerala
          - generic [ref=e81]:
            - generic [ref=e82]: Zip
            - textbox "Zip" [ref=e83]
        - generic [ref=e85]:
          - checkbox "Agree to terms and conditions" [ref=e86]
          - generic [ref=e87]: Agree to terms and conditions
        - button "Submit form" [ref=e88] [cursor=pointer]
  - contentinfo [ref=e89]:
    - paragraph [ref=e92]: © 2021 Obsqura Testing, All Rights Reserved.
```

# Test source

```ts
  1  | /*10/08/2028
  2  | css locators
  3  | <tagname attribute = "attribute value"  ===> <input type = "text" */
  4  | import test, { expect } from "@playwright/test";
  5  | 
  6  | test('locator',async ({page})=>{
  7  |     await page.goto('https://selenium.qabible.in/form-submit.php')
  8  |     //id
  9  |     const firstName_Locator = await page.locator('#validationCustom01')  // locating elemeng with id = #
  10 |     await firstName_Locator.fill('Jiji')
  11 |     //await page.pause()     //page gets paused
  12 | 
  13 |     //class
  14 |     const lastName_Locator = await page.locator('.form-control').nth(1)  //class = .classname (.nth(1) == multiple class(strict mode violation) with same name thus pointing the correct index)
  15 |     await lastName_Locator.fill('Sasidharan')
  16 | 
  17 |     //attribute = attributename using placeholder
  18 |     const userName =  await page.locator('input[placeholder="Username"]') //('tagname[attributename ="attributename"]')
  19 |     await userName.fill('jps')
  20 | 
  21 |     //xpath using id
  22 |     const city = await page.locator('//input[@id="validationCustom03"]') //('//tagname[@attributename = "attribute value"]')
  23 |     await city.fill('Thrissur')
  24 | 
  25 |     //special locators = getByAttributeNAme
  26 |     const state = await page.getByPlaceholder('State')
  27 |     await state.fill('Kerala')
  28 | 
  29 |     //getByLabel
  30 |     const checkbox = await page.getByLabel('Agree to terms and conditions')
> 31 |     await checkbox.check()  //checkbox.click or checkbox.check
     |                    ^ Error: locator.check: Test timeout of 40000ms exceeded.
  32 | 
  33 |     //task for 10/08/26 button and zip
  34 |     //zip
  35 |     //const zip = await page.locator('.form-control').nth(5)
  36 |     const zip = await page.getByPlaceholder('Zip')
  37 |     await zip.fill('680519')
  38 |     
  39 |     //button
  40 |     /*const submit_button = await page.locator('//button[@class ="btn btn-primary"]')
  41 |     await submit_button.click()
  42 |     await page.pause()*/
  43 | 
  44 |     //getByRole
  45 |     const submit_button = await page.getByRole('button',{name:"Submit form"})  //getByRole for button, link, agree conditions etc
  46 |     await submit_button.click()
  47 | 
  48 |     //successmsg
  49 |     const successMsg = await page.locator('#message-one')
  50 |     //assertion for locator visibility
  51 |     await expect(successMsg) .toBeVisible()    //toBeVisible to check if the locator is visible.for not visible ==> not.toBeVisible
  52 |     //await expect(successMsg) .not.toBeVisible() 
  53 |     
  54 |     const visibilityBoolean = await successMsg.isVisible()  //not an assertion rather visible or not true or false check
  55 |     console.log(visibilityBoolean)
  56 |     await expect(visibilityBoolean).toBeTruthy()  
  57 | 
  58 |     const msgText = await successMsg.textContent()   //textcontent fetches the data from single locator and alltextcontent fetchs data from multiple locators
  59 |     console.log(msgText)
  60 | 
  61 |     //Assertions
  62 |     await expect(msgText) .toContain('successfully') //toContain check if one substring is there within the text
  63 |     
  64 | 
  65 | 
  66 | })
  67 | 
  68 | 
```