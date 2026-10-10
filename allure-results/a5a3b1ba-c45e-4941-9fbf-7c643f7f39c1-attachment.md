# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: DemoProject.spec.js >> LocatorCustom
- Location: tests\DemoProject.spec.js:84:15

# Error details

```
Test timeout of 40000ms exceeded.
```

```
Error: page.goto: Test timeout of 40000ms exceeded.
Call log:
  - navigating to "https://www.saucedemo.com/", waiting until "load"

```

# Test source

```ts
  1  | import test from "@playwright/test";
  2  | exports.customLocators = test.extend({
  3  |     commonLocators:async ({page},use) =>{   //commonLocators fixture
  4  |         const locators = {
  5  |             userName : page.locator('#user-name'),
  6  |             passWord : page.locator('#password'),
  7  |             loginBtn : page.locator('#login-button')
  8  |         } 
  9  |         await use(locators)
  10 |     },
  11 |     loginFunction:async ({page,commonLocators},use) =>{    //loginFunction fixture
  12 |         const login = async(uname,pw)=>{
> 13 |             await page.goto('https://www.saucedemo.com')
     |                        ^ Error: page.goto: Test timeout of 40000ms exceeded.
  14 |             await commonLocators.userName.fill(uname)
  15 |             await commonLocators.passWord.fill(pw)
  16 |             await commonLocators.loginBtn.click()
  17 |         }
  18 |         await use(login)
  19 |     }
  20 | })
```