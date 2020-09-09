
// Function declaration
function walk() {
    console.log('walk');
}



// Anonymous Function expression
let run = function() {
    console.log('run');
};

run(); // -> "run"
let move = run; // Both move and run reference the anon fn { console.log('run') }
move(); // -> "run"



// Named function expression
// not quite sure what the benefit in this would be
let sprint = function spr() {
    console.log('sprint');
}
sprint();