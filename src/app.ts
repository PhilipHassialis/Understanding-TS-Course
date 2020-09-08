let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "shit";

//  userName = userInput; error cannot assign unknown to string
if (typeof (userInput) === 'string') {
    userName = userInput;  // is okay, we checked for type
}

function generateError(message: string, code: number): never {  // it never will return anything
    throw {
        message: message,
        errorCode: code
    }
}

generateError("Bad server", 500);

