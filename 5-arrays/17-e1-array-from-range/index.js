const numbers = arrayFromRange(-10, -4);

console.log(numbers); // -> [1, 2, 3, 4]

/**
 * Return an array, with a min and max value, inclusive
 * @param min Start number
 * @param max End number
 */
function arrayFromRange(min, max) {
    return new Array((max - min) + 1) // initialize array length for potential performance gains?
        .fill(min) // populate with dummy values
        .map(
            (curr, index) => curr + index
        );
}

// Didn't want to take the iterative approach. Also would be interested in knowing if filling array with min value
// and mapping over only adding the index is computationally equivalent to filling with dummy values, say 0,
// and simply adding the min and index.