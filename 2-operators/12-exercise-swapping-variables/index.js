let a = 'red';
let b = 'blue';

console.log('Original a ->', a);
console.log('Original b ->', b);

let _a = a;
a = b;
b = _a;

console.log('Swapped a ->', a);
console.log('Swapped b ->', b);
