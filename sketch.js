
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var ball1, ball2, ball3, ball4, ball5;
var rope1, rope2, rope3, rope4, rope5;
var holder, holder1,holder2,holder3,holder4,holder5;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	holder=new Roof(500,100,400,10);
	holder1=new Roof(400,100,50,10);
	holder2=new Roof(450,100,50,10);
	holder3=new Roof(500,100,50,10);
	holder4=new Roof(550,100,50,10);
	holder5=new Roof(600,100,50,10);

	ball1=new Bob(400,300,50);
	ball2=new Bob(450,300,50);
	ball3=new Bob(500,300,50);
	ball4=new Bob(550,300,50);
	ball5=new Bob(600,300,50);

	rope1=new Rope (ball1, holder1, 0, 200);
	rope2=new Rope (ball2, holder2, 0, 200);
	rope3=new Rope (ball3, holder3, 0, 200);
	rope4=new Rope (ball4, holder4, 0, 200);
	rope5=new Rope (ball5, holder5, 0, 200);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("gold");
  
  holder.display()
  
  ball1.display()
  ball2.display()
  ball3.display()
  ball4.display()
  ball5.display()
  
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()

  drawSprites();
} 

function keyPressed(){
	if (keyCode===UP_ARROW){

		Body.translate(ball1.body, {x:-50, y:-10})

	}
}