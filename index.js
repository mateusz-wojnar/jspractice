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








//CONTROL FLOW

//conditions

var role = "guest";

switch (role) {
  case "guest":
    console.log("guest user");
    break;

  case "admin":
    console.log("admi user");
    break;

  default:
    console.log("unknown user");
}

role = "guest";

//loops

for (let i = 0; i < 5; i++) {
  role += 5 * i;
  console.log(role);
}

let i = 0;
while (i <= 5) {
  if (i % 2 !== 0) {
    console.log(i);
  }
  i++;
}

//do-while - RUNS ATLEAST ONCE
i = 9;

do {
  if (i % 2 !== 0) {
    console.log(i);
  }
  i++;
} while (i <= 5);

//object /array iterators - FOR IN, FOR OF

const human = {
  name: "Mati",
  age: "23",
};

for (let key in human) {
  console.log(key, human[key]);
}

const colors = ["red", "green", "blue"];

//for in is not recommender for arrays since ES6
for (let index in colors) {
  console.log(index, colors[index]);
}

//for of

for (let color of colors) {
  console.log(color);
}

//break and continue, (continue not used much)

i = 0;
while (i <= 10) {
  if (i === 5) break;
  if (i % 2 === 0) {
    i++;
    continue;
  }
  console.log(i);
  i++;
}

//exercises
//max of two numbers

function maxTwo(a, b) {
  return a >= b ? a : b;
}

console.log(maxTwo("17", 18));

function isLandscape(width, height) {
  return width > height;
}

console.log(isLandscape(100, 100));

//fizzbuzz - divisible by 3,5, 3 and 5

function fizzBuzz(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return "fizzbuzz";
  } else if (number % 3 === 0) {
    return "fizz";
  } else if (number % 5 === 0) {
    return "buzz";
  } else if (typeof number !== "number") {
    return NaN;
  }
  return number;
}

console.log(fizzBuzz(false));

//speed limit

function checkSpeed(speed) {
  const speedLimit = 70;
  const speedPenalty = 5;
  if (speed < speedLimit + speedPenalty) {
    return "ok";
  } else {
    const points = Math.floor((speed - speedLimit) / speedPenalty);
    if (points >= 12) {
      return "license suspended";
    } else {
      return points;
    }
  }
}

console.log(checkSpeed(125));

//truthy and falsy
// Falsy - undefined, null, "", false, 0, NaN

const array = [0, null, undefined, "", 2, 3, NaN];

function truthy(array) {
  let counter = 0;
  for (let obj of array) {
    if (obj) counter++;
  }
  return counter;
}

console.log(truthy(array));

//string properties

const movie = {
  title: "title",
  releaseYear: 2018,
  rating: 5.5,
  director: "kasiok",
};

showProps(movie);

function showProps(movie) {
  for (let key in movie) {
    if (typeof movie[key] == "string") console.log(key, movie[key]);
  }
}

//multiples of 3 and 5

function sum(limit) {
  let sumValue = 0;

  for (let i = 0; i <= limit; i++) {
    if (i % 3 === 0) {
      sumValue += i;
    }
    if (i % 5 === 0) {
      sumValue += i;
    }
  }

  return sumValue;
}

console.log(sum(10));

//stars



function showStars(rowNumber) {
  for (let row = 1; row <= rowNumber; row++) {
    let pattern = "";
    for (let j = 0; j < row; j++) {
      pattern+="*";
    }
    console.log(pattern);
  }
}

showStars(5);






// OBJECTS
//oop

const circle = {
  radius: 2,
  location: {
    x: 1,
    y: 1,
  },
  isVisible: true,
  draw: function() {  //METHOD
    console.log("x+y")
  }
}

circle.draw()

// factory functions