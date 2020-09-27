var myEngine , myWorld ;

var box1 , box2 , ground;

const Engine= Matter. Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;







function setup() {
  createCanvas(400,400);

  myEngine = Engine . create ();

  myWorld = myEngine . world;

  box1 = new Box(200,300,50,50);

  ground = new Ground(200,380,400,20);

  box2 = new Box (240,100,50,100);

  
}


function draw() {
  background(0);  

  Engine.update (myEngine);

  box1.display ();

  ground.display ();

  box2.display ();
  
}