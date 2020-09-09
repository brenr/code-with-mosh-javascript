function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  };
}

/*
const Circle1 = new Function(
  'radius',
  `
this.radius = radius;
  this.draw = function() {
    console.log('draw');
  };`
);

const circle = new Circle1(1);
*/

// These are the same:
Circle.call({}, 1);
Circle.apply({}, [1, 2, 3]);
const another = new Circle(1);
