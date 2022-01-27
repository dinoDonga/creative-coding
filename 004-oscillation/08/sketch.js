function setup() {
    createCanvas(900, 900, WEBGL);
    angleMode(DEGREES);

    frameRate(60);
    // createLoop({ duration: 3.0, gif: true });
}

function draw() {
    background(30);

    rotateX(90);

    noFill();
    stroke(255, 35, 35);
    //smooth()

    for (let i = 0; i < 25; i++) {
        let r = map(sin(frameCount), -1, 1, 0, 255);
        let g = map(i, 0, 20, 0, 255);

        beginShape();
        for (let j = 0; j < 360; j += 20) {
            let rad = i * 8;
            let x = rad * cos(j);
            let y = rad * sin(i);
            let z = sin(frameCount * 2 + i * 10) * 50;

            vertex(x, y, z);
        }
        endShape(CLOSE);
    }
}

function mousePressed() {
    noLoop();
}

function mouseReleased() {
    loop();
}
