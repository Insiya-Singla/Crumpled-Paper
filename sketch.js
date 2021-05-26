
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject,engine;
var world;
var paperObject;
var paper;


function setup() {
	createCanvas(1200, 400);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	

	groundObject=new ground(600,400);
	dustbinObj=new dustbin(1000,450);
    paperObject =new Paper(40,40,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(100);
 

  groundObject.display();
  dustbinObj.display();
  paperObject.display();

}

function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	}
}

