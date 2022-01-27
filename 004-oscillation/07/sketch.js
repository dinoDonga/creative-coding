function setup() {
    createCanvas(450, 450, WEBGL);
    angleMode(DEGREES);

    frameRate(60);
    createLoop({ duration: 3.0, gif: true });
}

function draw() {
    background(30);

    rotateX(90);
    rotateY(frameCount);

    noFill();
    stroke(250, 250, 250);
    smooth();

    for (let i = 0; i < 25; i++) {
        beginShape();
        for (let j = 0; j < 360; j += 20) {
            let rad = i * 6;
            let x = rad * cos(j);
            let y = rad * sin(i);
            let z = sin(frameCount * 2 + i * 10) * 42;

            vertex(x, y, z);
        }
        endShape(CLOSE);

        rotateY(5);
    }
}

function mousePressed() {
    noLoop();
}

function mouseReleased() {
    loop();
}
