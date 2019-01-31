const numbers = [1, 2, 3, 4, 1];

/**
 * The indexOf method finds the index of the first strictly-typed match
 * of the argument that is passed, returning value as Integer.
 */
console.log(numbers.indexOf('1')); // -> -1
console.log(numbers.indexOf(1)); // -> 0

/**
 * In the indexOf method, we can supply a second parameter as the start index
 * Use case could be finding the nth occurance of an element match. We could
 * consume the indexOf method iteratively until we get to the nth of the loop?
 *
 * So we know the return value of the first 1 we find is at 0 index, so we
 * could begin our second search at that index+1 iteratively, which is why
 * we get 4 as return value.
 */
console.log(numbers.indexOf(1, 1)); // -> 4

/**
 * If we do not get -1 (an index out of bounds return value) then we
 * know it exists in the array.
 */
console.log(numbers.indexOf(1) !== -1);

console.log(numbers.includes(1)); // A more modern alternative to the above
