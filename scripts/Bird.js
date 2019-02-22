class Bird extends Rectangle {

    constructor(x, y, width, height, color, context) {
        super(x, y, width, height, color, context);
        window.addEventListener("click", this.listener, true);
        this.status = true;
    }

    update() {
        if (this.y + this.height < this.context.canvas.height) {
            this.y += 2;
        } else {
            window.removeEventListener("click", this.listener, true);
            this.status = false;
        }
        super.draw();
    }

    listener() {
        if (this.bird.y > 50) {
            this.bird.y -= 50;
        } else {
            this.bird.y = 0;
        }
    }

    getGameStatus() {
        return this.status;
    }
}