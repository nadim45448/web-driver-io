const accountLocator = require('../locators/accountLocator');

class Account{
    async clickAccountIcon(){
        
        // await accountLocator.accountIcon.waitForDisplayed({ timeout: 2000 });
        await accountLocator.accountIcon.waitForClickable({ timeout: 2000 });
        await accountLocator.accountIcon.click();
    }

    async enterEmail(email){
        await accountLocator.email.setValue(email);
    }
    async enterPassword(password){
        await accountLocator.password.setValue(password);
    }

    async clickCreateAccount(){
        await accountLocator.createAccount.click();
    }

    async enterFullName(fullName){
        await accountLocator.fullName.setValue(fullName);
    }  
    
    async clickSigninButton(){
        await accountLocator.buttonSignin.click();
    }

    async clickSignupButton(){
        await accountLocator.buttonSignup.click();
    }

    // sign in
    async login(email, password){
        await this.clickAccountIcon();
        await this.enterEmail(email);
        await this.enterPassword(password);
        await this.clickSigninButton();
    }

    // sign up
    async register(fullName, email, password){
         await this.clickAccountIcon();
        await this.clickCreateAccount();
        await this.enterFullName(fullName);
        await this.enterEmail(email);
        await this.enterPassword(password);
        await this.clickSignupButton();
    }

}
module.exports = new Account();