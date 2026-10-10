# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: API\Put.spec.js >> Put Update Booking
- Location: tests\API\Put.spec.js:3:6

# Error details

```
ReferenceError: bookingId is not defined
```

# Test source

```ts
  1  | import {test,expect} from '../../Fixture/APIfixture.js'
  2  | 
  3  | test.only ('Put Update Booking', async ({request,authToken,bookingID}) => {
  4  |     
  5  |     const bookingDetails = {
  6  |     "firstname" : "Jiji",
  7  |     "lastname" : "Sasidharan",
  8  |     "totalprice" : 111,
  9  |     "depositpaid" : true,
  10 |     "bookingdates" : {
  11 |         "checkin" : "2018-01-01",
  12 |         "checkout" : "2019-01-01"
  13 |     },
  14 |     "additionalneeds" : "Breakfast"
  15 | }
  16 | 
  17 | 
> 18 |     const response = await request.put(`https://restful-booker.herokuapp.com/booking/${bookingId}`, {headers : {'Content-Type':'application/json', 'Cookie' : `token=${token}`, 'Accept':'application/json'},data : bookingDetails})
     |                                                                                        ^ ReferenceError: bookingId is not defined
  19 |     const responseJson = await response.json()
  20 |     console.log('Response is : ' + JSON.stringify(responseJson, null, 2))  //if no null,2 then will print it in single line.   
  21 |     console.log('StatusCode is : ' +response.status())
  22 |     expect(responseJson.firstname).toBe(bookingDetails.firstname)
  23 |     expect(response.status()).toBe(200)
  24 |     expect(responseJson.bookingdates.checkin).not.toBeNull()
  25 | 
  26 | 
  27 |     /* 
  28 |     JSON.stringify(value, replacer, space);
  29 | 
  30 |     value	   responseJson	   The object you want to convert
  31 |     replacer   null	           No custom filtering or transformation
  32 |     space	   2	           Two spaces of indentation per nesting level*/
  33 | })
```