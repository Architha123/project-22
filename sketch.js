const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var ball1 , ball2, ball3, ball4, ball5;
var con,con1,con2,con3,con4;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}
	var ball_options={
   		restitution : 0.1
	}

	roof = Bodies.rectangle(200,100,230,20,roof_options);
    World.add(world,roof);
	ball1=Bodies.circle(120,300,30,ball_options);
	World.add(world,ball1);
	ball2=Bodies.circle(135,300,30,ball_options);
	World.add(world,ball2);

	ball3=Bodies.circle(150,300,30,ball_options);
	World.add(world,ball3);

	ball4=Bodies.circle(180,300,30,ball_options);
	World.add(world,ball4);

	ball5=Bodies.circle(190,300,30,ball_options);
	World.add(world,ball5);


	Engine.run(engine);
	con = Matter.Constraint.create({
		pointA : {x : 120, y : 100},
		bodyB : ball1,
		//pointB : {x : 0, y : 0},
		length : 200,
		stiffness : 0.1
	  });
	  World.add(world,con);
	
	  con1 = Matter.Constraint.create({
		//bodyA : ball2,
		pointA : {x : 150, y : 100},
		bodyB : ball2,
		//pointB : {x : 0, y : 0},
		length : 200,
		stiffness : 0.1
	  });

	  World.add(world,con1);
	  con2 = Matter.Constraint.create({
		pointA : {x : 180, y : 100},
		bodyB : ball3,
		pointB : {x : 0, y : 0},
		length : 200,
		stiffness : 0.1
	  });
	  World.add(world,con2);
  
	  con3 = Matter.Constraint.create({
		pointA : {x : 240, y : 100},
		bodyB : ball4,
		pointB : {x : 0, y : 0},
		length : 200,
		stiffness : 0.1
	  });
	  World.add(world,con3);
	
	  con4 = Matter.Constraint.create({
		pointA : {x : 270, y : 100},
		bodyB : ball5,
		pointB : {x : 0, y : 0},
		length : 200,
		stiffness : 0.1
	  });
	  World.add(world,con4);

	  
	  
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);
  


  //call display() to show ropes here

  
  //create ellipse shape for multiple bobs here
  ellipse(ball1.position.x,ball1.position.y,60);
  ellipse(ball2.position.x,ball2.position.y,60);

  ellipse(ball3.position.x,ball3.position.y,60);

  ellipse(ball4.position.x,ball4.position.y,60);

  ellipse(ball5.position.x,ball5.position.y,60);
 
  //push();
  //stroke(255);
  //strokeWeight(2);
  line(con.pointA.x,con.pointA.y,ball1.position.x,ball1.position.y);
  line(con1.pointA.x,con1.pointA.y,ball2.position.x,ball2.position.y);
line(con2.pointA.x,con2.pointA.y,ball3.position.x,ball3.position.y);
  line(con3.pointA.x,con3.pointA.y,ball4.position.x,ball4.position.y);
  line(con4.pointA.x,con4.pointA.y,ball5.position.x,ball5.position.y);
  //op();

}


//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball1,{x :0,y : 0},{x : 0.05,y : 0});
	}
}
