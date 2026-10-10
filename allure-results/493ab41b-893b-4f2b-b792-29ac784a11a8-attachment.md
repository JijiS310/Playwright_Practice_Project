# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: API\Put.spec.js >> Put Update Booking
- Location: tests\API\Put.spec.js:3:6

# Error details

```
SyntaxError: Unexpected token 'F', "Forbidden" is not valid JSON
```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test'
  2  | 
  3  | test.only ('Put Update Booking', async ({request}) => {
  4  |     const bookingDetails = {
  5  |     "firstname" : "Jiji",
  6  |     "lastname" : "Sasidharan",
  7  |     "totalprice" : 111,
  8  |     "depositpaid" : true,
  9  |     "bookingdates" : {
  10 |         "checkin" : "2018-01-01",
  11 |         "checkout" : "2019-01-01"
  12 |     },
  13 |     "additionalneeds" : "Breakfast"
  14 | }
  15 | 
  16 |     const response = await request.put('https://restful-booker.herokuapp.com/booking/3960', {headers : {'Content-Type':'application/json', 'Cookie' : 'token = c8608bbfe485c09', 'Accept':'application/json'},data : bookingDetails})
> 17 |     const responseJson = await response.json()
     |                          ^ SyntaxError: Unexpected token 'F', "Forbidden" is not valid JSON
  18 |     console.log(responseJson)
  19 |     console.log(response.status())
  20 | })
```