const numbers = arrayFromRange(1, 4);

console.log(numbers); // -> [1, 2, 3, 4]

/**
 * Return an array, with a min and max value, inclusive
 * @param min Start number
 * @param max End number
 */
function arrayFromRange(min, max) {
    const arr = new Array((max - min) + 1); // Initialize an array with a size equal to our range
    const fuck = arr.map((currentValue, index) => {
        console.log(currentValue, index);
        return min + index;
    });
    return fuck;
}