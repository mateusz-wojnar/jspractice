// inheritance - take on properties and methods of another objects

// PROTOTYPE - parent of another object

//referencing to object base prototype
let x = {};
let y = {};

//prototypical inheritance
console.log(Object.getPrototypeOf(x));
console.log(Object.getPrototypeOf(y));

console.log(Object.getPrototypeOf(x) === Object.getPrototypeOf(y));

//multilevel inheritance

let myArray = [];

console.log(myArray);

// objects created by a given constructor will have the same prototype
// similarly - all arrays created by array constructor will have same prototype

// newCircle object -> has protottype of Circle -> Circle has ptortotype of Object
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const newCircle = new Circle(10);

console.log(newCircle);

//property descriptors

let person = { name: "Mati" };

console.log(person);

let objectBase = Object.getPrototypeOf(person);
let descriptor = Object.getOwnPropertyDescriptor(objectBase, "toString");
console.log(descriptor); // ->>
// value: f toString()
// configurable: true - means we can delete this member if we want to
// enumerable: false - when iterating on person Objects, we can't see its prototype methods
// writable: true - we can overwrite the method

Object.defineProperty(person, "name", {
  writable: false, // person Object property "name" becomes readonly
  enumerable: false,
  configurable: true,
});

person.name = "Kasia";
console.log(person); // did not change - value stayed, because writable: false
console.log(Object.keys(person)); // person Object property "name" is no longer -
// - visible as Object property because enumerable: false

// BY DEFUALT - ALL THESE PROPERTIES ARE TRUE (WRITABLE, CONFIGURABLE, ENUMERABLE)

//constructor prototypes

Circle.prototype;
// ===
Object.getPrototypeOf(newCircle);

let array = [];
console.log(array.__proto__); // all the methods that can be ussed on arrays
console.log(Array.prototype); // same as above

//prototype vs instance members

function Circle2(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const c1 = new Circle2(1);
const c2 = new Circle2(2);
// 2 instances of Circle2 objects - 2 instances of draw() method
// not good if we have thousands of obj instances

console.log(Circle2.prototype === c1.__proto__); // true

function CircleWithoutDraw(radius) {
  // Instance member
  this.radius = radius;

  this.move = function() {
    // this.draw() - instance members can acces prototype members and vice vers
    console.log('move')
  }
}

// Prototype member
CircleWithoutDraw.prototype.draw = function () {
  console.log("draw");
  this.move()
}; // outputs draw nad move as separate console logs, move as instance member is accessed


const c3 = new CircleWithoutDraw(1);
const c4 = new CircleWithoutDraw(2);

console.log(c3); // draw() method is now in prototype
// we can have thusands of CircleWithoutDraw objects but draw() method
//in only defined once in prototype of CircleWithoutDraw

c3.draw(); // still works

CircleWithoutDraw.prototype.toString = function() {
    return "Circle with radius of " + this.radius
}

console.log(c3.toString()) // Circle with radius of 1



// iterating instance and property members

// Returns ONLY instance members
console.log(Object.keys(c3)) // ['radius', 'move']

// Returns ALL members - instance and prototype
for (let key in c3) console.log(key)

//usefull method to check if obj has 'own' property (instance property)
console.log(c3.hasOwnProperty('radius')) //true
console.log(c3.hasOwnProperty('draw')) //false



//AVOID EXTENDING THE BUILT IN OBJECTS SUCH AS ARRAY
//DO NOT DO THIS

// Array.prototype.shuffle = function() {
//     //...
// }

// const array1 = []
// array.shuffle()