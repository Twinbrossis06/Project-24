
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var box,box1,box2;
var ground;  



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine= Engine.create();
	world = engine.world;
	Engine.run(engine);

	box=createSprite(610,660,200,20);
	box.shapeColor=color("lime");
	
	box1=createSprite(520,640,20,40);
	box1.shapeColor=color("lime");
	
	box2=createSprite(700,640,20,40);
	box2.shapeColor=color("lime");

	paper =new Paper(100,300,100);
	
	
	ground =createSprite(400,670,4000,20);



  
}


function draw() {
  rectMode(CENTER);
  background(0);
 paper.display();
  drawSprites();
 
}
function keyPressed(){
if(keyCode === UP_ARROW)
{
	Matter.Body.applyFroce(Paper.body,Paper.body.position,{x:85,y:-85});
}
}


