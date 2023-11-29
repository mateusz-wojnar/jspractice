// Variables
let name = "masno"; // string literal
let age = 30; // number literal
let isApproved = true; // boolean literal
let firstName;
let lastName = null;

console.log(name, age, isApproved);

//Dynamic Typing - can dynamically changed variable type

let dt = "Hi";
console.log(dt);
dt = 60;
console.log(dt);

// Objects

let person = {
  imie: "Mati",
  wiek: 23,
}; // object literal

//Dot notation
person.imie = "Adam";

//Bracket notation
let selection = "imie";
person[selection] = "Jan";

console.log(person.imie);

//
//Arrays
let selectedColors = ["red", 390];
selectedColors[2] = false;
console.log(selectedColors.length);

//
//Functions

//Perforimg task
function greet(name, lastName) {
  console.log("Hejka " + name + " " + lastName);
}

greet("Jarek", "Kowalski");

//calculating value
function square(number) {
  return number * number;
}

console.log(square(4));

//
// Operators
let x = 10;
let y = 3;

// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y);
// console.log(x ** y);
// -- ++

// Assignement operators

x = x + 5;
x += 5;

x = x * 3;
x *= 3;

// Comaprison Operators
console.log(x);
console.log(x > 0);
console.log(x >= 180);
console.log(x < 1);
console.log(x <= 1);

// Equality operators
// Strict - same type and same value
console.log(x === "180");

// loose eqality - same value, not same type
console.log(x == "180");

//Conditional (Ternary) operator
let points = 99;
let type = points > 100 ? "gold" : "silver";
console.log(type);

//Logical operators
// AND &&
// OR ||
// NOT !

console.log(true && false);

//Logical operators can be used with non-bools

console.log(false || "hejka");
console.log("witam" || "hejka");
console.log(false || 5 || 10); // output = 1 - short-circuiting

// Falsy values  - undefined, null, 0, false, '', NaN

//Bitwise operators
console.log(1 | 2); // bitwise OR
console.log(1 & 2); // bitwise AND

// Read write execute
// 00000100 - read
// 00000010 - write
// 00000001 - execute
// etc

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;
let myPermission = 0;
myPermission = myPermission | executePermission | writePermission;
console.log(myPermission);

let message = myPermission & readPermission ? "yes" : "no";
console.log(message);

// Precendece of operators

x = (2 + 3) * 4;
console.log(x);

// Exercise
let a = "red";
let b = "blue";

console.log(a);
console.log(b);

function swap(a, b) {
  let c = a;
  a = b;
  b = c;
  return [a, b];
}

console.log(swap(a, b));
