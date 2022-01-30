function setup() {
    createCanvas(450, 450, WEBGL);
    angleMode(DEGREES);

    frameRate(60);
    // createLoop({ duration: 3.0, gif: true });
}

function draw() {}

function mousePressed() {
    noLoop();
}

function mouseReleased() {
    loop();
}
