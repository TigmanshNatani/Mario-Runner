 var Mbackground,Mobstacle,marios,Mcloud1,upboundary,bottomboundary,reset;
 var MbackgroundImg,MobstacleImg,marioImg,mario1Img,mario_running,Mcloud1Img,resetImg;
 

 function preload(){
  MbackgroundImg = loadImage("M.background.png");
  MobstacleImg = loadImage("M.obstacle.png");
  mario_running = loadImage("mario1.png","mario.png");
  Mcloud1Img = loadImage("M.cloud1.png");
  resetImg = loadImage("reset button.png");
}
function setup() {
    createCanvas(400,600);

    Mbackground = createSprite(400,300);
    Mbackground.addImage(MbackgroundImg);
    Mbackground.scale = 0.3;
    
    bottomboundary = createSprite(200,483,400,50);
    bottomboundary.visible = false;

    upboundary = createSprite(200,200,400,50);
    upboundary.visible = false;

    marios = createSprite(100,405,10,10);
    marios.addImage("running",mario_running);
    marios.scale = 0.2;
    
    Mobstacle = createSprite(350,435);
    Mobstacle.addImage(MobstacleImg);
    Mobstacle.scale = 0.13;
     
    Mcloud1 = createSprite(375,200,10,10);
    Mcloud1.addImage(Mcloud1Img);
  
    reset = createSprite(200,125,5,5);
    reset.addImage(resetImg);
    reset.scale = 0.05;
  

 }

function draw() {
  background(100);

  if(keyDown(UP_ARROW)){
    marios.velocityY = -10;
  }
  if(marios.y < 250){
     marios.velocityY = 10;
   }
  if(marios.y > 405){
     marios.velocityY = 0;
   }
  if(keyDown(UP_ARROW)){
   if(marios.y > 405){
     marios.velocityY = -10;
   }
  }
  if(keyDown("space")){
    Mbackground.velocityX = -10;
    Mobstacle.velocityX = -10;
    Mcloud1.velocityX = -5;
  }
  marios.debug === true;
  


  // if mario waill tought the obstacle, then what will happen?
  if(marios.isTouching(Mobstacle)){
   Mbackground.velocityX = -0;
   Mobstacle.velocityX = -0;
   Mcloud1.velocityX = -0;
   marios.velocityY = -0;
   Mobstacle.debug === false;
   textSize(19);
   stroke("red");
   text("OH! You Lost",100,100);
  }
   

  if(Mbackground.x < 0){
     Mbackground.x = width/4;
  }
  if(Mobstacle.x < 0){
    Mobstacle.x = width/1;
  }
  if(Mcloud1.x < 0){
    Mcloud1.x = width/2;
  }
  if(marios.x < 0){
    marios.x = width/2;
  }
  keyPressed();
  drawSprites()
}
function keyPressed(){
  if(reset.mousePressed(reset)){
    marios.x = 0;
    marios.y = 0;
  }

}

