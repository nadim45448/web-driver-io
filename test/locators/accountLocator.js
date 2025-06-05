class AccountLocator {

    // sign in locators
    get accountIcon(){
        return $("//a[contains (@href, 'account/login')]");
    }

    get email(){
        return $("//input[@name='email']");
    }

    get password(){
        return $("//input[@name='password']");
    }

    get buttonSignin(){
        return $("//button/span[contains(text(), 'SIGN IN')]");
    }

    get createAccount(){
        return $("//a[contains(@href, 'register')]");
    }

    // sign up locators
    get fullName(){
        return $("//input[@name='full_name']");
    }

    get buttonSignup(){
        return $("//button/span[contains(text(), 'SIGN UP')]");
    }

}

module.exports = new AccountLocator();