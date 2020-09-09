
// This method assumes either a variable number of args were passsed
// or a singlular one-dimensional array was passed
function sum(...items) {
    if(items.length === 1 && Array.isArray(items[0]))
        items = [...items[0]];

    return items.reduce((a, b) => a + b);
}

// Test 1
console.log(sum(1,2,3,4,5)); // -> 15

// Test 2
console.log(sum([1,2,3,4,5])); // -> 15

// Test 3
console.log(sum(3)); // -> 3

// Test 4
console.log(sum([3])); // -> 3