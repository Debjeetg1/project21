var bullet1 , bullet2 , bullet3;
var wall1 , wall2 , wall3;
var border1 , border2 , border3;
var speed , weight;
var Deformation;
function setup()
{
  createCanvas(1500 , 500);
  
  thickness = Math.round(random(22, 83))
  
  bullet1 = createSprite(200 , 80 , 30 ,5);
  bullet1.shapeColor = "white";

  bullet2 = createSprite(200 , 235 , 30 , 5);
  bullet2 .shapeColor = "white";

  bullet3 = createSprite(200 ,390 ,30 ,5);
  bullet3.shapeColor = "white";

  
  wall1 = createSprite(1430 , 60 , thickness , 100);
  wall1.shapeColor = "white";

  wall2 = createSprite(1430 , 215 , thickness , 100);
  wall2.shapeColor = "white";

  wall3 = createSprite(1430 , 370 , thickness,100);
  wall3.shapeColor = "white";


  border1 = createSprite(750 , 137 , 1500 , 5);
  border1.shapeColor = "white";

  border2 = createSprite(750 , 293 , 1500 , 5);
  border2.shapeColor = "white";

  border3 = createSprite(750 , 458  , 1500 , 5);
  border3.shapeColor = "white";

 speed = Math.round(random(223 , 321));
 weight = Math.round(random(30 , 52));

 bullet1.velocityX = speed;
 bullet2.velocityX = speed;
 bullet3.velocityX = speed;

 bullet1.weight = weight;
 bullet2.weight = weight;
 bullet3.weight = weight;

Deformation = 0.5 *weight * speed * speed /(thickness * thickness * thickness);

}

function draw()
{
  background("black");

 if(isTouching1(bullet1,wall1)||
    isTouching1(bullet2,wall2)||
    isTouching1(bullet2,wall3))
{    
 {
   if(Deformation < 10)
   {
    wall1.shapeColor = "green";
    wall2.shapeColor = "green";
    wall3.shapeColor = "green";

    bullet1.velocityX = 0;
    bullet2.velocityX = 0;
    bullet3.velocityX = 0;

   }
   if(Deformation > 10)
   {
    wall1.shapeColor = "red";
    wall2.shapeColor = "red";
    wall3.shapeColor = "red";

    bullet1.velocityX = 0;
    bullet2.velocityX = 0;
    bullet3.velocityX = 0;
   }
 }
} 


  drawSprites();
}