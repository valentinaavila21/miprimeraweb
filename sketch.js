var d; 

function setup() {
  createCanvas(windowWidth, windowHeight).position(0,0).style('z-index','-1');
  colorMode(HSB, 360, 100, 100, 100); // Incluye alfa
  background(197, 80, 95);
}

function draw() {
  d = random(10,60);
  noStroke();
  
  // Niebla colorida, muy transparente
  fill(random(0,360), 100, 100, 20); // alfa=10 → casi transparente
  
  ellipse(mouseX, mouseY, d, d);
}

function keyPressed() {
  if (key === 'p') {
    save('dibujo.jpg');
  }
}
