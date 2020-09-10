
function Circle(radius) {
    this.radius = radius;

    let defaultLocation = { x: 0, y: 0 };

    let computeOptimalLocation = function () {
        
    };

    this.draw = function () {
        computeOptimalLocation();
        
        console.log('draw');
    };
}

const circle = new Circle(10);
circle.draw();