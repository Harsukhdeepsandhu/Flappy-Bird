var width = 414;
var height = 846;
var pipeX, pipeY, pipeHeight;
var pipes = [];
var score = 0;

var canvasID = document.getElementById('canvas');

var canvas = new Canvas(width, height, canvasID);
var context = canvas.context;

var bird = new Bird(10, canvas.height / 2, 50, 50, "red", context);

function pushPipes() {
    pipeX = width;
    pipeY = 0;
    pipeHeight = Math.floor((Math.random() * (height / 1.5)) + 0);
    pipes.push(new Pipes(pipeX, pipeY, 40, pipeHeight, "green", context));
    pipeY = pipeHeight + (bird.height * 3);
    pipeHeight = height - pipeY;
    pipes.push(new Pipes(pipeX, pipeY, 40, pipeHeight, "green", context));
}

pushPipes();
var interval = setInterval(pushPipes, 6000);

function displayScore() {
    context.font = '48px serif';
    context.fillStyle = "black";
    context.fillText('Score: ' + score / 2, 10, 50);
}

function animate() {
    if (bird.getGameStatus()) {
        canvas.clearCanvas();
        canvas.setBackground("#B7E7FD");
        bird.update();
        for (var i = 0; i < pipes.length; i++) {
            if (pipes[i].x + pipes[i].width < 0) {
                pipes.splice(i, 1);
                score++;
            } else {
                pipes[i].update();
                if (i < pipes.length - 1) {
                    pipes[i + 1].update();
                    var collision = new Collision(bird, pipes[i], pipes[i + 1]);
                    collision.detectCollision();
                    i++;
                }
            }
        }
        displayScore();
        requestAnimationFrame(animate);
    } else {
        clearInterval(interval);
    }
}

animate();