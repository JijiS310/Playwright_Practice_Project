import {test,expect} from '../../fixture/APIfixture.js'

test.only ('Put Update Booking', async ({request,token,bookingId}) => {
    
    const bookingDetails = {
    "firstname" : "Jiji",
    "lastname" : "Sasidharan",
    "totalprice" : 111,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    },
    "additionalneeds" : "Breakfast"
}


    const response = await request.put(`https://restful-booker.herokuapp.com/booking/${bookingId}`, {headers : {'Content-Type':'application/json', 'Cookie' : `token=${token}`, 'Accept':'application/json'},data : bookingDetails})
    const responseJson = await response.json()
    console.log('Response is : ' + JSON.stringify(responseJson, null, 2))  //if no null,2 then will print it in single line.   
    console.log('StatusCode is : ' +response.status())
    expect(responseJson.firstname).toBe(bookingDetails.firstname)
    expect(response.status()).toBe(200)
    expect(responseJson.bookingdates.checkin).not.toBeNull()


    /* 
    JSON.stringify(value, replacer, space);

    value	   responseJson	   The object you want to convert
    replacer   null	           No custom filtering or transformation
    space	   2	           Two spaces of indentation per nesting level*/
})