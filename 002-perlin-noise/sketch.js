let t = 0;
let diameter = 250;

function setup() {
    const canvas = createCanvas(800, 600);
    canvas.class("canvas");
}

function draw() {
    background(20, 1);

    // let x = random(100, width - 100);
    // let y = random(100, height - 100);
    stroke("black");
    strokeWeight(5);
    noFill();

    circle(width / 2, height / 2, diameter);

    fill(255);
    noStroke();

    let angle = 30;
    let x = diameter * Math.cos(angle) + height / 2;
    let y = diameter * Math.sin(angle) + width / 2;

    stroke("red");
    strokeWeight(25);
    point(x, y);

    let x = noise(t);
    let y = noise(t);

    for (let i = 0; i < 50; i++) {
        x = map(x, 0, 1, 100, width - 100);
        y = map(y, 0, 1, 100, width - 100);
        ellipse(x + random(50) * i, y + random(50) * i, 40, 40);
    }

    t += 0.05;
}

function mousePressed() {
    noLoop();
}

function mouseReleased() {
    loop();
}
