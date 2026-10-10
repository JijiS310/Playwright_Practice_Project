import {test,expect} from '../../fixture/APIfixture.js'
test('Patch Partial update Booking', async ({request,token,bookingId}) => {
    const updateDetails = {
    "firstname" : "Jiji",
    "lastname" : "Rej"
}
    const response = await request.patch(`https://restful-booker.herokuapp.com/booking/${bookingId}`, {headers : {'Content-Type':'application/json', 'Cookie' : `token=${token}`, 'Accept':'application/json'},data : updateDetails})
    const statusCode = await response.status()
    const responseJson = await response.json()
    console.log(statusCode)
    console.log(responseJson)
    expect(responseJson.firstname).toBe(updateDetails.firstname)
    expect(responseJson.lastname).toBe(updateDetails.lastname)
    expect(statusCode).not.toBeNull()

})