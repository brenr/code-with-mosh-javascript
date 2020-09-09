
const numbers = [1, -1, 2, 3];

const sum = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue
);
// Method call list will look like: (first accumulator value seen is initialized to 0 if not specified
// acc = 0, curr = 1    -> acc = 1
// acc = 1, curr = -1   -> acc = 0
// acc = 0, curr = 2    -> acc = 2
// acc = 2, curr = 3    -> acc = 5

console.log(sum); // -> 5