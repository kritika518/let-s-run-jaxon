
function preload(){
  //pre-load imagess
  boy_running = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites heres
  boy = createSprite(160,250,120,90);
  boy.addAnimation("running",boy_running);
  boy.scale= 0.1;
}

function draw() {
  background(0);
  drawSprites();
}
