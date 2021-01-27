//name spacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//create variables
var hammer, stone;
var ground, rubber, iron;

function setup() {
	createCanvas(1400, 650);

  //create engine
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  stone = new Stone(1000, 260, 60, PI/4);
  hammer = new Hammer(600, 200);
  ground = new Ground(700, 630, 1400, 20);
  ground1 = new Ground(500, 590, 100, 60);
  rubber = new Rubber(800, 0);
  iron = new Iron(1100, 100, 100, 40);
  sand1 = new Sand(300, 100);
  sand2 = new Sand(430, 110);
  sand3 = new Sand(440, 120);
  sand4 = new Sand(450, 130);
  sand5 = new Sand(460, 140);
  sand6 = new Sand(470, 150);
  sand7 = new Sand(480, 160);
  sand8 = new Sand(490, 170);

	//Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background("lightblue");
  Engine.update(engine);

  //display bodies
  stone.display();
  hammer.display();
  ground.display();
  rubber.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();
  ground1.display();
  iron.display();
 
  
}