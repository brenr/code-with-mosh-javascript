const numbers = arrayFromRange(1, 2);

console.log(numbers); // -> [1, 2, 3, 4]

/**
 * Return an array, with a min and max value, inclusive
 * @param min Start number
 * @param max End number
 */
function arrayFromRange(min, max) {
    const LENGTH = max - min + 1;

    if(LENGTH <= 0) return [];

    return new Array(LENGTH) // initialize array length for potential performance gains?
        .fill(0) // populate with dummy values
        .map(
            (curr, index) => min + index
        );
}

// Didn't want to take the iterative approach. Also would be interested in knowing if filling array with min value
// and mapping over only adding the index is computationally equivalent to filling with dummy values, say 0,
// and simply adding the min and index.