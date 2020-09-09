
const numbers = [1, 2, 3, 4, 1, 1, 2];

const count = countOccurences(numbers, 1);

console.log(count);

function countOccurences(array, needle) {
    return array.reduce((acc, curr) => acc += (curr == needle) ? 1 : 0);
    // Easy 1 liner solution
}