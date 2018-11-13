
const now = new Date();
const date1 = new Date('June 1 2018 10:00');
const date2 = new Date(2018, 5, 1, 10); //Months are zero-based

now.setFullYear(2017); // Modify the now object's year to 2017.
now.toISOString(); // Common format used for timestamps in programming