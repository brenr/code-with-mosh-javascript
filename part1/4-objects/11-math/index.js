/**
 * Documentation:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
 */

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

getRandomArbitrary(5, 10);
// returns a random number between 5 and 10;

Math.round(1.9);
// -> 2

Math.max(1, 2, 3, 4, 5);
// -> 5

Math.min(1, 2, 3, 4, 5);
// -> 1
