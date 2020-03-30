
const numbers = [1, 2, 3, 4];

console.log(includes(numbers, 1)); // -> true

function includes(array, searchElement) {
    return array.indexOf(searchElement) !== -1;
    // so many different approaches we can use for this problem...
    // one would have been using .some() against the array
    // another could be a for...of loop, etc
}