const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var tree,ground;
var boyImg,elastic,stone,launcher;
var engine, world;
function preload()
{
	boyImg=loadImage("sprites/boy.png");
}

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(400,695,1600,10);
	stone=new Stone(140,530,50);
	tree=new Tree(950,450,500);
	mango1=new Mango(800,400,40);
	mango2=new Mango(750,350,40);
	mango3=new Mango(750,400,40);
	mango4=new Mango(850,300,40);
	mango5=new Mango(900,350,40);
	mango6=new Mango(950,270,40);
	mango7=new Mango(1000,360,40);
	mango8=new Mango(1050,390,40);
	mango9=new Mango(1100,350,40);
	mango10=new Mango(1150,420,40);
	mango11=new Mango(1120,340,40);
	mango12=new Mango(820,350,40);
	mango13=new Mango(920,290,40);
	mango14=new Mango(1020,320,40);
	mango15=new Mango(1000,280,40);
	stone1=new Stone(200,200,20);
// issues 1
//	launcher=new Launcher(stone.body,{x:140,y:530});
	Engine.run(engine);
	console.log(elastic);
}


function draw() {
  rectMode(CENTER);
  background(rgb(211,211,211));
  Engine.update(engine);
 image(boyImg,100,500,boyImg.width/10,boyImg.height/10);
	//image(boyImg,150,550,120,120);
  
  ground.display();
  stone.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  mango13.display();
  mango14.display();
  mango15.display();
//launcher.display();
// issues 2
 // detectcollision(stone,mango15);


  drawSprites();
 
}
function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
	launcher.fly();
}
function detectcollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position;
	stoneBodyPosition=lstone.body.position;
// doubt 1
	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	// doubt 2
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:235,y:420});
		// issues 3
		launcher.attach(stone.body);
	}
}
