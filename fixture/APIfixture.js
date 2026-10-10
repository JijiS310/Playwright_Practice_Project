import {test as base} from '@playwright/test'

export const test = base.extend({
    token : async ({request}, use) =>{

            const authResponse = await request.post('https://restful-booker.herokuapp.com/auth', 
                {data: {
                    username: 'admin',
                    password: 'password123'
                    }}
        )
        const authBody = await authResponse.json()
        const token = authBody.token
        await use(token)
        },
    
    bookingId : async ({request}, use) => {
        const bookingData = {
            "firstname" : "Jim",
            "lastname" : "Brown",
            "totalprice" : 111,
            "depositpaid" : true,
            "bookingdates" : {
                "checkin" : "2018-01-01",
                "checkout" : "2019-01-01"
            },
            "additionalneeds" : "Breakfast"
        }
    const createBookingResponse = await request.post('https://restful-booker.herokuapp.com/booking',{headers : {'Content-Type':'application/json'}, data : bookingData})
    const createResponse = await createBookingResponse.json()
    const bookingId = createResponse.bookingid
    await use(bookingId)
    }
})
export {expect} from '@playwright/test'