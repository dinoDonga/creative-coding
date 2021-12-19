let t = 0;
let q = 50;

function setup() {
    const canvas = createCanvas(800, 600);
    canvas.class("canvas");
}

function draw() {
    background(20, 1);
    fill(255);

    // let x = random(100, width - 100);
    // let y = random(100, height - 100);

    let x = noise(t);
    x = map(x, 0, 1, 100, width - 100);

    let y = noise(q);
    y = map(y, 0, 1, 100, height - 100);

    ellipse(x + random(50), y + random(5), 40, 40);

    t += 0.05;
    q += 5;
}

function mousePressed() {
    noLoop();
}

function mouseReleased() {
    loop();
}
