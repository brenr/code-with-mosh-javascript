// The rest operator prefixes an argument with an elipsis for an varying amount of args passed
// you cannot have another parameter after a rest parameter!
function sum(discount, ...prices) {
    return prices.reduce((a, b) => a + b) * (1 - discount);
}

console.log(sum(0.1, 20, 30)); // -> 9