
  
var img;
 
//this is where the images are loaded in, I ended up finding how to do this at the following link:http://coursescript.com/notes/interactivecomputing/images/
//where i copied the code and how to load in the images
function preload()
{
  // load image
  Ted = loadImage("Teddie.png");
  Mona = loadImage("Morgana.png");
  Koro = loadImage("Koro.png");
}
 
//this is for the movement of the dog and cat, lifted from the bouncing ball example in class, which is why the first one is surfer, and the second is kitten because it was a variable I could easily remember
let surfer = {
  x : 100,
  y : 100,
  speed : 3
}

let kitten = {
  x : 50,
  y : 50,
  xSpeed : 3,
  ySpeed : 2
}

//just the creation of the canvas
function setup() 
{
  // set canvas size
  createCanvas(1920, 1080); 
}
 
function draw() 
{
  //setting the background and how much of a shadow there would be behind each of the images, and parameters for where the bear would teleport around
  background(2,20,20,5);
   if (surfer.x>width){
      surfer.x=50
      surfer.y=50

  }

  // display image (img, x, y) (this is the base code from the site I linked to earlier on how to display the images)
  //Here is the code for the teleporting bear, what was originally code that just made him vibrate uncontrollably, with suggestion from a classmate turned into teleporting bear. I also made 3 of them so there would be more bears with more residual shadows
  image(Ted, 5000*random()+surfer.x, 500*random()+surfer.y, 200,200);
  image(Ted, 4000*random()+surfer.x, 200*random()+surfer.y, 200,200);

  image(Ted, 5000*random()+surfer.x, 500*random()+surfer.y, 200,200);
  
//here are the parameters for the bouncing cat, set to bounce off the walls of the 1920x1080 screen size
 if (kitten.x>1860){

    kitten.xSpeed = -kitten.xSpeed;
  }
  if (kitten.y > 900){
    kitten.ySpeed = -kitten.ySpeed;
  }
  if (kitten.y < 0){
    kitten.ySpeed = -kitten.ySpeed;
  }
  if (kitten.x<0){

    kitten.xSpeed = -kitten.xSpeed;
  }
    surfer.x+=surfer.x+12;
  surfer.y+=surfer.y+12;

  //these are for where the dogs show up, I initially had them covering the whole screen in one line, but I decided I'd rather have gaps in between
  image(Koro, 0,kitten.y,100,100)
  image(Koro, 200,kitten.y,100,100)
  image(Koro, 400,kitten.y,100,100)
  image(Koro, 600,kitten.y,100,100)
  image(Koro, 800,kitten.y,100,100)
  image(Koro, 1000,kitten.y,100,100)
  image(Koro, 1200,kitten.y,100,100)
  image(Koro, 1400,kitten.y,100,100)
  image(Koro, 1600,kitten.y,100,100)
  image(Koro, 1800,kitten.y,100,100)
  image(Koro, 2000,kitten.y,100,100)

  //finally, the code that summons the cat and makes him bounce around the screen
  image(Mona,kitten.x,kitten.y,100,150)
  kitten.x+=kitten.xSpeed;
  kitten.y+=kitten.ySpeed;



}
