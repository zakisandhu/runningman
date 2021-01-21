//add variables
var path,boy,cash,diamonds,jwellery,sword,ruby, ending;
var pathImg,boyImg,cashImg,diamondsImg,jwelleryImg,swordImg, endImg, rubyImg;
var treasureCollection = 0;
var cashG,diamondsG,jwelleryG,swordG, rubyG;

var PLAY=1;
var END=0;
var gameState=PLAY;

function preload(){
  //add animations and images
  pathImg = loadImage("Road.png");
  
  boyImg = loadAnimation("runner1.png","runner2.png");
  
  cashImg = loadImage("cash.png");
  
  diamondsImg = loadImage("diamonds.png");
  
  jwelleryImg = loadImage("jwell.png");
  
  swordImg = loadImage("sword.png");
  
  endImg =loadImage("gameOver.png");
  
  rubyImg=loadImage("ruby.png");
  
}

function setup(){
  
  createCanvas(400,400);
  
  //Moving background
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 5;


  //creating boy running
  boy = createSprite(70,330,20,20);
  boy.addAnimation("Running",boyImg);
  boy.scale=0.08;
  
  
  // add the treasure sprites to groups
  cashG=new Group();
  diamondsG=new Group();
  jwelleryG=new Group();
  swordG=new Group();
  rubyG=new Group();
  
  ending=createSprite(200,200,10,10);
  ending.addImage(endImg);
  ending.scale=0.8;

}

function draw() {
  
  background(0);
  
  //let boy move with mouseX
  boy.x = World.mouseX;
  
  
  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  edges= createEdgeSprites();
  boy.collide(edges);
  
  if(gameState===PLAY){
  
  ending.visible=false;
  //boy.debug=true;
    
  //add the functions
  createCash();
  createDiamonds();
  createJwellery();
  createSword();
  createRuby();
  
  //if boy is touching any treasure
    if (cashG.isTouching(boy)) {
      cashG.destroyEach();
      treasureCollection=treasureCollection+50;
    }
    else if (diamondsG.isTouching(boy)) {
      diamondsG.destroyEach();
      treasureCollection=treasureCollection+150;
      
    }else if(jwelleryG.isTouching(boy)) {
      jwelleryG.destroyEach();
      treasureCollection=treasureCollection+75;
      
    }else if (rubyG.isTouching(boy)){
      rubyG.destroyEach();
      treasureCollection=treasureCollection+100;
    }
    else if(swordG.isTouching(boy)) {
      gameState=END;
    }
  }
  else if (gameState===END){
  ending.visible=true;
  boy.lifetime=1;
  swordG.destroyEach();
  rubyG.destroyEach();
  jwelleryG.destroyEach();
  diamondsG.destroyEach();
  cashG.destroyEach();
  path.velocityY=0;
  swordG.setVelocityYEach(0);
  rubyG.setVelocityYEach(0);
  jwelleryG.setVelocityYEach(0);
  diamondsG.setVelocityYEach(0);
  cashG.setVelocityYEach(0);
  }
  
            
  

  drawSprites();
  textSize(20);
  fill(255);
  text("Treasure: "+ treasureCollection,150,30);

}

function createCash() {
  if (World.frameCount % 100 == 0) {
  var cash = createSprite(Math.round(random(50, 350),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.12;
  cash.velocityY = 3;
  cash.lifetime = 150;
  cashG.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 120 == 0) {
  var diamonds = createSprite(Math.round(random(50, 350),40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.03;
  diamonds.velocityY = 3;
  diamonds.lifetime = 150;
  diamondsG.add(diamonds);
}
}

function createJwellery() {
  if (World.frameCount % 140 == 0) {
  var jwellery = createSprite(Math.round(random(50, 350),40, 10, 10));
  jwellery.addImage(jwelleryImg);
  jwellery.scale=0.13;
  jwellery.velocityY = 3;
  jwellery.lifetime = 150;
  jwelleryG.add(jwellery);
  }
}

function createSword(){
  if (World.frameCount % 170 == 0) {
  var sword = createSprite(Math.round(random(50,  350),40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.1;
  sword.velocityY = 3;
  sword.lifetime = 150;
  swordG.add(sword);
  }
}
function createRuby(){
  if (World.frameCount % 210 == 0){
var ruby= createSprite(Math.round(random(50,350),40,10,10))
  
  ruby.addImage(rubyImg);
  ruby.scale=0.1;
  ruby.velocityY=3;
  ruby.lifetime=150;
  rubyG.add(ruby);
  }
}
