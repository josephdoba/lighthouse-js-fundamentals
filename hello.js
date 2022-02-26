/* Console.logging is different to Returning values from functions: 

const sayHello  = function (name) {
  console.log("Hello, " + name);
}

sayHello("Joba");
*/
// Returning values:
const returnSayHello  = function (name) {
  return("Hello, " + name);
}

const greeting = returnSayHello('Joba');
console.log(greeting);