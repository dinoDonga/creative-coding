function setup() {
    createCanvas(900, 900, WEBGL);
    angleMode(DEGREES);
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

        // beginShape();
        // for (let j = 0; j < 360; j += 20) {
        //     let rad = i * 8;
        //     let x = rad * cos(j);
        //     let y = rad * sin(i);
        //     let z = sin(frameCount * 2 + i * 10) * 50;

        //     vertex(x, y, z);
        // }
        // endShape(CLOSE);

        beginShape();
        for (let j = 0; j < 360; j += 10) {
            let rad = i * 8;
            let y = rad * cos(j);
            let x = rad * sin(i);
            let z = sin(frameCount * 2 + i * 10) * 50;

            vertex(x, y, z);
        }
        endShape(CLOSE);

        beginShape();
        for (let k = 0; k < 360; k += 10) {
            let rad = i * 8;
            let y = rad * cos(k) * 1.5;
            let x = rad * sin(i) * 1.5;
            let z = sin(frameCount * 2 + i * 10) * 50 * 1.5;

            vertex(x, y, z);
        }
        endShape(CLOSE);

        beginShape();
        for (let l = 0; l < 360; l += 10) {
            let rad = i * 8;
            let y = rad * cos(l) * 2;
            let x = rad * sin(i) * 2;
            let z = sin(frameCount * 2 + i * 10) * 50 * 2;

            vertex(x, y, z);
        }
        endShape(CLOSE);

        beginShape();
        for (let l = 0; l < 360; l += 10) {
            let rad = i * 8;
            let y = rad * cos(l) * 2;
            let x = rad * sin(i) * 2;
            let z = sin(frameCount * 2 + i * 10) * 50 * 2;

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
