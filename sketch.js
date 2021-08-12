var xyz =1;
var box;

function setup() {
  createCanvas(400,400);

  var abc=5;
   box = createSprite(200,200,50,50);
   box.shapeColor = "orange";
}

function draw() 
{
  background('red');
  
  if(keyIsDown(DOWN_ARROW)){

    box.y += 5;

  }
  
  if(keyIsDown(UP_ARROW)){

    box.y -= 5;

  }
  if(keyIsDown(LEFT_ARROW)){

    box.x -= 5;

  }

  if(keyIsDown(RIGHT_ARROW)){

    box.x += 5;

  }
  drawSprites();
   
  

}













