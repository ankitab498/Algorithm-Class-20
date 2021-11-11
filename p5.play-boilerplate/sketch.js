function setup() {

  createCanvas(800,400);

  moving = createSprite(400, 200, 50, 50);

  fixed = createSprite(400, 200, 70, 50);
}

function draw() {
  background(0);  

  moving.x = mouseX
  moving.y = mouseY

  console.log(moving.y - fixed.y )

  if(moving.x - fixed.x < (moving.width + fixed.width)/2 &&
    fixed.x - moving.x < (moving.width + fixed.width)/2 &&
    moving.y - fixed.y < (moving.height + fixed.height)/2 &&
    fixed.y - moving.y < (moving.height + fixed.height)/2 
  ){
    moving.shapeColor = "red"
    fixed.shapeColor = "red"
  }
  else{
    moving.shapeColor = "white"
    fixed.shapeColor = "white"
  }

  drawSprites();
}

//moving.x - fixed.x < (moving.width + fixed.width)/2  ---> right edge of fixed
//fixed.x - moving.x < (moving.width + fixed.width)/2  ---> left

//moving.y - fixed.y < (moving.height + fixed.height)/2 --> bottom
//fixed.y - moving.y < (moving.height + fixed.height)/2  --> top
