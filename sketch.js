 var Mbackground,Mobstacle,marios;
 var MbackgroundImg,MobstacleImg,marioImg,mario1Img,mario_running;
 
 function preload(){
  MbackgroundImg = loadImage("M.background.png");
  MobstacleImg = loadImage("M.obstacle.png");
  mario_running = loadAnimation("mario.png","mario1.png");
}
function setup() {
    createCanvas(400,700);
    Mbackground = createSprite(400,300);
    Mbackground.addImage("M.background",MbackgroundImg);
    Mbackground.scale = 0.3;
    Mbackground.x = Mbackground.width /2;
    Mbackground.velocityX = -5;
    
    Mobstacle = createSprite(350,435);
    Mobstacle.addImage("M.obstacle",MobstacleImg);
    Mobstacle.scale = 0.13;
    Mobstacle.velocityX = -5;
    Mobstacle.x = Mobstacle.width/2;

    marios = createSprite(200,600);
    marios.loadAnimation("running",mario_running);
    marios.scale = 0.5;
    marios.velocityX = 5;
    


 }

function draw() {
 

  if(Mbackground.x < 0){
     Mbackground.x = width/4;
  }
  if(Mobstacle.x < 200){
    Mobstacle.x = width/1;
  }
  
  drawSprites()
}

