const color = 'red'; // Global scope variable, only really applicable in singleton design otherwise avoid using global

function start() {
    const message = 'hi'; // Accessible within this block but not outside
    if (true) {
        const another = 'bye';
    }

    const color = 'blue'; // Redefining a constant? Yes and no. Technically this is a local variable called blue.
    console.log(color); // -> 'blue'
    // ^ blue is returned since `color` is now technically a local variable which takes precedence

    console.log(another); // -> Uncaught ReferenceError: another is not defined

    for (let i = 0; i < 5; i++) {
        console.log(i); // Again i is only accessible within the for loop of course
    }
}
//console.log(message); // -> Uncaught ReferenceError: message is not defined
start();



function stop() {
    const message = 'bye'; // message was already declared, but in a different scope, so it's fine.
}