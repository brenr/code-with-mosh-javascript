
const numbers = [2, 3, 1];
numbers.sort(); // This method mutates the array in memory so need to assign a reference to this return value
console.log(numbers); // -> [1, 2, 3]

numbers.reverse(); // This method mutates the array in memory like above
console.log(numbers); // -> [3, 2, 1]


const courses = [
    { id: 1, name: 'Node.js' },
    { id: 2, name: 'JavaScript' }
];
courses.sort(function(a, b) {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
});
console.log(courses); // -> [ { "JavaScript"}, { "Node.js"} ]
// ^ notice it sorted as we intended
// if we changed the J in "JavaScript" to lowercase, then we'd see "javaScript" gets placed after "Node.js"
// the reason for this is because sort will convert it to a character and evaluate the character code
// see ASCII table for reference https://www.cs.cmu.edu/~pattis/15-1XX/common/handouts/ascii.html
// a simple workaround would be to either set everything to uppercase, or lowercase when comparing
// imagine you can probably use modulus in a way to accomplish the same which could be more performant than changing
// the case? not sure how it works under the hood