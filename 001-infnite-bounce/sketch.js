let r, r1, x, x1, y, y1, xSpeed, ySpeed;

function setup() {
    const canvas = createCanvas(800, 600);
    canvas.class("canvas");
    r = 25;
    x = 400;
    y = 300;
    x1 = 150;
    y1 = 200;
    r1 = 10;
    xSpeed = 10;
    ySpeed = 10;
}

function draw() {
    background(20, 1);
    //noStroke();

    fill(0, 255, 0, 120);
    ellipse(x + random(-7, 7), y + random(-7, 7), r);

    fill(0, 0, 255, 120);
    ellipse(x + random(-7, 7), y + random(-7, 7), r);

    fill(255, 0, 0, 120);
    ellipse((x + random(-7, 7), y + random(-7, 7), r));

    fill(255, 255, 255, 120);
    ellipse(x, y, r - 2);

    x += xSpeed;
    y += ySpeed;

    if (x + r / 2 >= width || x - r / 2 <= 0) {
        xSpeed *= -1;
    }

    if (y + r / 2 >= height || y - r / 2 <= 0) {
        ySpeed *= -1;
    }
}

function mousePressed() {
    noLoop();
}

function mouseReleased() {
    loop();
}
