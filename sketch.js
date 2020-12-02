const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var engine,world
var object,ball
function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world
  var options = {
    isStatic:true
  }
  object=Bodies.rectangle(200,390,200,20,options);
  World.add(world,object);
  var options1={
    restitution:1.0
  }
  ball=Bodies.circle(200,100,20,options1);
  World.add(world,ball);
  console.log(object.position.x);
}

function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER)
  rect(object.position.x,object.position.y,400,20);  
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
  drawSprites();
}