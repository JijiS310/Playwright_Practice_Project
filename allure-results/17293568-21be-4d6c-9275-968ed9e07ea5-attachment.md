# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: API\Put.spec.js >> Put Update Booking
- Location: tests\API\Put.spec.js:3:6

# Error details

```
TypeError: authBody.token is not a function
```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test'
  2  | 
  3  | test.only ('Put Update Booking', async ({request}) => {
  4  |     const authResponse = await request.post('https://restful-booker.herokuapp.com/auth', {data: {
  5  |         username: 'admin',
  6  |         password: 'password123'
  7  |     }})
  8  |     const authBody = await authResponse.json()
> 9  |     const token = authBody.token()
     |                            ^ TypeError: authBody.token is not a function
  10 |     const bookingData = {
  11 |     "firstname" : "Jim",
  12 |     "lastname" : "Brown",
  13 |     "totalprice" : 111,
  14 |     "depositpaid" : true,
  15 |     "bookingdates" : {
  16 |         "checkin" : "2018-01-01",
  17 |         "checkout" : "2019-01-01"
  18 |     },
  19 |     "additionalneeds" : "Breakfast"
  20 | }
  21 |     const bookingDetails = {
  22 |     "firstname" : "Jiji",
  23 |     "lastname" : "Sasidharan",
  24 |     "totalprice" : 111,
  25 |     "depositpaid" : true,
  26 |     "bookingdates" : {
  27 |         "checkin" : "2018-01-01",
  28 |         "checkout" : "2019-01-01"
  29 |     },
  30 |     "additionalneeds" : "Breakfast"
  31 | }
  32 |     const createBookingResponse = await request.post('https://restful-booker.herokuapp.com/booking',{headers : {'Content-Type':'application/json'}, data : bookingData})
  33 |     const createResponse = await createBookingResponse.json()
  34 |     const bookingId = createResponse.bookingId()
  35 | 
  36 |     const response = await request.put(`https://restful-booker.herokuapp.com/booking/${bookingId}`, {headers : {'Content-Type':'application/json', 'Cookie' : `token = ${token}`, 'Accept':'application/json'},data : bookingDetails})
  37 |     const responseJson = await response.json()
  38 |     console.log('Response is : ' + JSON.stringify(responseJson, null, 2))  //if no null,2 then will print it in single line.   
  39 |     console.log('StatusCode is : ' +response.status())
  40 |     expect(responseJson.firstname).toBe(bookingDetails.firstname)
  41 |     expect(response.status()).toBe(200)
  42 |     expect(responseJson.bookingdates.checkin).not.toBeNull()
  43 | 
  44 | 
  45 |     /* 
  46 |     JSON.stringify(value, replacer, space);
  47 | 
  48 |     value	   responseJson	   The object you want to convert
  49 |     replacer   null	           No custom filtering or transformation
  50 |     space	   2	           Two spaces of indentation per nesting level*/
  51 | })
```