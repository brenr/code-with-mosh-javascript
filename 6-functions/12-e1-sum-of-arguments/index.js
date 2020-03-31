
// This method assumes either a variable number of args were passsed
// or a singlular one-dimensional array was passed
function sum(...nums) {
    // Arg passed in was an array need to use that
    if(Array.isArray(nums[0])) nums = nums[0];


    if(nums.length == 1) return nums[0];

    return nums.reduce((a, b) => a + b);
}

// Test 1
console.log(sum(1,2,3,4,5)); // -> 15

// Test 2
console.log(sum([1,2,3,4,5])); // -> 15

// Test 3
console.log(sum(3)); // -> 3

// Test 4
console.log(sum([3])); // -> 3