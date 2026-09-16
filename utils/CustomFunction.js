import test from "@playwright/test"  
exports.myTest = test.extend({
    userDetail:async({},use)=>{            //use = callback function - inbuild playwright callback function for passing custom fixture
        await use([
            {
            username:"standard_user",
            password: "secret_sauce"
        },{
            username:"locked_out_user",
            password:"secret_sauce"
        }])
    }
    
})