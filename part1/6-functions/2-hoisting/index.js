
// Function Declaration
// you CAN call function declarations before they are defined
walk(); // -> "walk"
function walk() {
    console.log('walk');
}


// Function Expression
// you CANNOT call function expressed before they defined
run(); // -> Uncaught ReferenceError: run is not defined
const run = function() {
    console.log('run');
};


// Takeaway
// JavaScript engine, when it interprets code, it prioritizes interpreting function declarations first
// this is also referred to as "hoisting"
// Hoisting is the process of moving function declarations to the top of the file - done so automatically via JS engine