const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var scoreX=0
var scoreY=0;
var shot
var target1,target2,target3,target4
var missileSprite
var score=0;
var heart_image
var heartGroup
var counter=3
var hr,mn,sec
var gamestate=0
function preload(){
  bg=loadImage("images/bg.jpeg");
  heart_image=loadImage("images/heart.png");
}



function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;

  dart=new Dart(600,300,80);
  missile=new Missile(1000,200,100,70);

  sling=new constraint({x:1000,y:200},missile.body);
 /* target4=createSprite(600,300,130,130);
  target4.setCollider("circle",0,0,154);
  target4.debug=true;
  target4.shapeColor="orange";

  target3=createSprite(600,300,90,90);
  target3.setCollider("circle",0,0,112);
  target3.debug=true;
  target3.shapeColor="blue";

  target2=createSprite(600,300,50,50);
  target2.setCollider("circle",0,0,70);
  target2.debug=true;
  target2.shapeColor="purple";

  target1=createSprite(600,300,10,10);
  target1.setCollider("circle",0,0,12);
  target1.debug=true;
  target1.shapeColor="yellow";*/

  

  heart1=createSprite(20,50,60,40)
  heart2=createSprite(60,50,60,40)
  heart3=createSprite(100,50,60,40);
  heart1.addImage(heart_image)
  heart2.addImage(heart_image)
  heart3.addImage(heart_image)
  heart1.scale=0.1
  heart2.scale=0.1
  heart3.scale=0.1

  heartGroup=createGroup()
  sec=60
  button=createButton("Start")
  button.position(40,130)

 

}

function draw() {
  background(bg);
  //hr=hour();
  //mn=minute();
 

  textSize(20);
  fill("white") 
  stroke("yellow") 
  text(sec,40,100)
  if (counter===2){
    heart3.destroy();
  }
  if (counter===1){
    heart2.destroy()
  }
  if (counter===0){
    heart1.destroy();
  }
  button.mousePressed(()=>{
    gamestate=1;
     
  })
  if (frameCount %30===0){
    if (gamestate===1){
      sec--
    }
    
  }
 
  Engine.update(engine);
  dart.display();
  fill("White");
  textSize(25);
  text ("score:"+score,1000,100);
  missile.display();
  if (shot){
    shot.display();
  }

  
  drawSprites();
  spawnHeart();

 
 
}

function mouseDragged(){
   Matter.Body.setPosition(missile.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    sling.fly()
    shot=new Shot(missile.body,{x:random(420,770),y:random(100,500)});
   
    Matter.Body.setPosition(missile.body,{x:scoreX,y:scoreY});
   
    var posX=shot.pointB.x
    var posY=shot.pointB.y
    if (posX>590 && posX<610 && posY>285 && posY<315){
      score=score+ 100
    }
    else  if (posX>540 && posX<660 && posY>220 && posY<370){
      score=score+50
    }
    else  if (posX>490&& posX<700 && posY>180 && posY<410){
      score=score+25
    }
    
   else  if (posX>420&& posX<770 && posY>100 && posY<500){
      score=score+5
    }
    for (var i=0;i<heartGroup.length;i++){
      if (posX===heartGroup.get(i).x&& posY===heartGroup.get(i).y){
         counter-=1
      }
    }
   
};


function keyPressed(){
  if (keyCode===32){
    Matter.Body.setPosition(missile.body,{x:1000,y:200})
    sling.bodyB=null
    shot.fly()
    sling.attach(missile.body);
  }
}

function mouseClicked(){
  
  for (var i=0;i<heartGroup.length;i++){
    console.log(Math.round(heartGroup.get(i).x)+":"+Math.round(heartGroup.get(i).y))
    console.log(mouseX+":"+mouseY)
    if (mouseX===Math.round(heartGroup.get(i).x)&& mouseY===Math.round(heartGroup.get(i).y)){
     
    }
  }
 
}

function spawnHeart(){
  if (frameCount %60===0){
    heart=createSprite(random(400,750),random(150,450),20,20);
    heart.addImage(heart_image);
    heart.lifetime=100
    heart.scale=0.1
    heartGroup.add(heart)
  }
  
}
