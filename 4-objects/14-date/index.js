// Instantiate Date object
const now = new Date(); // by the time now
const date1 = new Date('Jan 31 2019 09:00'); // with a regex parsed string
const date2 = new Date(2019, 0, 31, 9); // with a predefined order of arguments

now.setFullYear(2017); // modify the object property values with set methods

/**
 * Return timestamp string in a format that is pretty standard,
 * to be interpreted in most applications, non language specific.
 */
const nowIso = now.toISOString();
console.log(nowIso); // 2017-01-31T14:06:28.828Z
