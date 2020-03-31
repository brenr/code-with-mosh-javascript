
const numbers = [1, 2, 3, 4];

const max = getMax(numbers);

console.log(max);

function getMax(array) {
    // If our array is empty we will simply return undefined as there will be no max
    if(array.length == 0) return undefined;

    // Solution 1 (what I initially came up with)
    // I imagine sort is computationally expensive and should be avoided
    //return array.sort().pop();

    // Solution 2
    array.reduce((acc, curr) => curr > acc ? curr : acc);
}