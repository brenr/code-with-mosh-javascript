/**
 * Documentation:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
 */

// String primitive
const message = 'This is my first message';
// typeof message -> "string"
// message.length -> 24
// message[0] -> "T"
// message.includes('my') -> true
// message.includes('MY') -> false
// message.startsWith('This') -> true
// message.startsWith('this') -> false
// message.endsWith('e') -> true
// message.indexOf('my') -> 8
// message.replace('first', 'second') -> "This is my second message"
// message.toUpperCase() -> "THIS IS MY FIRST MESSAGE"
// message.toLowerCase() -> "this is my first message"
message = '   This is my first message  ';
// message.trim() -> "This is my first message"
// message.trimLeft() -> "This is my first message   "
// message.trimRight() -> "   This is my first message"
message = "This is my 'first message"; // Escape characters with backslash
// message -> "This is my 'first message"
message = 'This is my\n first message';
// message -> "This is my
//             first message"

// String object
const another = new String('hi');
// typeof another -> "object"
