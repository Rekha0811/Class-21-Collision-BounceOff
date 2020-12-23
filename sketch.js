var fixedRect,movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200, 200, 50, 80);
  movingRect = createSprite(400,200,80,30);
  anything = createSprite(100, 200, 50, 80);
  anything.shapeColor = "green";


  b1 = createSprite(400, 600, 50, 50);
  b2 = createSprite(400,200,50,50);

  b1.shapeColor = "purple";
  b2.shapeColor = "yellow";
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";

  b1.velocityY = -3;
  b2.velocityY = 3;
}

function draw() {
  background(255,255,255);  

  movingRect.x = World.mouseX;
  movingRect.y=World.mouseY;

  console.log(movingRect.x,movingRect.y);
  console.log(fixedRect.x,fixedRect.y);
  console.log(movingRect.x -fixedRect.x);
  console.log(fixedRect.width/2+movingRect.width/2);

//collision Algorithm
  if ( isCollided(movingRect,fixedRect) ) {
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";

  }
  else{
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
  
  

  //BounceOff
if ((b1.y -b2.y < b1.height/2+b2.height/2) &&
(b1.y - b2.y  < b1.height/2+b2.height/2))
{
  b1.velocityY = b1.velocityY * (-1);
  b2.velocityY = b2.velocityY * (-1);
}
if ((b1.x -b2.x < b1.width/2+b2.width/2) &&
(b1.x - b2.x  < b1.width/2+b2.width/2))
{
  b1.velocityX = b1.velocityX * (-1);
  b2.velocityX = b2.velocityX * (-1);
}

  drawSprites();
}

