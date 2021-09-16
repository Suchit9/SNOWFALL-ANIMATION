var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 

var backgroundIMG;
var crystl1,crystl2;
var particles = [];
var engine;
var world;
function preload(){
  backgroundIMG=loadImage("snow2.jpg");
  crystl1=loadImage("snow4.webp");
  crystl2=loadImage("snow5.webp");
}

function setup() {
  createCanvas(800,400);

  createSprite(400, 200, 50, 50);

  engine = Engine.create();
  world = engine.world;
}

function draw() {
  background(backgroundIMG); 
  Engine.update(engine);

    particles.push(new Snow(random(0,800),0))
  
  
    //display the particles 
    for (var k = 0; k < particles.length; k++) {
      particles[k].display();
    }

  drawSprites();
}