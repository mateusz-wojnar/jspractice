// classes in es6 are just syntactical sugar over proto iheritance

// function Circle(radius) {
//     this.radius = radius;

//     this.draw = function() {
//         console.log("draw")
//     }
// }

class Circle {
  constructor(radius) {
    this.radius = radius;
    //methos ends up in Circle object
    this.move = function () {};
  }

  //method ends up in prototype
  draw() {
    console.log("draw");
  }
}

const c = new Circle(2);

//
//Hoisting
//

// Function Declaration - THEY ARE HOISTED TO THE TOP
sayHello(); // works

function sayHello() {}

// Function Expression - THEY ARE NOT HOISTED
// sayGoodbay(); // Error, cannot access sayGoodbay
// console.log(number); // Error, cannot access number

const sayGoodbay = function () {};
const number = 1;

//Class delcaration - THEY ARE NOT  HOISTED, UNLIKE FUNCTION DELCARATION
// const circle2 = new Circle2(2); // Error, cannot acces

class Circle2 {}

//Class expression
const Square = class {};

//
//Static methods
//

class Circle3 {
  constructor(radius) {
    this.radius = radius;
  }

  // Instance method
  draw() {}

  // Static method - no longer available on Circle3 object, works on Class Circle3
  static parse(str) {
    const radius = JSON.parse(str).radius;
    return new Circle3(radius);
  }
}

const circle3 = new Circle3(2);
console.log(circle3);
const circle3b = Circle3.parse('{"radius": 1}'); // Static method
console.log(circle3b);

// another example of static methods
class Math2 {
  static abs(value) {
    console.log("abs");
  }
}

Math2.abs();

//
// This keyword
//

const Circle4 = function () {
  this.draw = function () {
    console.log(this);
  };
};

const circle4 = new Circle4();

// method call
circle4.draw();

//reference to the method
const draw = circle4.draw;

console.log(draw); // outputs draw function syntax from Circle4 function

// function call, not part of object
// when strict mod enabled - returns undefined - prevents modyfing the window/global object
// when normal mode enabled - points to window object
draw();

class Circle4Class {
  draw() {
    console.log(this);
  }
}

const circle4b = new Circle4Class();
const drawClass = circle4b.draw;

// return undefine in normal and in strict mode
drawClass();

//
// Private members using Symbols
// Abstraction - hiding details, showing essential parts
//

// In es6 - new primitive type Symbol
console.log(Symbol() === Symbol()); // false
const _radius = Symbol(); // function, unique identifier
const _draw = Symbol(); // new unique identifier

class Circle5Class {
  constructor(radius) {
    //this.radius = radius;
    this[_radius] = radius; // this is now private, logging and instance of this object show Symbol() not radius
  }

  //computed property names, new in es6
  [_draw]() {}
}

const circle5 = new Circle5Class(2);
console.log(circle5);
console.log(Object.getOwnPropertyNames(circle5)); // return empty array, radius is not visible
console.log(Object.getOwnPropertySymbols(circle5)); // returns array of Symbols()
const key = Object.getOwnPropertySymbols(circle5)[0];
console.log(circle5[key]); // return radius value

//
// Private members using WeakMaps
//

//WeakMap is an dictionary where keys are objects and value can be anything
// Weak because - if no reference to key - key gets garbage collected
const _side = new WeakMap();
const _move = new WeakMap();

class Triangle {
  constructor(side) {
    //it is private, cannot acces outside class
    _side.set(this, side);

    // arrow function used to not rebound this keyword, otherwise it returned undefined
    _move.set(this, () => {
      console.log("move", this);
    });
  }

  show() {
    _move.get(this)();

    console.log("show");
  }
}

const t = new Triangle(5);
t.show(); // gets the side value

//
// Getters and setter
//

const _line = new WeakMap();

class Triangle2 {
  constructor(line) {
    _line.set(this, line);
  }

  get line() {
    return _line.get(this);
  }

  set line(value) {
    if (value <= 0) throw new Error("Invalid value");
    _line.set(this, value);
  }
}

const t2 = new Triangle2(2);
console.log(t2.line);
t2.line = 10;
console.log(t2.line);

//
// Inheritance
//

class Shape {
  constructor(color) {
    this.color = color;
  }
  move() {
    console.log("move");
  }
}

class Trapezoid extends Shape {
  constructor(color, radius) {
    super(color); // inherited color from shape class
    this.radius = radius; // trapezoid property
  }
  draw() {
    console.log("draw");
  }
}

const trapezoid = new Trapezoid("red", 5);
console.log(trapezoid);
console.log(trapezoid.draw());
console.log(trapezoid.move());

//
//Method overriding
//

class Shape2 {
  move() {
    console.log("move shape");
  }
}

class Trapezoid2 extends Shape2 {
  move() {
    console.log("move trapezoid");
    super.move(); // move shape
  }
}

const trapezoid2 = new Trapezoid2();

// Exercise - create class that behaves liek stack data structure

const _items = new WeakMap();

class Stack {
  constructor() {
    _items.set(this, []);
  }

  push(obj) {
    _items.get(this).push(obj);
  }

  pop() {
    const items = _items.get(this)
    if (items.length === 0) {
      throw new Error("Stack is empty");
    }

    return items.pop();
  }

  peek() {
    const items = _items.get(this)

    if (items.length === 0) {
        throw new Error("Stack is empty")
    }

    return items[items.length -1];
  }

  get count() {
    return _items.get(this).length;
  }
}
