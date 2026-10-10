import {test,expect} from '../../fixture/APIfixture.js'
test('Delete Booking', async({request,token,bookingId}) => {


    const response = await request.delete(`https://restful-booker.herokuapp.com/booking/${bookingId}`, {headers :  {'Content-Type':'application/json', 'Cookie' : `token=${token}`}})
    const statusCode =  response.status()
    console.log(statusCode)
    console.log(await response.text())
    expect(statusCode).toBe(201)
})