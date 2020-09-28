var hr, min, sec;
var secAngle;
var con;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background("black");

  sec = second();
  min = minute();
  hr = hour();

  secAngle = map(sec, 0, 60, 0, 360);
  minAngle = map(min, 0, 60, 0, 360);
  hrAngle = map(hr % 12, 0, 12, 0, 360);

  translate(300, 300);
  angleMode(DEGREES);
  rotate(270);

  push();
  rotate(secAngle);
  stroke(255, 0, 0);
  strokeWeight(7);
  line(0, 0, 175, 0);
  pop();

  push();
  rotate(minAngle);
  stroke(0, 255, 0);
  strokeWeight(7);
  line(0, 0, 150, 0);
  pop();

  push();
  rotate(hrAngle);
  stroke(0, 0, 255);
  strokeWeight(7);
  line(0, 0, 125, 0);
  pop();
  noFill();
  strokeWeight(10);
  stroke("red");
  arc(0, 0, 435, 435, 0, secAngle);
  stroke("green");
  arc(0, 0, 415, 415, 0, minAngle);
  stroke("blue");
  arc(0, 0, 395, 395, 0, hrAngle);
  console.log(hr + ":" + min + ":" + sec);
}
