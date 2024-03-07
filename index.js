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
      pattern += "*";
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
  draw: function () {
    //METHOD
    console.log("x+y");
  },
};

circle.draw();

// factory functions

function createCircle(radius) {
  return {
    radius, // = radius: radius,

    draw() {
      console.log("draw");
    },
  };
}

const circle1 = createCircle(1);
console.log(circle1);

// constructor functions - PASCAL NOTATION

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle2 = new Circle(1);
console.log(circle2);

//dynamic nature of objects

const circlee = {
  radius: 1,
};

circlee.color = "yellow";
circlee.draw = function () {};

delete circlee.color;

console.log(circlee);

// constructor property

let obj = {}; // let obj = new Object();

console.log(obj.constructor);

//every object has a constructor property that references the function
//that was used to create a object

//FUNCTIONS ARE OBJECTS

function Circle2(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const another = new Circle2(2);
console.log(Circle.name);
console.log(Circle.constructor);

//call, apply, bind -> assings objects to the "this" keyword

Circle2.call({}, 3); // 'this' references the {}
Circle2.apply({}, [1, 2, 3]);

//values vs reference types
//values - Number, String, Boolean, Symbol, undefined, null -> primitves
//Reference - Object, Function, Array -> objects

//independent, "copied"
let k = 10;
let n = k;

k = 20;

console.log(k, n);

//referenced
k = { value: 10 };
n = k;

k.value = 10;

console.log(k, n);

number = 10;

function increase(number) {
  number++; //local, indepented from variable outside the scope
}

increase(number);
console.log(number);

obj = { value: 10 };

function increase(obj) {
  obj.value++; //not independet, references same object
}

increase(obj);
console.log(obj);

//enumerating properties of an object

for (let key in circle1) {
  console.log(key, circle[key]);
}

//OBJECT IS NOT ITERABLE - cannot use for of but:

for (let key of Object.keys(circle1)) {
  console.log(key);
}

for (let entry of Object.entries(circle1)) {
  console.log(entry);
}

"color" in circle1 ? console.log("yes") : console.log("no");

//Cloning objects

// OLD
// const cloneCircle = {}

// for (let key in circle1) {
//   cloneCircle[key] = circle1[key]
// }

const cloneCircle = Object.assign(
  {
    //assing copies properties from one or more sources (objects)
    color: "yellow",
  },
  circle1
);

const cloneCircle2 = { ...circle1 }; // ... - spread operator - gets all properties and methos of an object

console.log(cloneCircle);
console.log(cloneCircle2);

//javascript has GARBAGE COLLECTOR, do not worry about memory allocation

//string object

//String primitve
let message2 = "This is a message";

//string object
const stringObj = new String("hi");

console.log(typeof message2);
console.log(typeof stringObj);

console.log(message2.length);
console.log(message2[2]);
console.log(message2.includes("This"));

//template literals - `` - backtick

message2 = `This is my
'first' message ${stringObj}`;

console.log(message2);

//date object

const now = new Date();
const date1 = new Date("May 11 2018 09:00");
const date2 = new Date(2018, 0, 11, 9, 0);

console.log(now.getFullYear);
console.log(date2);









// ARRAYS