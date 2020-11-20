var fixedRect, movingRect,object1,object2,object3,object4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(800,400,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  object1=createSprite(300,100,50,50);
  object1.shapeColor="blue";
  object2=createSprite(400,100,50,50);
  object2.shapeColor="blue";
  object3=createSprite(500,100,50,50);
  object3.shapeColor="blue";
  object4=createSprite(600,100,50,50);
  object4.shapeColor="blue";
}

function draw() {
  background(0,0,0);  
 // movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;
  movingRect.velocityX=-2
  fixedRect.velocityX=2
  if(isTouching(object3,movingRect)){
    movingRect.shapeColor="red";
    object3.shapeColor = "red";
  }else {
    object3.shapeColor = "green";
    movingRect.shapeColor = "green";
  }

 bounceoff(fixedRect,movingRect);
  drawSprites();
}
