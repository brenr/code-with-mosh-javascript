const circle = {
  radius: 1,
  draw() {
    console.log('draw');
  }
};

// Cloining an object allocates to a new memory address
// circle and another are independent of one another
/*
const another = {};
for (let key in circle) {
  another[key] = circle[key];
}
*/
// The code above is an older way of cloning an object.

// This is a more concise to accomplish the same above
const another = Object.assign({}, circle);

// Even shorter, using the spread operator (...)
const another2 = { ...circle };
