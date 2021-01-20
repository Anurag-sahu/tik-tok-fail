function setup() {
  createCanvas(400,400);
  //createSprite(400, 200, 50, 50);
  
}

function draw() {
  background(0,0,0);

  hr = hour();
  min = minute();
  sec = second();

  console.log(hr);
  console.log(min);
  console.log(sec);

  stroke(65,165,215);
  strokeWeight = (7);
  line(0,0,100,0);

  secAngle = map(sec,0,60,0,360);

  drawSprites();
}

function sc(){
  angleMode(DEGREES)
}