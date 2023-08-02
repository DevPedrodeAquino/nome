
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var block1, block2, block3;

var plane

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.

	var block1_options = {
		restitution: 0.5,
		frictionAir: 0.02,
	} 
	
	var block2_options = {
		restitution: 0.7,
		frictionAir: 0.1
	}
	
	var block3_options = {
		restitution: 0.01,
		frictionAir: 0.3,
	}
	
	var plane_options = {
		isStatic: true
	}

block1 = Bodies.circle(220, 100, 100, block1_options);
World.add(world,block1);

block2 = Bodies.rectangle(400, 300, 100, 100, block2_options);
World.add(world,block2);

block3 = Bodies.rectangle(350, 50, 10, 10, block3_options);
World.add(world,block3);

plane = Bodies.rectangle(400, 680, 800, 20, plane_options);
World.add(world,plane);

rectMode(CENTER);
ellipseMode(RADIUS);

}


function draw() {

  background(0);
  Engine.update(engine);

ellipse(block1.position.x, block1.position.y,60);
rect(block2.position.x, block2.position.y,60,60);
rect(block3.position.x, block3.position.y,60,60);
rect(plane.position.x, plane.position.y,800,20);

  drawSprites();
 
}



