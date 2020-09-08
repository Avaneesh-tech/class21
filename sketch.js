var fixedRect, movingRect,object1,object2,object3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
object1=createSprite(200,400,30,50);
object1.shapeColor="yellow";
object2=createSprite(100,200,30,50);
object2.shapeColor="yellow";
object3=createSprite(300,300,800,50);
object3.shapeColor="yellow";
  object1.velocityY = -5;
//object2.velocityY = +5;
}

function draw() {
  background(0,0,0)
bounceoff(object1,object2);
bounceoff(object1,object3);

  
  drawSprites();
}
