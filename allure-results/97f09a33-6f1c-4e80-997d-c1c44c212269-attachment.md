# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: API\Delete.spec.js >> Delete Booking
- Location: tests\API\Delete.spec.js:2:1

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 201
Received: 405
```

# Test source

```ts
  1 | import {test,expect} from '@playwright/test'
  2 | test('Delete Booking', async({request}) => {
  3 |     const response = await request.delete('https://restful-booker.herokuapp.com/booking/1445', {headers :  {'Content-Type':'application/json', 'Cookie' : 'token=9554d0a0274149d'}})
  4 |     const statusCode =  response.status()
  5 |     console.log(statusCode)
  6 |     console.log(response.text())
> 7 |     expect(statusCode).toBe(201)
    |                        ^ Error: expect(received).toBe(expected) // Object.is equality
  8 | })
```