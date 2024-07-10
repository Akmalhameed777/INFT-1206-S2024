// console.log("Script is running...")
// Variables -> Containers for Data




// Primitive Data Types
// String
// Numbers
// Boolean (True or False)
// Null
// Undefined
// BigInt
// Symbol
// There are 4 ways we can declare a new variable. Let, Const, Var, and none

// Var is an old key\word that is no longer used commonly. It defines a variable in the current scope
// var introString = "Intro to JavaScript";
// Let is a more common keyword that behaves similar to var
// let number = 5;
// Const is used to declare a variable who's value connot be re-assigned (i.e. changed)
// const isJavaScriptFun = true;
// We can also omit all of these to declare a variable in the glogal scope
// SecondNumber = 10;

// isJavaScriptFun = false;

// console.log(isJavaScriptFun);

// ------------------------------

// String Methods - JavaScript comes with built-in string methods that 
// are availeble to us by default so that we can manipulate and wok with strings


// let food = "Tacos";

// console.log(food.toUpperCase()); // TACOS
// console.log(food.toLocaleLowerCase()); // tacos
// console.log(food[0] + food[1]); // The first two letters of Tacos
// console.log(food.concat(food)); // TacosTacos
// console.log(food.charAt(3)); // Returns character at index 
// // 3 of the string "Tacos" -> T -> 0, a -> 1, c -> 2, 0 -> 3
// console.Log (food.includes("co")); // True console. log food. replace("c" "k"); // Takos
// console.log(food.slice(0, 31)); // Ta - slicing the string from index 0 to index 3
// console.log(food.split("")); // ['T', 'a', 'c', 'o', 's']
// console.log(food.split("c")); // ['Ta', 'os']

// ---------------------------------------------------------

// Numbers on Operators

let a = 5;
let b = 10;

console.log(a + b); // 15
console.log(b - a); // 5
console.log(b / a); // 2
console.log(a * b); // 50
console.log(b % a); // % represents the remainder after division
// Math is a built-in Js object available for us to use when 
//needing to perform complex mathematical calculations
console.log(Math.sqrt(a + b)); // 3.87
console.log(Math.max(a, b)); // 10 (b)

let c = 7
let d = 12
let e = "12";

console.log(c == d) // returns False
console.log(d == e); // return True, Js does something called type coersion where it automatically
// converts the string to a number for the comparison operator - returns TRUE
console.log(d === e); // the triple in js compares the value and the type of the variable, whereas 
// the double == only compares value - returns FALSE
console.log(c > d); // returns FALSE
console.log(c < d); // returns TRUE
console.log(c != d); // return TRUE, The ! is called the NOT

console.log(a < b || c < d); // returns TRUE -> OR operator
console.log(a < b && c > d); // returns FALSE -> && and operator

// IF ELSE Conditions

let firstNumber = prompt("Please choose your first number:");
let operand = prompt("Please choose your operator from the following choices: '+', '-', '*', '/'")
let SecondNumber = prompt("Please choose your second number:");

// we are going to use the result from the user input via the prompt to build a mini calculator 
let result;

if (operand == "+") {
    result = firstNumber + SecondNumber;
} else if ( operand == "-") {
    result = firstNumber - SecondNumber;
} else if (operand == "*") {
  result = firstNumber * SecondNumber;
} else {
    result = firstNumber / SecondNumber;
}
