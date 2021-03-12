const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world;
var groung,ball;

function setup() {
  createCanvas(400,400);
 engine = Engine.create();
 world = engine.world;

 var groundoptions = {
   isStatic:true
 }
 var balloptions = {
   restitution:1.0
 }
ground = Bodies.rectangle(200,390,400,20,groundoptions);
ball = Bodies.circle(170,200,20,balloptions);
World.add(world,ball);
World.add(world,ground);
}

function draw() {
  background(255,255,255);  
 Engine.update(engine);
 rectMode(CENTER);
 rect(ground.position.x,ground.position.y,400,20);
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,20);
}