class Collision {
    constructor(bird, pipeTop, pipeBottom) {
        this.bird = bird;
        this.pipeTop = pipeTop;
        this.pipeBottom = pipeBottom;
    }

    detectCollision() {
        if (this.bird.x + this.bird.width >= this.pipeTop.x && (this.bird.y < this.pipeTop.height ||
            this.bird.y + this.bird.height > this.pipeBottom.y)) {
            bird.status = false;
        }
    }

}