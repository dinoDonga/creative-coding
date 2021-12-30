let slider1, slider2, rSlider, gSlider, bSlider, sizeSlider;

function setup() {
    createCanvas(450, 450, WEBGL);
    angleMode(DEGREES);
    smooth();

    slider1 = createSlider(0.5, 15, 0.5, 0.5);
    slider1.position(10, 10);
    slider1.style("width", "100px");

    slider2 = createSlider(0, 90, 0, 0.5);
    slider2.position(10, 30);
    slider2.style("width", "100px");

    rSlider = createSlider(0, 255, 255, 1);
    rSlider.position(10, 50);
    rSlider.style("width", "100px");

    gSlider = createSlider(0, 255, 255, 1);
    gSlider.position(10, 70);
    gSlider.style("width", "100px");

    bSlider = createSlider(0, 255, 255, 1);
    bSlider.position(10, 90);
    bSlider.style("width", "100px");

    let rSliderLabel = createP("r");
    rSliderLabel.style("font-size", "16px");
    rSliderLabel.position(120, 35);

    let gSliderLabel = createP("g");
    gSliderLabel.style("font-size", "16px");
    gSliderLabel.position(120, 55);

    let bSliderLabel = createP("b");
    bSliderLabel.style("font-size", "16px");
    bSliderLabel.position(120, 75);

    sizeSlider = createSlider(0, 7.5, 7, 0.1);
    sizeSlider.position(10, 110);
    sizeSlider.style("width", "100px");

    frameRate(60);
    createLoop({ duration: 3, gif: true, download: true });
}

function draw() {
    let val = slider1.value();
    let val2 = slider2.value();
    let size = sizeSlider.value();

    let r = rSlider.value();
    let g = gSlider.value();
    let b = bSlider.value();

    background(30);

    rotateX(val2);

    noFill();
    stroke(r, g, b);

    for (let i = 0; i < 10; i++) {
        beginShape();
        for (let j = 0; j < 360; j += 30) {
            let rad = i * val;
            let y = rad * cos(j);
            let x = rad * sin(i);
            let z = sin(frameCount * 2 + i * 10) * 50;

            rect(x / 2, y / 2, (z * size) / 2);
        }

        endShape();

        // stroke(150, 35, 35);
        // for (let j = 0; j < 360; j += 1) {
        //     let rad = i * 8;
        //     let y = rad * cos(j);
        //     let x = rad * sin(i);
        //     let z = sin(frameCount * 2 + i * 10) * 50;

        //     vertex(x - 20, y - 20, z);
        // }

        // for (let j = 0; j < 360; j += 20) {
        //     let rad = i * 8;
        //     let y = rad * cos(j);
        //     let x = rad * sin(i);
        //     let z = sin(frameCount * 2 + i * 10) * 50;

        //     vertex(-x, -y, -z);
        // }

        // for (let j = 0; j < 360; j += 20) {
        //     let rad = i * 10;
        //     let y = rad * cos(j);
        //     let x = rad * sin(i);
        //     let z = sin(frameCount * 2 + i * 10) * 50;

        //     vertex(x * -1 - 20, -y, -z);
        // }

        // for (let j = 0; j < 360; j += 10) {
        //     let rad = i * 8;
        //     let y = rad * cos(j);
        //     let x = rad * sin(i);
        //     let z = sin(frameCount * 2 + i * 10) * 50;

        //     vertex(-x, -y, -z);
        // }

        // for (let j = 0; j < 360; j += 10) {
        //     let rad = i * 8;
        //     let y = rad * cos(j);
        //     let x = rad * sin(i);
        //     let z = sin(frameCount * 2 + i * 10) * 50;

        //     vertex(-x + 10, -y, val * 2);
        // }
        //endShape(close);

        // beginShape();
        // for (let k = 0; k < 360; k += 10) {
        //     let rad = i * 8;
        //     let y = rad * cos(k) * 1.5;
        //     let x = rad * sin(i) * 1.5;
        //     let z = sin(frameCount * 2 + i * 10) * 50 * 1.5;

        //     vertex(x, y, z);
        // }
        // endShape(CLOSE);

        // beginShape();
        // for (let l = 0; l < 360; l += 10) {
        //     let rad = i * 8;
        //     let y = rad * cos(l) * 2;
        //     let x = rad * sin(i) * 2;
        //     let z = sin(frameCount * 2 + i * 10) * 50 * 2;

        //     vertex(x, y, z);
        // }
        // endShape(CLOSE);

        // beginShape();
        // for (let l = 0; l < 360; l += 10) {
        //     let rad = i * 8;
        //     let y = rad * cos(l) * 2;
        //     let x = rad * sin(i) * 2;
        //     let z = sin(frameCount * 2 + i * 10) * 50 * 2;

        //     vertex(-x, -y, -z);
        // }
        // endShape(CLOSE);
    }
}

// function mousePressed() {
//     noLoop();
// }

// function mouseReleased() {
//     loop();
// }
