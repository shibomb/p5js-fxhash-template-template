// [ART]
// by [ARTIST]
// License: [LICENSE]

// --------------------
// fx(hash) utils
// --------------------

function initRandomSeed() {
  const seed = ~~($fx.rand() * 123456789 * $fx.iteration);
  randomSeed(seed);
  noiseSeed(seed);

  // console.log(`seed`, seed);
}

// --------------------
// params, features
// --------------------
params = {};
function getParams() {
  // params are defined in index.js
  params.number = $fx.getParam(`number_id`);
  params.string = $fx.getParam(`string_id`);
  params.boolean = $fx.getParam(`boolean_id`);
  params.color = $fx.getParam(`color_id`).hex.rgba;
  params.select = $fx.getParam(`select_id`);
  params.bigint = $fx.getParam(`bigint_id`);

  params.x = $fx.getParam(`x_id`);
  params.y = $fx.getParam(`y_id`);
  params.l = $fx.getParam(`l_id`);

  // console.log(`params`, params);
}

features = {};
function getFeatures() {
  // features are defined in index.js
  features.random = $fx.getFeature(`A random feature`);
  features.boolean = $fx.getFeature(`A random boolean`);
  features.string = $fx.getFeature(`A random string`);
  features.paramnum = $fx.getFeature(`Feature from params, its a number`);

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
  initRandomSeed();
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

  // capture by fx(hash)
  if (frameCount == CAPTURE_FRAMECOUNT) {
    // console.log(`Call $fx.preview() at frameCount ${frameCount}`);
    $fx.preview();
  }
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
// fx(params) code-driven sample
// --------------------
function mouseMoved() {
  if ($fx.context == "minting") {
    $fx.emit("params:update", {
      // x_id: mouseX,
      y_id: mouseY,
    });
  }
}

$fx.on(
  "params:update",
  // do nothing to check the params received
  () => {},
  // once the update is fully registered, update the view
  () => {
    if ($fx.context == "minting") {
      getParams();
      redraw();
    }
  }
);

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
hash: ${$fx.hash}
minter: ${$fx.minter}
iteration: ${$fx.iteration}
inputBytes: ${$fx.inputBytes}
context: ${$fx.context}
params:${$fx.stringifyParams($fx.getRawParams())}
features:${$fx.stringifyParams($fx.getFeatures())}
`,
    10,
    100
  );

  circle(params.x, params.y, params.l);
  // circle($fx.getParam(`x_id`), $fx.getParam(`y_id`), $fx.getParam(`l_id`));
}
