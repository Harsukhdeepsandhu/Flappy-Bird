class Pipes extends Rectangle {
    constructor(x, y, width, height, color, context) {
        super(x, y, width, height, color, context);
    }

    update() {
        this.x--;
        super.draw();
    }
}