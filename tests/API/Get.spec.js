import {test, expect} from '@playwright/test';

test('Get API Test', async ({request}) => {  //request is a built-in fixture in playwright which is used to make API calls
    //get method
    const response = await request.get('https://jsonplaceholder.typicode.com/posts/1'); 

    //console.log(response);
    const responseJson = await response.json();

    //console.log(responseJson);
    const statusCode = response.status();

    console.log(statusCode);

    const statusText = response.statusText();

    console.log(statusText);
    
    //Assertions
    expect(statusCode).toBe(200);  //toBe
    expect(statusText).toBe('OK');
    expect(response.ok()).toBeTruthy() //toBeTruthy
    expect(responseJson).toHaveProperty("userId",1)  //toHaveProperty = key and value pair need to mention here with comma separation
    expect(responseJson.body).toContain('quia et suscipit') //toContain
})