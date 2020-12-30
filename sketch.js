
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var bob1,bob2,bob3,bob4,bob5;
var roof1;
var rope1;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  bob1=new Bob(460,400,70);
  bob2=new Bob(530,400,70);
  bob3=new Bob(600,400,70);
  bob4=new Bob(670,400,70);
  bob5=new Bob(740,400,70);
  roof1=new Roof(600,100,400,20);
  
  
 
  var options={
	  bodyA: bob1.body,
	  bodyB: roof1.body,
	  stiffness:0.04,
	  length:10
  }
  var chain = Constraint.create(options);
  World.add(world,chain);
  var options={
	  bodyA: bob1.body,
	  bodyB: roof1.body,
	  stiffness:0.04,
	  length:10
  }
  var chain = Constraint.create(options);
  World.add(world,chain);
  var options1={
	  bodyA: bob2.body,
	  bodyB: roof1.body,
	  stiffness:0.04,
	  length:10
  }
  var chain1 = Constraint.create(options1);
  World.add(world,chain1);
  var options2={
	  bodyA: bob3.body,
	  bodyB: roof1.body,
	  stiffness:0.04,
	  length:10
  }
  var chain2 = Constraint.create(options2);
  World.add(world,chain2);
  var options3={
	  bodyA: bob4.body,
	  bodyB: roof1.body,
	  stiffness:0.04,
	  length:10
  }
  var chain3 = Constraint.create(options3);
  World.add(world,chain3);
  var options4={
	  bodyA: bob5.body,
	  bodyB: roof1.body,
	  stiffness:0.04,
	  length:10
  }
  var chain4 = Constraint.create(options4);
  World.add(world,chain4);

  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  strokeWeight(3);
  line(bob1.body.position.x,bob1.body.position.y,460,100);
  line(bob2.body.position.x,bob2.body.position.y,530,100);
  line(bob3.body.position.x,bob3.body.position.y,600,100);
  line(bob4.body.position.x,bob4.body.position.y,670,100);
  line(bob5.body.position.x,bob5.body.position.y,740,100);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof1.display();
 keyPressed();
  drawSprites();
 
}
function keyPressed(){
  if (keyCode===(32)){
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-730,y:100});
  }
}


