// UNKNOWN TYPE

let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';

if (typeof userInput === 'string') {
  userName = userInput;
}

// NEVER

const generateError = (message: string, code: number): never => {
  throw { message, errorCode: code };
};

// const result = generateError('An error occurred', 500);

// console.log(result);
console.log('hello');
