class Particle {
    constructor(x, y, d) {
        // this.position = createVector(x, y);

        this.x = x;
        this.y = y;
        this.d = d;
        this.r = d / 2;
    }

    draw() {
        fill(0, 0, random(0, 100));
        ellipse(this.x, this.y, this.d);
    }
    animate() {
        this.x += 2;
        this.y += 2;
        this.d += 50;
        console.log("animating");
    }
}

const nOfParticles = 250;
const particles = [];

function setup() {
    colorMode(HSB, 100);
    createCanvas(900, 900);
    //angleMode(DEGREES);
    background(30);
    frameRate(60);
    // createLoop({ duration: 3.0, gif: true });5

    // initiate array of particles
    for (let i = 0; i < nOfParticles; i++) {
        const p = new Particle(
            random(60, width - 60),
            random(60, height - 60),
            random(5, 60)
        );
        particles.push(p);
    }
    particles.forEach((particle) => particle.draw());
}

function draw() {
    //particles.forEach((particle) => particle.animate());
    particles[0].animate();
    // background(30);
    //  particles.forEach((particle) => particle.draw());
}

// function mousePressed() {
//     noLoop();
// }

// function mouseReleased() {
//     loop();
// }
