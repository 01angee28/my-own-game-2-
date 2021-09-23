var bg, bgImg;
var player,playerImg;
var coins, coinsImg;
var obstacle1,obstacle1Img;
var obstacle2,obstacle2Img;
var booster,boosterImg;
var wall1,wall2;

function preload () {
 bgImg = loadImage("assets/track.png");
 coinsImg =loadImage("assets/coins.png");
 obstacle1Img =loadImage("assets/obstacle1.png");
 obstacle2Img =loadImage("assets/obstacle2.png");
 boosterImg = loadImage("assets/booster.png");
 playerImg = loadAnimation("assets/boy1.png","assets/boy2.png","assets/boy3.png","assets/boy4.png");
}

function setup()
 {
  createCanvas(550,650);
  bg = createSprite(275,150,600,1000);
  bg.addImage("bg", bgImg);
  bg.scale = 7;
  player = createSprite(275,550,50,50);
  player.shapeColor = "red";
  player.addAnimation("boy",playerImg);
  player.scale = 0.5

  wall1 = createSprite(540,325,10,650);
  wall2 = createSprite(10,325,10,650);
}

function draw() {
  background(0);  
  bg.velocityY = 5;

  if (bg.y > 300 ) {
    bg.y = bg.height/2 
  }

  if (keyIsDown (RIGHT_ARROW)) {
    player.velocityX = 4;
  }

  if (keyIsDown (LEFT_ARROW)) {
    player.velocityX = -4;
  }

  if (keyIsDown (UP_ARROW)){
    player.velocityY = -2;
  }

 
    createEdgeSprites();

    player.collide(wall1);
    player.collide(wall2);

    wall1.visible = false;
    wall2.visible = false;

    spawnCoins();
    spawnObstacles();
    spawnBooster();
    
  drawSprites();
}

function spawnCoins () {
  if (frameCount % 220 === 0){
coins = createSprite(random(100,450),0,10,10);
coins.addImage("power",coinsImg);
coins.scale = 0.2
coins.velocityY = 6;
  }
}

function spawnObstacles (){
  if (frameCount % 200 === 0){
  obstacle1 = createSprite(random(50,400),0,10,10);
  obstacle1.addImage("obst1",obstacle1Img);
  obstacle1.scale = 0.5;
  obstacle1.velocityY = 6;
  obstacle1.lifetime = 100;
  }

  if (frameCount % 160 === 0 ){
  obstacle2 = createSprite(random(50,300),0,10,10);
  obstacle2.addImage("obst1",obstacle2Img);
  obstacle2.scale = 0.5;
  obstacle2.velocityY = 6;
  }
}

function spawnBooster(){
  if (frameCount % 250 === 0){
booster = createSprite(random(300,70),0,10,10);
booster.addImage("boost",boosterImg);
booster.scale = 0.3;
booster.velocityY = 6;
  }
}