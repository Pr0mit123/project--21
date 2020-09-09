var thickness,wall;
var bullet,speed,weight;


function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 30, 10);
  bullet.shapeColor = "white"
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);

  speed = random(55,90);
  weight = random(30,52);
  thickness = random(223,321);
}

function draw() {
  background(255,255,255);
  
  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness)

    if(damage>10)
    {
      wall.shapeColor=color(255,0,0);
    }

    if(damage<10)
    {
      wall.shapeColor=color(255,0,0);
    }
  }

  drawSprites();
}

funtion hasCollided (bullet, wall) 
{

 bulletRightEdge=bullet.x+bullet.width;
 wallLeftEdge=wall.x;
 if(bulletRightEdge >= wallLeftEdge)
 {
   return true
 }
   return false;
}