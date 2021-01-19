var fixedRect, movingRect;
var o1,o2,o3,o4;
function setup() {
  createCanvas(1200,800);
  o1 = createSprite(100, 100, 50, 50);
  o1.shapeColor = "purple";
  o1.debug = true;
  o2 = createSprite(200, 100, 50, 50);
  o2.shapeColor = "pink";
  o2.debug = true;
  o3 = createSprite(300, 100, 50, 50);
  o3.shapeColor = "white";
  o3.debug = true;
  o4= createSprite(400, 100, 50, 50);
  o4.shapeColor = "orange";
  o4.debug = true;

  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
}

function draw() {
  background(0,0,0);  
  if(isTouching(movingRect,o1)) {
  movingRect.shapeColor = "red";
  o1.shapeColor = "red";
  }
  else{
  movingRect.shapeColor = "green";
  o1.shapeColor = "purple";
  }
  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
   
  drawSprites();
}
