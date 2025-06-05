class Utils {
    generateEmails (){
        const timestamp = new Date().getTime();
        const newEmail = `testuser${timestamp}@gmail.com`;
        return newEmail;
    }


}

module.exports = new Utils();