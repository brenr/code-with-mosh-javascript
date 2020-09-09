const numbers = [1, 2, 3, 4];

// Removes last element in array and returns it.
const last = numbers.pop(); // Pop mutates already, we are just assigning the value we're removing
console.log(numbers); // -> [1, 2, 3]
console.log(last); // -> 4

// Remove first element in array and returns it.
const first = numbers.unshift(); // Unshift mutates already, we are just assigning the value we're removing
console.log(numbers); // -> [2, 3, 4]
console.log(first); // -> 1

// Remove n elements from index and length of elements, mutates in place
numbers.splice(2, 2); // Starting with index 2, through +2 index (4) delete these elements
// -> [1, 2]