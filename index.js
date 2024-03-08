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

let arrayNum = [3, 4];

//add at end
arrayNum.push(5, 6);

//add at beginning
arrayNum.unshift(1, 2);

//add at end
arrayNum.splice(2, 0, "a", "b");

//finding elements - primitives

arrayNum = [1, 1, 2, 3, 4, 1];

arrayNum.indexOf("2");

arrayNum.lastIndexOf(1);

//if element is present in array
arrayNum.includes(1);

//finding elements - reference

let courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
  { id: 3, name: "c" },
];

let findCourse = courses.find(function (course) {
  //callback function
  return course.name === "a";
});

const findCourseIndex = courses.findIndex(function (course) {
  //callback function
  return course.name === "a";
});

//ARROW FUNCTIONS - used when passing a function to a method or different function as callback

findCourse = courses.find(() => {
  return courses.name === "a";
});

//or

findCourse = courses.find((course) => course.name === "a");

//removing elements

let numbers2 = [1, 2, 3, 4, 5];

//remove from the end
numbers2.pop();

//remove from beginning
numbers2.shift();

//remove from middle
numbers2.splice(2, 2);

//emptying an array

//sol1 - doesn't work if have multiple refs to an array
numbers2 = [];

//sol2 - best
numbers2.length = 0;

//sol3
numbers2.splice(0, numbers2.length);

//sol4 - BAD
while (numbers2.length > 0) {
  numbers2.pop();
}

//combining and slicing arrays

//if primitive - copied by value
//if reference - copied by reference

const arr1 = [{ id: 1 }];
const arr2 = [4, 5, 6];

//combining
const arrCombined = arr1.concat(arr2);
arr1[0].id = 10;

//slicing
const sliced = arrCombined.slice();

//ES6 recomended method - spread operartor '...'

const combined = [...arr1, "a", ...arr2, null];

const copy = [...combined];

//iterating an array

for (let number of arr2) console.log(number);

arr2.forEach((number, index) => console.log(index, number)); //optionally callback functino takes an index

//joining arrays

let joined = arr2.join(",");

message = "This is my first message";
let parts = message.split(" ");
parts = parts.join("-");

//sorting arrays

let nums = [2, 3, 1];
nums.sort();
nums.reverse();

//sorting objects
courses = [
  { id: 1, name: "Node" },
  { id: 2, name: "React" },
  { id: 3, name: "javaScript" },
];

courses.sort((a, b) => {
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();
  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
});

//testing elements of an array

nums = [1, 2, -1, 3];

let allPositive = nums.every((value) => {
  return value >= 0;
});

let atLeastOnePositive = nums.some((value) => {
  return value >= 0;
});

console.log(allPositive);
console.log(atLeastOnePositive);

//filtering an array

nums = [1, -1, 2, 3];

let newFilteredArray = nums.filter((num) => num >= 0); //get num where num is >= 0 and put in new array

console.log(newFilteredArray);

//mapping an array

let numList = newFilteredArray.map((n) => `<li>${n}</li>`);

//let html = `<ul>${numList.join("")}</ul>`
//console.log(html);

let numObjects = newFilteredArray.map((n) => ({ value: n }));

console.log(numObjects);

//MAP AND FILTER RETURN NEW ARRAY, THEY DO NOT MODIFY THE OG ARRAY

nums = [1, -1, 2, 3];

let chained = nums
  .filter((n) => n >= 0)
  .map((n) => ({ value: n }))
  .filter((obj) => obj.value > 1)
  .map((obj) => obj.value); //same result, we can chain map and filter

console.log(chained);

//reducing an array

nums = [1, -1, 2, 3];

let summ = 0;
for (let n of nums) {
  summ += n;
}

console.log(summ);

//reduce ana array to single value
//a = 0, c = 1 => a = 1
//a = 1, c = -1 => a = 0
//a = 0, c = 2  => a = 2
//a = 2, c = 3 => a = 5 <- result
summ = nums.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(summ);

//arr exercise 1

function arrayFromRange(min, max) {
  const output = [];
  for (let i = min; i <= max; i++) {
    output.push(i);
  }
  return output;
}

console.log(arrayFromRange(-5, 12));

//arr exercise 2 - include

function includes(array, searchElement) {
  for (let element of array) {
    if (element === searchElement) {
      return true;
    }
  }
  return false;
}

nums = [1, -1, 2, 3];
console.log(includes(nums, 4));

//arr exercise 3 - exclude

function except(array, excluded) {
  const output = [];
  for (let element of array) {
    if (!excluded.includes(element)) {
      output.push(element);
    }
  }
  return output;
}

console.log(except(nums, [1, -1]));

//arr exercise 4 - move

nums = [1, 2, 3, 4];

function move(array, index, offset) {
  const position = index + offset;
  if (position >= array.length || position < 0) {
    console.error("invalid offset");
    return;
  }

  const output = [...array];
  const element = output.splice(index, 1)[0];
  output.splice(position, 0, element);
  return output;
}

console.log(move(nums, 1, -1));

//arr exercise 5 - get max

nums = [1, 2, 3, 4, 99];

function getMax(array) {
  if (array.length === 0) return undefined;

  return array.reduce((accumulator, current) =>
    current > accumulator ? current : accumulator
  );
}

console.log(getMax(nums));

//arr exercise 6

const movies = [
  { title: "a", year: 2018, rating: 4.5 },
  { title: "b", year: 2018, rating: 4.7 },
  { title: "c", year: 2018, rating: 3 },
  { title: "d", year: 2017, rating: 4.5 },
];

const titles = movies
  .filter((m) => m.year === 2018 && m.rating >= 4)
  .sort((a, b) => a.rating - b.rating)
  .reverse()
  .map((m) => m.title);

console.log(titles);

// FUNCTIONS

//function declaration vs expressions

//declaration
function walk() {
  console.log("walk");
}

// anonymous funcs expression

let run = function () {
  console.log("run");
};

//named func expression
// run = function walk() {
//   console.log('run')
// };

let go = run;

run();
go();

//HOISTING - moves declarations to the top of the scope

//declarated func can be hoisted - called before declaration ->

walkHoist();

function walkHoist() {
  console.log("walk");
}

//func expression cannot be called before delcaration

//runHoist() - referenceError - cannot access

const runHoist = function () {
  console.log("run");
};

//arguments

function sum() {
  let total = 0;
  for (let value of arguments) total += value;

  return total;
}

console.log(sum(1, 23, 4, 5, 6));

//rest operator '...' - same as spread but with
//a parameter of function its called rest operator

function sum(discount, ...prices) {
  const total = prices.reduce((a, b) => a + b, 0);
  return total * (1 - discount);
}

console.log(sum(0.1, 20, 30));

//default parameters

function interest1(principal, rate = 3.5, years = 5) {
  // rate = rate || 3.5; -> old way
  // years = years || 5; -> old way

  return ((principal * rate) / 100) * years;
}

console.log(interest1(10000));

function interest(principal, rate = 3.5, years) {
  // rate = rate || 3.5; -> old way
  // years = years || 5; -> old way

  return ((principal * rate) / 100) * years;
}

console.log(interest(10000, undefined, 5));

//getters and setters

person = {
  firstName: "Mati",
  lastName: "Wojnar",
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
  set fullName(value) {
    const parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

//getters - acces properties
//setters - change/mutate properties

person.fullName = "Kasia Chucher";

console.log(person);

//error handling

person = {
  firstName: "Mati",
  lastName: "Wojnar",
  set fullName(value) {
    if (typeof value !== "string") {
      throw new Error("Value is not a string");
    }

    const parts = value.split(" ");
    if (parts.length !== 2) {
      throw new Error("Enter first and last name");
    }

    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

try {
  person.fullName = "null nullok";
} catch (e) {
  console.log(e);
}

//scope - global and local
// local variables are more important than global variables

//let vs var

//var -> function scoped
//let, const -> block-scoped

function start() {
  for (var uu = 0; uu < 5; uu++) console.log(uu);
  console.log(uu);
}

start();

var kolor = "red";
console.log(window.kolor); // -> red

let kkolor = "blue";
console.log(window.kkolor); // -> undefined

//avoid using var, creates problems, creates variables that are function scoped

//this keyword - REFERENCES THE OBJECT
//THAT IS EXECUTING THE CURRENT FUNCTION

//METHOD (FUNCTION THAT IS A PART OF FUNCTION) -> THIS REFERENCES OBJECT ITSELF
//FUNCTION (NOT PART OF OBJECT) - > THIS REFERENCES GLOBAL (WINDOW, GLOBAL)

let video = {
  title: "a",
  play() {
    console.log(this);
  },
};

video.stop = function () {
  console.log(this);
};

video.play(); // -> object {title: a, play: function}
video.stop(); // -> object {title: a, play: function}

//

function playVideo() {
  console.log(this);
}

playVideo(); // -> window object

//

function Video(title) {
  this.title = title;
  console.log(this);
}

//because 'new' creates a empty object, this keyword references the object, not window
const v = new Video("a"); // -> object Video {title: 'a'}

//THIS GETS THE CURRENT OBJECT

video = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach(function (tag) {
      console.log(this.title, tag);
    }, this); // withut thisArg, the this in line above would reference window, becauce function(tag) is normal function thus this references window
  },
};

video.showTags(); // -> a b c

//CHANGING THIS

//do not use this approach, but it exists and works
video = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    const self = this;
    this.tags.forEach(function (tag) {
      console.log(self.title, tag);
    });
  },
};

video.showTags();

function playVideo2(a, b) {
  console.log(this);
}

playVideo.call({ name: "Mati" }); // -> object {name: 'Mati'}
playVideo(); // -> window object

playVideo.apply({ name: "Mati" }); // -> object {name: 'Mati'}

//diffrence between call and apply - only in passing the arguments
playVideo.call({ name: "Mati" }, 1, 2); // -> object {name: 'Mati'}

playVideo.apply({ name: "Mati" }, [1, 2]);

// bind does not call the function, it creates new function and points this to the passed object ALWAYS
playVideo.bind({ name: "Mati" })(); // object {name: 'Mati'}

//call apply and bind - set the 'this' argument for given function

// second solution, still not the best
video = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach(
      function (tag) {
        console.log(this.title, tag);
      }.bind(this)
    );
  },
};

video.showTags();

// third solution - best since ES6 ES2015
video = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach((tag) => {
      //using arrow function here allow this to still reference the current object
      console.log(this.title, tag);
    });
  },
};

video.showTags();
