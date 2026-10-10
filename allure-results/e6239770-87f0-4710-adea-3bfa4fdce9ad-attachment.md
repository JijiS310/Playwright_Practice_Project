# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: DemoProjectPOM.spec.js >> DemoProjectSauce Labs Bike Light,23/9/2026
- Location: tests\DemoProjectPOM.spec.js:11:5

# Error details

```
Test timeout of 40000ms exceeded.
```

```
Error: expect(locator).toHaveText(expected) failed

Locator: locator('.inventory_item_name')
Expected: "Sauce Labs Bike Light"
Error: element(s) not found

Call log:
  - Expect "toHaveText" with timeout 50000ms
  - waiting for locator('.inventory_item_name')
  - Test timeout of 40000ms exceeded.

```

```yaml
- banner:
  - button "Open Menu"
  - img "Open Menu"
  - text: Swag Labs
  - button "Cart, empty"
  - text: Your Cart
- main:
  - text: QTY Description
  - button "Continue Shopping"
  - button "Checkout"
- contentinfo:
  - list:
    - listitem:
      - link "X":
        - /url: https://x.com/saucelabs
    - listitem:
      - link "Facebook":
        - /url: https://www.facebook.com/saucelabs
    - listitem:
      - link "LinkedIn":
        - /url: https://www.linkedin.com/company/sauce-labs/
  - text: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
```

# Test source

```ts
  1  | import { expect } from "@playwright/test"
  2  | 
  3  | export class CartPage {
  4  |     constructor(page){
  5  |         this.cartProductName =  page.locator('.inventory_item_name')
  6  |         this.checkoutButton = page.locator('#checkout')
  7  |     }
  8  |     async cartProduct(myProduct){
> 9  |         await expect(this.cartProductName).toHaveText(myProduct)
     |                                            ^ Error: expect(locator).toHaveText(expected) failed
  10 |         const productName = await this.cartProductName.textContent()
  11 |         console.log(productName)
  12 |     }
  13 | 
  14 |     async checkout(){
  15 |     await this.checkoutButton.click()
  16 |     }
  17 | 
  18 |    
  19 | }
```