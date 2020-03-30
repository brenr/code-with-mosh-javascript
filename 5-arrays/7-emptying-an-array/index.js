let numbers1 = [1, 2, 3, 4]; // Create array in memory and assign `numbers1` as a reference to that memory addr
let another1 = numbers1; // Assign `another1` as the same memory addr as numbers

let numbers2 = [1, 2, 3, 4]; // Create array in memory and assign `numbers2` as a reference to that memory addr
let another2 = numbers2; // Assign `another2` as the same memory addr as numbers

let numbers3 = [1, 2, 3, 4]; // Create array in memory and assign `numbers3` as a reference to that memory addr
let another3 = numbers3; // Assign `another3` as the same memory addr as numbers

let numbers4 = [1, 2, 3, 4]; // Create array in memory and assign `numbers4` as a reference to that memory addr
let another4 = numbers4; // Assign `another4` as the same memory addr as numbers

/**
 * Solution 1
 * Numbers gets set to empty array however the array still remains in memory and `another` is still pointing
 * to the reference, so GC will never clean it up
 */
numbers1 = []; // Create a new array in memory and reassign `numbers` as the reference to the new empty array
console.log(numbers1); // -> []
console.log(another1); // -> [1, 2, 3, 4]
// ^ `another` still points to the previously initialized array in memory. `numbers` now points to another array

/**
 * Solution 2
 * Truncate array by setting its length to 0
 */
numbers2.length = 0; // Go to memory address by reference and modify array so its length is 0
console.log(numbers2); // -> []
console.log(another2); // -> []

/**
 * Solution 3
 * Essentially the same as solution 2. We go to the memory address to handle the data mutation
 */
numbers3.splice(0, numbers3.length);
console.log(numbers3); // -> []
console.log(another3); // -> []

/**
 * Solution 4
 * Iterate via a loop but would be blocking and terribly inefficient
 */
while(numbers.length > 0) // Alternatively use `numbers` as shorthand evaluation of truthy/falsy
    numbers.pop(); // Could also use unshift of course

console.log(numbers4); // -> []
console.log(another4); // -> []