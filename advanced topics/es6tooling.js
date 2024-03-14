// ES6 Modules

//Modularity -> Maintanability, Reuse, Abstract

//Modules ->
// AMD -> Browser
// CommonJS -> Node.js
// UMD -> Browser/Node.js
// ES6 Modules


//
// CommonJS Modules - Node.js
//

// const Circle = require('./circle')


// const c = new Circle(10)
// c.draw()

//Things highly related should go together - Cohesion


//
// ES6 Modules - Browser
//

import { Circle2 } from './circleES6Module.js'

const c2 = new Circle2(10)
c2.draw()

//
//ES 6 tooling - ONLY WHEN BUILDING WEB BROWESR APPLICATIONS, NOT FOR NODE.JS
//

//Transpiler - Translator + Compiler - eg. Babel

//Bundler - Combines all js files to one, - eg. Webpack