var gameState = 0
var runner,runnerImg;
var ground;
var cloud,cloudImg;
var obstacles,obstacleImg1,obstacleImg2;

function preload() {
  cloudImg = loadImage("sprites/cloud2.png");
  obstacleImg1 = loadImage("new obstacle1.png");
  obstacleImg2 = loadImage("new obstacle2.png");
  obstacleImg3 = loadImage("obstacle3.png");
  running = loadAnimation("sprites/runner1.png","sprites/runner2.png","sprites/runner3.png","sprites/runner4.png","sprites/runner5.png","sprites/runner6.png","sprites/runner7.png","sprites/runner8.png","sprites/runner9.png");
  runnerJ = loadImage("sprites/wood1.png");
}

function setup(){
  createCanvas(840,390)

  score = 0
  
  cloud = createSprite(1000,30,25,25)
  cloud.scale = 0.8
  cloud.addImage(cloudImg)

  //obstacles = createSprite(800,300,20,20);
  //obstacles.scale = 0.9
  //obstacles.addImage(obstacleImg1)


  obstacles2 = createSprite(1120,305,20,20);
  obstacles2.addImage(obstacleImg2);


  obstacles3 = createSprite(2000,305,20,20);
  obstacles3.addImage(obstacleImg3);
  obstacles3.scale = 0.2

  obstacles4 = createSprite(2095,305,20,20);
  obstacles4.addImage(obstacleImg3);

  runner = createSprite(55,200,20,20)
  runner.addAnimation("RUniNG",running)
  runner.scale = 0.4
  runner.depth = 0.15
  runner.velocityX = 4
  
  ground = createSprite(420,355,100000000,69)
  ground.shapeColor = rgb(80,80,800)
  ground.depth = 0.10
  
}

function draw(){
  background(200)

  fill(23,55,100)
  textSize(15)
  text("Score:" + score,runner.x+120,95)
   
  camera.position.x = runner.x

 // if(runner.x-obstacles.x>400){
 // obstacles.x = runner.x+400 
 // }

  if(runner.x-obstacles2.x>400){
    obstacles2.x = runner.x+800 
   }

  if(runner.x-obstacles3.x>400){
    obstacles3.x = runner.x-450
  }

  if(frameCount%40 === 0){
    score = score+1
  }

  if(keyDown("SPACE")){
    runner.addImage(runnerJ) 
    runner.velocityY = -8

  }

  runner.velocityY = runner.velocityY - -0.6
  runner.collide(ground)

  if(runner.isTouching(obstacles)){
    gameState = 2
    console.log(gameState)
  }

  //if(gameState === 2){
  //  runner.velocityX = 0;
  //  obstacles.velocityX = 0;
   // CLOUD.velocityX = 0;
  //}
  
  drawSprites();
  
}

