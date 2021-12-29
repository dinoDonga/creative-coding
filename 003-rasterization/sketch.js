let img;
let tiles = 120;
let tileSize;
let sphereRadius = 5;
function preload() {
    img = loadImage("assets/avatar.jpeg");
}

function setup() {
    const canvas = createCanvas(900, 900);
    tileSize = width / tiles;
    img.resize(900, 900);
    canvas.class("canvas");
}

function draw() {
    background(241, 241, 241);
    fill(0);
    noStroke();

    for (let x = 0; x < tiles; x++) {
        for (let y = 0; y < tiles; y++) {
            ellipse(
                x * tileSize + sphereRadius,
                y * tileSize + sphereRadius,
                sphereRadius
            );
            let c = img.get(x * tileSize, y * tileSize);
            let b = map(brightness(c), 0, 255, 1.265, 0);
            push();
            translate(x * tileSize, y * tileSize);
            ellipse(0, 0, tileSize * b, tileSize * b);
            pop();
        }
    }
}
