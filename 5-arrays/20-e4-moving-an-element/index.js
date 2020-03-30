
const numbers = [1, 2, 3, 4];

const output = move(numbers, 0, 1);

console.log(output);

function move(array, index, offset) {
    if(index + offset > array.length - 1 || index + offset < 0) {
        console.error('Invalid offset.');
        return;
    }

    // Copy array values
    let copied = [...array];

    // Cache the target from the array
    const target = copied.splice(index, 1)[0];

    // Then we insert it at the correct index
    copied.splice(index + offset, 0, target);

    return copied;
}