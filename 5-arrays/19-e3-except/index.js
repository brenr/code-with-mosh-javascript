
const numbers = [1, 2, 3, 4, 1, 1];

const output = except(numbers, [1, 2]);

console.log(output);

function except(array, excluded) {
    // Approach 1
    // let filtered = array;
    // for(let exclude of excluded)
    //     filtered = filtered.filter(n => n != exclude);
    //
    // return filtered;

    // Approach 2
    return array.filter(n => !excluded.includes(n)); // Much more concise and clean
}