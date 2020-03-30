
const numbers = [1, 2, 3];

console.log('for of');
for(let number of numbers)
    console.log(number);
console.log('\n');
// ^ if you needed index you could use for in instead of for of loop

console.log('forEach');
numbers.forEach((number, index) => console.log(index, number));
console.log('\n');
// ^ functionally these are the same however under the hood there is a performance difference that I know of