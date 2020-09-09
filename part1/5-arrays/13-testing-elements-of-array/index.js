
const numbers = [1, 2, 3];

// .every() will iterate through the array so long as each condition evluates to true.
// if we can get through everything, our return will be true, otherwise if it encounters a
// false value, then the search is halted, returning false.
const allPositive = numbers.every(function(val) {
    return val >= 0;
});
console.log(allPositive); // -> false

// .every will iterate through the array so long as each condition evaluates to false.
// if we can get through everything we will return false, otherwise if it encounters a
// true value, then the search is halted returning true.
const atLeastOnePositive = numbers.some(function(val) {
    return val >= 0;
})
console.log(atLeastOnePositive); // -> true


// Takeaway:
// .every() returns whether or not every element matches the specific criteria
// .some() return whether or not at least one element matches the specific criteria
// This is an ES6-specific method that is not available in older browsers so a fallback
// method would be required for optimal compatibility