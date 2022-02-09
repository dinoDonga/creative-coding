let r1, x, x1, y, y1, xSpeed, ySpeed;

function setup() {
    const canvas = createCanvas(800, 600);
    canvas.class("canvas");

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

    fill(255, 255, 2550);
    ellipse(x + random(-7, 7), y + random(-7, 7), r);

    fill(150, 150, 150);
    ellipse(x + random(-7, 7), y + random(-7, 7), r);

    fill(20, 20, 20);
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
    //noLoop();
    stoke();
}

function mouseReleased() {
    noStroke();
    //  loop();
}
