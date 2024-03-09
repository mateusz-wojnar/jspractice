//object literal //not a good way if object has atleast one method (behaviour)

const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function() {
        console.log('draw');
    }
}

circle.draw()



//factories - factory function

function createCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log("draw" + this.radius)
        }
    }
}

const circle2 = createCircle(1)
circle2.draw()



//constructor function

function Circle(radius) {
    console.log('this: ' + this)
    this.radius = radius;
    this.draw = function() {
        console.log("draw")
    }
}

const another = new Circle(1)
another.draw()



//constructor property

console.log(another.constructor)
console.log(circle2.constructor)

let x = {} //let x = new Object();



//FUNCTIONS ARE OBJECTS

console.log(Circle.name)
console.log(Circle.constructor)

Circle.call({},1)
// ===
const another1 = new Circle(1)

Circle.apply({}, [1,2,3])



//Values vs reference types
// PRIMITIVES -> COPIED BY VALUE
// OBJECTS -> COPIED BY REFERENCE

let number = {value: 10};

function increase(obj) {
    obj.value++
}

increase(number)
console.log(number)



//adding or removing properties

circle.location = {x: 1}
// ===
circle['location'] = {x: 1}

const propertyName = 'location'
circle[propertyName] = {x: 1}

//deleting

delete circle.location



//enumerating properties

for (let key in circle) {
    if (typeof circle[key] !== 'function') {
        console.log(key, circle[key])
    }
}

const keys = Object.keys(circle)
console.log(keys)

if ('radius' in circle) {
    console.log('circle has a radius')
}



// ABSTRACTION
// PRIVATE PROPERTIES AND METHODS

function Circle3(radius) {
    this.radius = radius;
    
    let defaultLocation = {x: 0, y: 0};

    let calcOptimalLocation = function(factor) {
        // ...
    }
    
    this.draw = function() {
        calcOptimalLocation(0.1);

        //defaultLocation
        //this.radius
        console.log('draw')
    }
}

const circleObj2 = new Circle3(10);

circleObj2.draw()
// circle. -> cannot acces props initialized with let -> private -> abstraction



//getters and setters
//Object.defineProperty

function Circle4(radius) {
    this.radius = radius;
    
    let defaultLocation = {x: 0, y: 0};

    
    this.draw = function() {
        console.log('draw')
    }

    Object.defineProperty(this, 'defaultLocation', {
        get: function() {
            return defaultLocation; //readonly
        },
        set: function(value) {
            if (!value.x || !value.y) {
                throw new Error('invalid location')
            }
            defaultLocation = value;
        }
    });
}

const circleObj4 = new Circle4(10);
circleObj4.draw()
console.log(circleObj4.defaultLocation)
circleObj4.defaultLocation = 1


//exercise - stopwatch

function Stopwatch(){
    let startTime, endTime, running, duration = 0

    this.start = function() {
        if(running) {
            throw new Error('stopwach is already running')
        }

        running = true;

        startTime = new Date()
    }

    this.stop = function() {
        if(!running) {
            throw new Error('stopwatch is already stopped')
        }

        running = false

        endTime = new Date()

        const seconds = (endTime.getTime() - startTime.getTime()) / 1000
        duration += seconds
    }

    this.reset = function() {
        startTime = null;
        endTime = null;
        running = false
        duration = 0
    }

    Object.defineProperty(this, 'duration', {
        get: function() {
            return duration
        }
    })
}