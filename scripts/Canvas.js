class Canvas {

    constructor(width, height, canvas, background) {
        this.canvas = canvas;
        this.setHeight(height);
        this.setWidth(width);
        this.setContext("2d");
        this.background = "background";
    }

    //getters and setters
    setWidth(width) {
        this.width = width;
        this.canvas.width = width;
    }

    setHeight(height) {
        this.height = height;
        this.canvas.height = height;
    }

    setBackground(background) {
        this.background = background; this.context.beginPath();
        this.context.rect(0, 0, this.width, this.height);
        this.context.fillStyle = this.background;
        this.context.fill();
    }

    setCanvas(canvas) {
        this.canvas = canvas;
    }

    setContext(type) {
        this.context = this.canvas.getContext(type);
    }

    clearCanvas() {
        this.context.clearRect(0, 0, this.width, this.height);
    }

}