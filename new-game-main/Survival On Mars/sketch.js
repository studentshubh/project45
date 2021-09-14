var play = 1;
var end = 0;
var gameState = play;
var runner , runnerImage;
var ufo , ufoImage;
var background , backgroundImage;
var gun , gunImage;
var ufoGroup;
var bulletGroup
var score = 0;


function preload(){
runnerImage = loadImage("Helicopter.png");
ufoImage = loadImage("Spaceship for WHJ.png");
backgroundImage = loadImage("myrunninggame.jpg");
gunImage = loadImage("Minigun.png");

}

function draw(){   
if (gameState == play){
    spawnufo();
if (background.x < 250){
        background.x = background.width/2;
    }
if (keyDown("space")){
        spawnbullet();
    }
runner.y = World.mouseY;
gun.y = runner.y;
if (bulletGroup.isTouching(ufoGroup)){
    ufoGroup.destroyEach();
    bulletGroup.destroyEach();
}     
if (ufoGroup.isTouching(runner)){
    gameState = end;
   
}
}
else if (gameState == end){
    runner.destroy();
    gun.destroy();
    ufoGroup.destroyEach();
    bulletGroup.destroyEach();
    background.velocityX=0
    text("game over" ,300,100)
    console.log("end");
}
drawSprites();
}

function setup(){
createCanvas(800,200);
background = createSprite(285,100);
background.addImage("shubh", backgroundImage );
background.velocityX = -1;
ufoGroup = new Group();
bulletGroup = new Group();
runner = createSprite(45,135);
runner.addImage("soham", runnerImage);
runner.scale = 0.03;
gun = createSprite(50,135);
gun.addImage("yash", gunImage);
gun.scale = 0.07;
}

function spawnufo(){
if (frameCount % 100 == 0){
ufo = createSprite(500,120);
ufo.y = Math.round(random (10,120));
ufo.addImage("arti", ufoImage );
ufo.scale = 0.03;
ufo.velocityX = -1;
ufo.lifetime = 600;
ufoGroup.add(ufo);
}
}

function spawnbullet(){
var bullet = createSprite(100,100,10,2);
bullet.shapeColor = "red";
bullet.x = 135;
bullet.y = gun.y;
bullet.velocityX = 4;
bullet.lifetime = 100;
bulletGroup.add(bullet);
return bullet;

}