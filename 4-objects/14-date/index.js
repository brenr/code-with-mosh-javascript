<<<<<<< HEAD
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
=======

const now = new Date();
const date1 = new Date('June 1 2018 10:00');
const date2 = new Date(2018, 5, 1, 10); //Months are zero-based

now.setFullYear(2017); // Modify the now object's year to 2017.
now.toISOString(); // Common format used for timestamps in programming
>>>>>>> 0b66048fd64f7f30454d092f754b3171a4ed1b7d
