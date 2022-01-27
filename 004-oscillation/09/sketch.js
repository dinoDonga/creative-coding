function setup() {
    createCanvas(450, 450, WEBGL);
    angleMode(DEGREES);

    frameRate(60);
    // createLoop({ duration: 3.0, gif: true });
}

function draw() {
    background(30);

    rotateX(90);
    rotateY(90);

    noFill();
    stroke(255, 255, 255);
    //smooth()

    for (let i = 0; i < 16; i++) {
        // right side shapes from inside to outside

        beginShape();
        for (let l = 0; l < 360; l += 10) {
            let rad = i * 8;
            let y = rad * cos(l) * 2;
            let x = rad * sin(i) * 2;
            let z = sin(frameCount * 2 + i * 10) * 50 * 0.8;

            vertex(z, y, y);
        }
        endShape(CLOSE);
        // ##################################################################//

        beginShape();
        for (let l = 0; l < 360; l += 10) {
            let rad = i * 8;
            let y = rad * cos(l) * 2;
            let x = rad * sin(i) * 2;
            let z = sin(frameCount * 2 + i * 10) * 50 * 0.8;

            vertex(-x, -y, -z);
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
