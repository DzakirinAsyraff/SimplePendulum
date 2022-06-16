
function setup() {
  width = window.innerWidth;
  height = window.innerHeight;
  createCanvas(width, height);
}

function draw() {
  background(0);

  stroke(255);
  strokeWeight(8);
  line(300,0,300,200);
  circle(300,200,64);
}
