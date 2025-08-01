// one method is we import one by one using require.

// const add = require("./calculator/add");
// const multiply = require("./calculator/multiply");
// const subtract = require("./calculator/subtract");

// add(3,2);
// subtract(4,6);
// multiply(3,6)


// second way is to first import all modules in a single module then export that module and import require function from that module using require. 
const {add,subtract,multiply}=require("./calculator");

add(3,2);
subtract(4,6);
multiply(3,6)
