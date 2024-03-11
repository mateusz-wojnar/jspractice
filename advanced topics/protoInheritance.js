// //creating own prototypical inheritance

// function Shape(color) {
//   this.color = color;

//   Shape.prototype.draw = function () {
//     console.log("draw");
//   };
// }

// // intermediate function inheritance
// function extend(Child, Parent) {
//   Child.prototype = Object.create(Parent.prototype);
//   Child.prototype.constructor = Child;
// }

// function Circle(radius, color) {
//   // CALLING THE SUPER CONSTRUCTOR
//   Shape.call(this, color);

//   this.radius = radius;
// }

// extend(Circle, Shape)


// Circle.prototype.duplicate = function () {
//   console.log("duplicate");
// };

// function Square(size) {
//   this.size = size;
// }

// extend(Square,Shape)

// const s = new Shape();
// const c = new Circle(1, "red");

// //resetting the constructor

// //this resets the prototype of circle -> no longer has constructor
// //we can no longer create Circle objects
// // Circle.prototype = Object.create(Shape.prototype);

// // best practise - whenere you reset prototype, reset the constructor also
// // Circle.prototype.constructor = Circle


//uncomment above


//Method overriding and POLYMORPHISM

function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Shape() {

}

Shape.prototype.duplicate = function() {
  console.log("duplicate");
};

function Circle() {

}

extend(Circle, Shape)

//override duplicate from shape to circle
Circle.prototype.duplicate = function() {
    //outputs both methods, duplicate from shape and circle
    //Shape.prototype.duplicate.call(this)
    console.log("duplicate circle");
};

function Square() {

}


extend(Square,Shape)

Square.prototype.duplicate = function() {
    console.log("duplicate square");
};

const shapes = [
    new Circle(),
    new Square()
]

// POLYMORHPISM - duplicate method will be different based of type of shape
for (let shape of shapes) {
    shape.duplicate()
}




//when to use iheritance ?
// avoid creating iheritance hierarchies, DO NOT GO MORE THAN ONE LEVEL OF HIERARCHY
// animal - parent
// person, dog - child of animal - eat(), walk()
// when u add new animal such as goldfish - hierarchy broken, cant walk(), only swim()
// iheritance or COMPOSITION ?




//composition - js mixins

const canEat = {
    eat: function() {
        this.hunger--
        console.log('eating')
    }
}

const canWalk = {
    walk: function() {
        console.log('walking')
    }
}

const canSwim = {
    swim: function() {
        console.log('swimming')
    }
}

//ES6 new method
// Object.assign({}, canEat, canWalkm ...other objects to mix in)

function Person() {

}


Object.assign(Person.prototype, canEat, canWalk) //copy all properties and methods of given objects

const person = new Person()
console.log(person)

function Goldfish() {

}

Object.assign(Goldfish.prototype, canEat, canSwim)

const fish = new Goldfish()
console.log(fish)


// general mixin function

function mixin(target, ...sources) { // ... rest operator
    Object.assign(target, ...sources) // ... spread operator
}

mixin(Person.prototype, canEat, canWalk)
mixin(Goldfish.prototype, canEat, canSwim)

//same as above object Assing 