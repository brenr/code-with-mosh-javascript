
const numbers = [1, 2, 3];
const joined = numbers.join(',');
console.log(joined); // -> "1,2,3"

const message = 'This is a test message';
const parts = message.split(' ');
console.log(parts); // -> ["This", "is", "a", "test", "message"]

const combined = parts.join('_');
console.log(combined); // -> "This_is_a_test_message"