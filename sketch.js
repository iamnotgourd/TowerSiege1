const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const MConstraint = Matter.MouseConstraint
const Mouse = Matter.Mouse


var engine, world;

function setup() {
 const canvas = createCanvas(2000,800);
  engine = Engine.create();
  world = engine.world;
  
  base1 = new Platform(1327,565,400,10)
  //row 1
  block1 = new Block(1205 ,520,80,80) 
  block3 = new Block(1365,520,80,80)
  block6 = new Block(1325,440,80,80)
  block7 = new Block(1405,440,80,80)

  ball = new Ball(340,240,30)
  sling = new Band(ball.ball,{x:340,y:240})
  gameState = "start"
}

function draw() {
  background("black");  
  Engine.update(engine);
  base1.display()
  block1.display()
  block3.display()
  block6.display()
  block7.display()
  ball.display()
  sling.display()
  drawSprites();
}
function mouseDragged(){
  if (gameState!=="launched"){
      Matter.Body.setPosition(ball.ball, {x: mouseX , y: mouseY});
  }
}
function mouseReleased(){
  sling.fly()
  gameState = "launched"
}
function keyPressed(){
  if(keyCode === 32){
      sling.attach(ball.ball);
  }
}