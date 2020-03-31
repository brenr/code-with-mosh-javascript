
const numbers = [1, 2, 3, 4];

const output = move(numbers, 0, 1);

console.log(output);

function move(array, index, offset) {
    const TARGET_POS = index + offset;

    if(TARGET_POS > array.length - 1 || TARGET_POS < 0) {
        console.error('Invalid offset.');
        return;
    }

    // Copy array values
    let copied = [...array];

    // Cache the target from the array
    const targetVal = copied.splice(index, 1)[0];

    // Then we insert it at the correct index
    copied.splice(TARGET_POS, 0, targetVal);

    return copied;
}