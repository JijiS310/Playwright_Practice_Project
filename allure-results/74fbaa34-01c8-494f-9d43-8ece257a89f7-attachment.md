# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: API\Delete.spec.js >> Delete Booking
- Location: tests\API\Delete.spec.js:2:1

# Error details

```
SyntaxError: Unexpected token 'F', "Forbidden" is not valid JSON
```

# Test source

```ts
  1 | import {test,expect} from '@playwright/test'
  2 | test('Delete Booking', async({request}) => {
  3 |     const response = await request.delete('https://restful-booker.herokuapp.com/booking/4239', {header :  {'Content-Type':'application/json', 'Cookie' : 'token = 3ae3fbe05b4a2a0', 'Accept':'application/json'}})
  4 |     const statusCode = await response.status()
  5 |     console.log(statusCode)
> 6 |     const responseJson = await response.json()
    |                          ^ SyntaxError: Unexpected token 'F', "Forbidden" is not valid JSON
  7 |     console.log(responseJson)
  8 |     expect(statusCode).toBe(201)
  9 | })
```