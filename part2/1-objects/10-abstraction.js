
function Circle(radius) {
    this.radius = radius;

    this.defaultLocation = { x: 0, y: 0 };

    this.computeOptimalLocation = function () {
        
    };

    this.draw = function () {
        this.computeOptimalLocation();
        
        console.log('draw');
    };
}

const circle = new Circle(10);
circle.draw();