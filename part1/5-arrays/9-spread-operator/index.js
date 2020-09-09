
const first = [1, 2, 3];
const second = [4, 5, 6];

// The ...spread operator
const combined = [...first, ...second]; // Create new array and adding elements individually from first & second arrays
console.log(combined); // -> [1, 2, 3, 4, 5, 6]

const copy = [...combined]; // -> Put all elements into the `copy` array
combined.length = 0; // Empty out our array
console.log(combined); // -> []
console.log(copy); // -> [1, 2, 3, 4, 5, 6]

// ^ old values are still retained because the spread operator literally spread out the values into the array
// as if we're declaring a new one and finding a new place in memory for it. We didn't pass in the reference.