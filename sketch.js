const Engine=Matter.Engine;
const World= Matter.World;
const Bodies=Matter.Bodies;

var canvas,box1,box2,ground;

function setup() {
  canvas=createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  ground=new Ground(200,390,400,20)
  box1= new Box(200,100,50,50);
  box2= new Box(300,100,50,50);
}

function draw() {
  background("gold");  
  Engine.update(engine);
  box1.display();
  box2.display();
  ground.display();
  
}