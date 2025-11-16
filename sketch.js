let leftBtn, rightBtn;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  textAlign(CENTER, CENTER);
  textSize(20);

  // ======== KNAPPER =========

  // Venstre knap
  leftBtn = createButton("←");
  leftBtn.position(40, height / 2 - 60);
  leftBtn.size(120, 120);
  leftBtn.style("font-size", "60px");
  leftBtn.style("border-radius", "20px");
  leftBtn.mousePressed(() => {
    sender(-1); // flyt til venstre
  });

  // Højre knap
  rightBtn = createButton("→");
  rightBtn.position(width - 160, height / 2 - 60);
  rightBtn.size(120, 120);
  rightBtn.style("font-size", "60px");
  rightBtn.style("border-radius", "20px");
  rightBtn.mousePressed(() => {
    sender(1); // flyt til højre
  });

  // ======== SENSOR (UDKOMMENTERET) ========

  /*
  const threshold = 10;
  setupOrientation(threshold);
  */
}

function draw() {
  background(20);
  fill(255);
  text("Tryk ← eller → for at flytte fiskestangen", width / 2, height / 4);

  // ======== SENSOR (UDKOMMENTERET) ========

  /*
  if (orientationSensor.hasNewValue) {
    let gyro = orientationSensor.get();
    let alpha = gyro.alpha;
    console.log("SENDT (alpha): " + alpha);
    sender(alpha); // du kan slå denne til, hvis du vil bruge sensoren senere
  }
  */
}

// ======== SENSOR TOUCH (UDKOMMENTERET) ========

/*
function touchStarted() {
  const threshold = 10;
  setupOrientation(threshold);
}
*/

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  leftBtn.position(40, height / 2 - 60);
  rightBtn.position(width - 160, height / 2 - 60);
}
