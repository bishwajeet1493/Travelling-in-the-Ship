var sea, seaImg;
var ship, shipImg;

function preload(){
  seaImg = loadImage("sea.png");
  shipImg1 = loadAnimation("ship-1.png","ship-1.png","ship-2.png","ship-1.png");
  shipImg2 = loadAnimation("ship-3.png","ship-3.png","ship-4.png","ship-3.png");
}

function setup(){
  createCanvas(400,400);
  
  //Moving background
  sea = createSprite(400,200);
  sea.addImage(seaImg);
  sea.velocityX = 150;
  sea.scale = 0.4;
  
  //creating boy running
  ship = createSprite(290,200,30,30);
  ship.addAnimation("movingShip",shipImg1);
  ship.scale = 0.20;
  
}

function draw() {
  background(0);
  
  sea.velocityX = -3;
  
  //code to reset the background
  if(sea.x < 0){
    sea.x = sea.width/9;
  }
  
  if(keyDown("space")) {
    ship.addAnimation("movingShip",shipImg2);
  }
  
  drawSprites();
}