/**
 * Factory functions by convention are in camelNotation
 *
 * Constructor functions by convention are in PascalNotation
 */

// Factory function
function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log('draw');
    }
  };
}

const myCircle = createCircle(1);

// Constructor function
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  };
}

const circle = new Circle(1);
