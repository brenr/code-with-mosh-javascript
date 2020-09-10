
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
};

// Call method takes in an object which we are targeting for our function logic.
// The second argument in the call method refers to the arguments being passed to the function
Circle.call({}, 1);

// Apply allows us to pass in multiple arguments as an array where call requires
// successive method calls
Circle.apply({}, [1, 2, 3]);

// This is the same as above
const Circle1 = new Function('radius', `
this.radius = radius;
this.draw = function () {
    console.log('draw');
}
`);

const circle = new Circle1(1);