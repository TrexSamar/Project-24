
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var plane;
var stone;
var rubber;
var hammer;

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	hammer = new hammer(500, 320, 70, 100);
	stone = new stone(300, 450, 60, 60);
	rubber = new rubber(200, 300, 40, 40);
	plane = new plane(600, height, 800, 20 )
 
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

hammer.display();
stone.display();
rubber.display();
plane.display();













  drawSprites();
 
}



