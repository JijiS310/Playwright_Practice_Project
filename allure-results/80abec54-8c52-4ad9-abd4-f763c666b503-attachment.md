# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: API\APIPost.spec.js >> Post Create Booking
- Location: tests\API\APIPost.spec.js:16:6

# Error details

```
ReferenceError: responseJson is not defined
```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test'
  2  | 
  3  | test('Post API test', async ({request}) => {
  4  |     const authData = {
  5  |     "username" : "admin",
  6  |     "password" : "password123"
  7  |     }
  8  |     const response = await request.post('https://restful-booker.herokuapp.com/auth', {headers : {'Content-Type':'application/json'}, data : authData })
  9  |     console.log(response.status())
  10 |     const responseJson = await response.json()
  11 |     console.log(responseJson)
  12 |     expect (responseJson.token).not.toBeNull()   //Verify if the token is not null
  13 | 
  14 | })
  15 | 
  16 | test.only('Post Create Booking', async ({request}) =>{
  17 |     const bookingData = {
  18 |     "firstname" : "Jim",
  19 |     "lastname" : "Brown",
  20 |     "totalprice" : 111,
  21 |     "depositpaid" : true,
  22 |     "bookingdates" : {
  23 |         "checkin" : "2018-01-01",
  24 |         "checkout" : "2019-01-01"
  25 |     },
  26 |     "additionalneeds" : "Breakfast"
  27 | }
  28 | 
  29 |     const response = await request.post('https://restful-booker.herokuapp.com/booking',{headers : {'Content-Type':'application/json'}, data : bookingData})
  30 |     console.log(response.status())
  31 |     const responseJSon = await response.json()
> 32 |     console.log(responseJson)
     |                 ^ ReferenceError: responseJson is not defined
  33 | })
```