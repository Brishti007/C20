function setup() {
  createCanvas(800,400);
 rectA = createSprite(400, 200, 50, 50);
 rectB = createSprite(200,200,80,80);

 rectA.shapeColor = "purple";
 rectB.shapeColor = "purple";

}

function draw() {
  background(255,255,255); 
  
  rectA.x = World.mouseX;
  rectA.y = World.mouseY;

if(rectA.x - rectB.x < rectA.width/2 + rectB.width/2
  &&
  rectB.x - rectA.x < rectA.width/2 + rectB.width/2

&&

  rectA.y - rectB.y < rectA.height/2 + rectB.height/2
  &&
  rectB.y - rectA.y < rectA.height/2 + rectB.height/2


  )
{

  rectA.shapeColor = "red";
  rectB.shapeColor = "red";
 
}

else

{

  rectA.shapeColor = "purple";
  rectB.shapeColor = "purple";
 
}

  drawSprites();
}