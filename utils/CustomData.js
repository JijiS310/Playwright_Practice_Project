import test from "@playwright/test"  
exports.customTest = test.extend({         //customTest is name given by us
    loginData1: {                          //object loginData created for use as custom fixture
        username   :"standard_user",
        password   : "secret_sauce"
    }
 
})