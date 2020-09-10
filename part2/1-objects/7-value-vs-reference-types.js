
// Value example
let x = 10;
let y = x;

x = 20;

console.log(x); // -> 20
console.log(y); // -> 10


// Reference example
let a = { value: 10 };
let b = a;

a.value = 20;

console.log(a); // -> 20
console.log(b); // -> 20


// Value test
let number = 10;

function increaseVal(number) {
    // number does not reference the variable, rather the value of it
    number++; // Mutates the local value copied and not the value that was passed
}

increaseVal(number);
console.log(number); // -> 10


// Reference test
let obj = { value: 10 };

function increaseRef(obj) {
    // obj is referencing to the same pointer that points to the object in memory
    obj.value++; // Mutates the object being referenced
}

increaseRef(obj);
console.log(obj.value); // -> 11