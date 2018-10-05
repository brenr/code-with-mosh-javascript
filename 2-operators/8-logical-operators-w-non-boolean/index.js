console.log(false || true); // -> true
console.log(false || 'Brendan'); // -> "Brendan"
console.log(false || 1); // -> 1

// The first value in search that is evaluated to true is returned
console.log(false || 1 || 2); // -> 1

/**
 * Notes
 *
 * Falsy values
 * undefined, null, 0, false, '', NaN
 *
 * Truthy values
 * Anything that is not falsy
 */

let userColor = 'red';
let defaultColor = 'blue';

// if user has not selected a color, we will use default color
let currentColor = userColor || defaultColor;

console.log(currentColor);
