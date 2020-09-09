
function start() {
    for(let i = 0; i < 5; i++) {
        if (true) {
            var color = 'red'; // now color is accessible anywhere inside the function
        }
        console.log(i);
    }
    console.log(color); // not good!

    // Using var is bad! It's now accessible outside of our loop!
    for(var j = 0; j < 5; j++) {
        console.log(j);
    }
    console.log(j); // j still exists in function scope as var was used! not good!


    // var -> function-scoped
    // ES6: let const -> block scoped
}

start();




var color = 'red'; // creates a global variable and attaches it to browser's window object
console.log(window.color); // -> "red"

let age = 30;
console.log(window.age); // -> undefined

// Again, declaring the sayHi function in the global scope is no go!
// using modules, we can encapsulate these methods instead of just having them bound to the window object
function sayHi() {
    console.log('hi');
}

// Takeaway
// avoid using var and globally scoped methods - both will bind to window object