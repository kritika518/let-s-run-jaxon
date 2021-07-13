
function preload(){
  //pre-load imagess
  boy_running = loadAnimation("Runner-1.png","Runner-2.png");
  pathImg = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites heres
  path = createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY =4;
  path.scale=1.2;
 
  boy = createSprite(160,250,120,90);
  boy.addAnimation("running",boy_running);
  boy.scale= 0.1;
}

function draw() {
if(path.y>400){
    path.y=height/2;
  }
  drawSprites();
}
