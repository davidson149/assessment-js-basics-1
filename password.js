const readline = require('readline');
const { ReadableStreamBYOBRequest } = require('stream/web');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
}); 
var password =[]
console.log('Welcome to the password validator tool!')

reader.question("What is your password?", function(password){
console.log('Please enter' + password);
reader.close();

console.log('password',password);

if (password >=10){
      console.log ('welcome in');
} if (password<10) {
    console.log('password not long enough');
}
});