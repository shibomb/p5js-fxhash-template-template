// [ART]
// by [ARTIST]
// License: [LICENSE]

// --------------------
// params, features
// --------------------
params = {};
function getParams() {
  params.number = 1;
  params.string = "message";
  params.boolean = true;
  params.color = "#ccddeeff";
  params.select = "apple";
  params.bigint = 1;

  params.x = 100;
  params.y = 100;
  params.l = 100;

  // console.log(`params`, params);
}

features = {};
function getFeatures() {
  features.random = Math.floor(random() * 10);
  features.boolean = random() > 0.5;
  features.string = ["A", "B", "C", "D"].at(Math.floor(random() * 4));
  features.paramnum = params.number;

  // console.log(`features`, features);
}

// --------------------
// configs
// --------------------

// canvas type : true: window full / false: square fit with short side
const WINDOW_FULL = true;

// draw once : true: once / false: loop
const DRAW_ONCE = false;

const CAPTURE_FRAMECOUNT = DRAW_ONCE ? 1 : 100;

// --------------------
// p5.js main
// --------------------

function preload() {
  // console.log(`#preload`);

  // init
  getParams();
  getFeatures();

  // preload
  // ...
}

let W, H;
function setupCanvas() {
  if (WINDOW_FULL) {
    W = windowWidth;
    H = windowHeight;
  } else {
    W = min(windowWidth, windowHeight);
    H = W;
  }

  if (frameCount == 0) {
    createCanvas(W, H);
  } else {
    resizeCanvas(W, H);
  }
}

function setup() {
  // console.log(`#setup`);
  setupCanvas();
  background(0);

  // setup
  // ...

  if (DRAW_ONCE) noLoop();
}

function draw() {
  // if (frameCount == 1) console.log(`#draw at frameCount ${frameCount}`);
  background(255);

  // draw
  debugInfo(); // sample
}

function mouseMoved() {
  params.x = mouseX;
  params.y = mouseY;
  params.l = (mouseX / mouseY) * 10;
}

// --------------------
// p5.js util
// --------------------
function windowResized() {
  // console.log(`#windowResized (${windowWidth}, ${windowHeight})`);
  setupCanvas();

  // window resized
  // ...
}

/**
[p] pause / resume
[o] next frame
[0] save gif
[1-4] capture image with pixel density 1-4 
*/
function keyPressed() {
  if (key === "p") {
    if (isLooping()) {
      noLoop();
    } else {
      loop();
    }
  }
  if (key === "o") {
    redraw();
  }

  if (key === "0") {
    saveGif("capture", 5);
  }

  if (["1", "2", "3", "4"].includes(key)) {
    const original = pixelDensity();
    const temp = parseInt(key);
    pixelDensity(temp);
    resizeCanvas(W, H);
    redraw();

    saveCanvas("capture");

    pixelDensity(original);
    resizeCanvas(W, H);
    redraw();
  }
}

// --------------------
// debug
// --------------------
function debugInfo() {
  noStroke();
  fill(params.color);

  text(
    `
W, H:${W}, ${H}
pixelDensity:${pixelDensity()}
frameCount:${frameCount}
`,
    10,
    20
  );

  text(
    `
params:${JSON.stringify(params, null, 4)}
features:${JSON.stringify(features, null, 4)}
`,
    10,
    100
  );

  circle(params.x, params.y, params.l);
}
