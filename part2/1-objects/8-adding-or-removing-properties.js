
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

const circle = new Circle(10);

// Dot notation used when you already know the property you're accessing
circle.location = { x: 1 };

// Square notation when the property you want to get is dynamic (ex: loops)
// Required if the property name contains special characters
const propertyName = 'location';
cirdcle[propertyName] = { x: 1 };


console.log(circle);

// Deleting properties using the delete keyword
delete circle.location;

console.log(circle);