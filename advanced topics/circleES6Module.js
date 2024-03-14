// Implementation detial
const _radius = new WeakMap();

// Public Interface
export class Circle2 {
    constructor(radius) {
        _radius.set(this, radius);
    }

    draw() {
        console.log("Circle with radius " + _radius.get(this));
    }
}