
const numbers = [1, -1, 2, 3];

const filtered = numbers.filter(n => n >= 0);

console.log(filtered);

// .filter() does not mutate the object - it simply returns a modified version of whatever is initially referenced