var d; 

function setup() {
 createCanvas(windowWidth, windowHeight).position(0,0).style('z-index','-1');
 colorMode(RGB, 255, 255, 255, 255);
  background(26,182,240,50);
}

function draw() {
  d = random(10,60)
  colorMode(HSB,360,100,100);
  noStroke();
  fill(random(0,360),100,100);
  ellipse(mouseX,mouseY,d,d)
}

function keyPressed() {
  if (key === 'p') {
    save('dibujo.jpg');
  }
}
 
