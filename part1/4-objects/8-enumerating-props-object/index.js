const circle = {
  radius: 1,
  draw() {
    console.log('draw');
  }
};

for (let key in circle) {
  console.log(key, circle[key]);
}

// for-of can only iterate over arrays and maps.
// Calling for-of on an object throws error not iterable
/*
for (let key of circle) {
  console.log(key);
}
*/
// We can use Object.keys to return an array of the keys
// so that it is iterable now.
for (let key of Object.keys(circle)) {
  console.log(key);
}

// If we want the key value pair, we can call the entries
// method on an object
for (let entry of Object.entries(circle)) {
  console.log(entry);
}

// The IN operator determines whether the right side object
// contains a property of the left side defined by a string.
if ('radius' in circle) {
  console.log('yes');
}
// -> "yes"
