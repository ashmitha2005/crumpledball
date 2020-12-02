var groundobj, dustbinobj, paperobj;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundobj = new ground(width/2,670,width,20);
	paperobj = new Paper(200,450,40);
	dustbinobj = new dustbin(1200,650);
	
	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  });

	

  
	  Engine.run(engine);



  
}


function draw() {
  rectMode(CENTER);
  background(0);
  groundobj.display();
  paperobj.display();
  dustbinobj.display();
 
  
 
}


function keyPressed(){
	if(keyCode === UP_ARROW){
     Matter.Body.applyForce(paperobj.body,paperobj.body.position,{x:85,y:-85});
	}
}














