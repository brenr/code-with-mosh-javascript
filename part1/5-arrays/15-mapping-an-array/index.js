
const numbers = [1, -1, 2, 3];

const items = numbers
    .filter(n => n >= 0)
    .map(n => ({ value: n }))
    .filter(obj => obj.value > 1)
    .map(obj => obj.value);
// ^ we have to wrap the object literal in parenthesis because the interpreter thinks you're defining a code
// block otherwise

console.log(items);

// Takeaway: map and filter do not mutate, they simply return values, which means they're chainable.