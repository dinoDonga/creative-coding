function setup() {
    const canvas = createCanvas(800, 600);
    canvas.class("canvas");
}

function draw() {
    background(20);
}

function mousePressed() {
    noLoop();
}

function mouseReleased() {
    loop();
}
