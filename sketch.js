var d; 

function setup() {
 createCanvas(windowWidth, windowHeight).position(0,0).style('z-index','-1');
  background(26,182,240);
}

function draw() {
  d = random(10,60)
  colorMode(HSB,360,100,100);
  fill(random(0,360),100,100);
  ellipse(mouseX,mouseY,d,d)
}

function keyPressed() {
  if (key === 'p') {
    save('dibujo.jpg');
  }
}
 
