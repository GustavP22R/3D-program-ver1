let vinkel = 0;
let planeSize = 284;
let plank;
let camX = 0;
let camY = 0;
let camZ = 400;
let camTurnSide = 0;
let movementSpeed = 15;

let x = 0;
let y = 0;
let z = 0;

let xPos = 0;
let yPos = 0;
let zPos = -200;

let hostileSpeed = 25;




function setup() 
{
  angleMode(DEGREES);
  createCanvas(400, 400, WEBGL);
  plank = loadImage('plank.png');
  mur = loadImage('mur.png');
  orange = loadImage('orangeman.jpg');
  baseball = loadImage('baseball.jpg');

}

function draw() 
{
  background(80);

  
  noStroke();
  fill(50,230,100);

  //højre plane
  push();
  translate(142,0, 0);
  rotateY(90);
  plane(planeSize+ 200,planeSize);
  pop();

  //venstre plane
  push();
  translate(-142,0, 0);
  rotateY(-90);
  plane(planeSize + 200,planeSize);
  pop();

  //nederste plane
  push();
  translate(0,142,0);
  rotateX(-90);
  plane(planeSize,planeSize + 200);
  pop();

   //øverste plane
   push();
   translate(0,-142,0);
   rotateX(-90);
   plane(planeSize,planeSize + 200);
   pop();

   //bagerste plane
   /*
   push();
   translate(0,0,-143);
   plane(planeSize,planeSize);
   pop();
   */

   camera(camX, camY, camZ + sin(frameCount * 0.01) * 10, camX, camY, camZ, 0, 1, 0);

   //styre cameraet med wasd
   //Venstre - Højre
   if (keyIsDown(65)) 
   {
    camX += -movementSpeed;
   }

   if (keyIsDown(68)) 
   {
    camX += movementSpeed;
   }
 
   //Frem - Tilbage
   if (keyIsDown(87)) 
   {
    camZ += -movementSpeed;
   }

   if (keyIsDown(83)) 
   {
    camZ += movementSpeed;
   }

   //op - ned
   if (keyIsDown(32)) 
   {
    camY += -movementSpeed;
   }

   if (keyIsDown(16)) 
   {
    camY += movementSpeed;
   }


   //parameterfremstilling
   
  zPos = zPos + hostileSpeed;

   for (var t = -5; t < 5; t++) 
   {
   
    push();
    translate(xPos,yPos,zPos);
    texture(orange);
    box(40);
    pop();
   
    if(zPos > 500)
    {
      xPos = random(camX -50, camX + 50);
      yPos = random(camY -50, camY + 50);
      zPos = -200; 
    }
   }
}
  
