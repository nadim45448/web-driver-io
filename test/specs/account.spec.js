const account = require('../pages/account');
const utils = require ('../../utils/utils')

const fullName = "Test User";
// const email = "testUser01@gmail.com";
let email = "";
const password = "123456";

describe("Evershop Account activity test", ()=>{

    it("Regsitration with valid information", async ()=>{
        email = utils.generateEmails();
        await account.register(fullName, email, password);

    });

    it("Login with valid credential", async ()=>{
        await account.login(email, password);
        
    });


})

// npm run wdio