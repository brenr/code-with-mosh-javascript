
const numbers = [1, 2, 3, 4, 1, 1, 2];

try {
    const count = countOccurences(numbers, 1);
    console.log(count);
} catch (e) {
    console.error(e);
}



function countOccurences(array, needle) {
    if(!Array.isArray(array)) {
        throw new Error("Not a valid array!");
    }
    return array.reduce((acc, curr) => acc += (curr == needle) ? 1 : 0);
    // Easy 1 liner solution
}