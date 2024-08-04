export class BrowserUtility {

    static async sleep(seconds){
        await new Promise((resolve) => setTimeout(resolve, seconds * 1000));
    }

    //create a function that can verify expected and actual messages are equal used promises
     static async verifyEqualMessages(expectedMessage, actualMessage){
        return new Promise((resolve, reject) => {
            if(expectedMessage === actualMessage){
                resolve();
            }else{
                reject(`Expected: ${expectedMessage}, Actual: ${actualMessage}`);
            }
        });
    }
    //create a function that can verify expected and actual messages are equal used promises
      static async verifyMessages(expectedMessage, actualMessage){
        return new Promise((resolve, reject) => {
            if(expectedMessage === actualMessage){
                resolve();
            } else{
                reject(new Error(`Expected: ${expectedMessage}, Actual: ${actualMessage}`));
            }
        });
    }


    // ADD YOUR OWN BROWSER UTILITY FUNCTIONS HERE...
    

}