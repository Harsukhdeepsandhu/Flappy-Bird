class Rectangle {

    constructor(x, y, width, height, color, context) {
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.color = color;
        this.context = context;
    }

    draw() {
        this.context.beginPath();
        this.context.rect(this.x, this.y, this.width, this.height);
        this.context.fillStyle = this.color;
        this.context.fill();
    }

    update() {
        this.draw();
    }

    //getters and setters
    setHeight(height) {
        this.height = height;
    }

    setWidth(width) {
        this.width = width;
    }

    setX(x) {
        this.x = x;
    }

    setY(Y) {
        this.y = y;
    }
}