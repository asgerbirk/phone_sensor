function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

let bg = 0;

function draw() {
  background(bg);

  if (orientationSensor.hasNewValue) {
    let gyro = orientationSensor.get();
    let alpha = gyro.alpha;
    console.log("SENDT (alpha): " + alpha);
    sender(alpha);
  }
}

const threshold = 10;

function touchStarted() {
  setupOrientation(threshold);
}
