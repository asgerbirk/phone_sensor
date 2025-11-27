let leftBtn, rightBtn, extendBtn, shortenBtn;

//  multi-touch
let rightPressed = false;
let downPressed = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  textAlign(CENTER, CENTER);
  textSize(20);

  leftBtn = createButton("←");
  leftBtn.position(40, height / 2 - 60);
  leftBtn.size(120, 120);
  leftBtn.style("font-size", "60px");
  leftBtn.style("border-radius", "20px");
  leftBtn.mousePressed(() => {
    sender(-1);
  });

  rightBtn = createButton("→");
  rightBtn.position(width - 160, height / 2 - 60);
  rightBtn.size(120, 120);
  rightBtn.style("font-size", "60px");
  rightBtn.style("border-radius", "20px");
  rightBtn.mousePressed(() => {
    sender(1);
  });

  // multi-touch: track when RIGHT is held
  rightBtn.touchStarted(() => {
    rightPressed = true;
  });
  rightBtn.touchEnded(() => {
    rightPressed = false;
  });

  extendBtn = createButton("↓");
  extendBtn.position(width / 2 - 60, height / 2 + 80);
  extendBtn.size(120, 120);
  extendBtn.style("font-size", "60px");
  extendBtn.style("border-radius", "20px");
  extendBtn.mousePressed(() => sender("extend"));

  // multi-touch: track when DOWN is held
  extendBtn.touchStarted(() => {
    downPressed = true;
  });
  extendBtn.touchEnded(() => {
    downPressed = false;
  });

  shortenBtn = createButton("↑");
  shortenBtn.position(width / 2 - 60, height / 2 - 205);
  shortenBtn.size(120, 120);
  shortenBtn.style("font-size", "60px");
  shortenBtn.style("border-radius", "20px");
  shortenBtn.mousePressed(() => sender("shorten"));

  /*
  const threshold = 10;
  setupOrientation(threshold);
  */
}

function draw() {
  background(20);
  fill(255);
  text("Fishing Controller", width / 2, 60);

  if (rightPressed) {
    sender(1);
  }

  if (downPressed) {
    sender("extend");
  }
}

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
  extendBtn.position(width / 2 - 60, height / 2 + 80);
  shortenBtn.position(width / 2 - 60, height / 2 - 205);
}
