const first = [1, 2, 3];
const second = [4, 5, 6];

/**
 * .concat()
 * Works for strings and arrays, concatenates the passed in reference to the end of the object we
 * are referencing, returning a new object
 */
const combined = first.concat(second); // Does not mutate `first`, simply returns the concatenated `first` and `second`
console.log(combined); // -> [1, 2, 3, 4, 5, 6]

/**
 * .slice()
 * Return a subset of an array/string via the start index and end index we wish to return
 */
const slice = combined.slice(2, 4); // Get from the 2nd, up to but not inclusive of the 4th index
const slice2 = combined.slice(2); // Get from the 2nd array until the end
const slice3 = combined.slice(); // No parameters passed essentially just copies the array (uses new mem addr)
console.log(combined); // -> [1, 2, 3, 4, 5, 6]
console.log(slice); // -> [3, 4]
console.log(slice2); // -> [3, 4, 5, 6]

console.log(slice3); // -> [1, 2, 3, 4, 5, 6]

// What if we empty the array of combined? What happens?
combined.length = 0; // The array of combined is emptied by setting its length to 0
console.log(combined); // -> []
console.log(slice3); // -> [1, 2, 3, 4, 5, 6]
/**
 * But...
 * When we use slice, if you use primitives, they will be copied, however if we use objects,
 * the references are copied.
 */

const arrOne = [{ id: 1 }];
const arrTwo = [4, 5, 6];
const combinedArr = arrOne.concat(arrTwo);

arrOne[0].id = 10; // -> Going to memory addr where `arrOne` points to and changing the 0th id to 10

const slicedArr = combinedArr.slice(); // -> Copy array, including values and references
console.log(combinedArr); // -> [{ id: 10}, 4, 5, 6]
console.log(slicedArr); // -> [{ id: 10}, 4, 5, 6]
// ^ Both return values are the same because by mutating the value in the memory addr, we've changed slicedArr
// as it's simply a reference to the same location in memory

// Takeaway: Objects are copied by reference and primitives are copied by value