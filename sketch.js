const canvasWidth = 960;
const canvasHeight = 500;

const letterA = {
  "cupWidth": 60,
  "cupHeight": 120,
  "foamCurve": 20,
  "spoutAngle": 0,
  "pourSpeed": 6,
  "blendFactor": 8,
  "bloomHeight": 10,
  "splashOffset": 5,
  "steamFlow": 10,
  "rimThickness": 2,
  "offsetx": 0,
  "offsety": 0
}

const letterB = {
  "cupWidth": 70,
  "cupHeight": 120,
  "foamCurve": 15,
  "spoutAngle": 0,
  "pourSpeed": 6,
  "blendFactor": 8,
  "bloomHeight": 20,
  "splashOffset": 5,
  "steamFlow": 10,
  "rimThickness": 2,
  "offsetx": 0,
  "offsety": 0
}

const letterC = {
  "cupWidth": 80,
  "cupHeight": 120,
  "foamCurve": 30,
  "spoutAngle": 0,
  "pourSpeed": 6,
  "blendFactor": 8,
  "bloomHeight": 10,
  "splashOffset": 8,
  "steamFlow": 10,
  "rimThickness": 2,
  "offsetx": 0,
  "offsety": 0
}

const backgroundColor  = "#acf2e7";

const darkGreen  = "#26b29d";
const lightGreen  = "#30dfc4";
const strokeColor  = "#0a2d27";

function setup () {
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  stroke(strokeColor);
  strokeWeight(4);
  noLoop();
}

function draw () {
  background(backgroundColor);

  let center_x = canvasWidth / 2;
  let center_y = canvasHeight / 2;

  drawLetter(center_x - 250, center_y, letterA);
  drawLetter(center_x      , center_y, letterB);
  drawLetter(center_x + 250, center_y, letterC);
}

function drawLetter(posx, posy, letterData) {
  // read espresso parameters
  let cupWidth = letterData["cupWidth"];
  let cupHeight = letterData["cupHeight"];
  let foamCurve = letterData["foamCurve"];
  let pourSpeed = letterData["pourSpeed"];
  let blendFactor = letterData["blendFactor"];
  let bloomHeight = letterData["bloomHeight"];
  let splashOffset = letterData["splashOffset"];
  let rimThickness = letterData["rimThickness"];

  push(); // save current drawing settings
  translate(posx, posy);

  // Optional rim
  if (rimThickness > 0) {
    noFill();
    strokeWeight(rimThickness);
    stroke(darkGreen);
    rectMode(CENTER);
    rect(0, 0, cupWidth + 40, cupHeight + 40, blendFactor);
  }

  // Main Letter Style
  noFill();
  stroke(strokeColor);
  strokeWeight(pourSpeed);
  strokeJoin(ROUND);
  strokeCap(ROUND);

  // For Letter A
  if (letterData === letterA) {
    beginShape();
    vertex(-cupWidth/2, cupHeight/2);
    bezierVertex(-cupWidth/2, -foamCurve, -splashOffset, -cupHeight/2, 0, -cupHeight/2);
    bezierVertex(splashOffset, -cupHeight/2, cupWidth/2, -foamCurve, cupWidth/2, cupHeight/2);
    endShape();

    let crossbarWidth = cupWidth * 0.5;
    line(-crossbarWidth/2, bloomHeight, crossbarWidth/2, bloomHeight);
  }

  // For Letter B
  else if (letterData === letterB) {
    // vertical spine
    line(-cupWidth/2, -cupHeight/2, -cupWidth/2, cupHeight/2);
    // top curve
    beginShape();
    vertex(-cupWidth/2, -cupHeight/2);
    bezierVertex(cupWidth/4, -cupHeight/2, cupWidth/2, -cupHeight/4, -cupWidth/2, 0);
    endShape();
    // bottom curve
    beginShape();
    vertex(-cupWidth/2, 0);
    bezierVertex(cupWidth/4, 0, cupWidth/2, cupHeight/4, -cupWidth/2, cupHeight/2);
    endShape();
  }

  // For Letter C
  else if (letterData === letterC) {
    beginShape();
    vertex(cupWidth/2, -cupHeight/2 + foamCurve);
    bezierVertex(-cupWidth/2, -cupHeight/2 + foamCurve, -cupWidth/2, cupHeight/2 - foamCurve, cupWidth/2, cupHeight/2 - foamCurve);
    endShape();
  }

  pop(); // restore settings
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}