 const Engine = Matter.Engine;
 const World = Matter.World;
 const Bodies = Matter.Bodies;

var engine;
var world; 
var pelota;
var suelo;
var boton;
var angulo=180;
//Crear espacio de nombre para Engine
//Crear espacio de nombre para World
//Crear espacio de nombre para Bodies
//Crear espacio de nombre para Body


function setup() {
  createCanvas(400,400);
engine = Engine.create();
world = engine.world;
var opsions ={
  restitution: 2, 
  frictionAir: 0.05
}
boton = createImg("up.png");
boton.position(350,50);
boton.size(50,50);
boton.mouseClicked(Fuerza);
var opsion_dos ={
isStatic: true
}
pelota = Bodies.circle(20,20,30,opsions);
World.add(world,pelota);

suelo = Bodies.rectangle(50,250,50,20,opsion_dos);
World.add(world,suelo);
}
rectMode(CENTER);
function draw() 
{
  background(51);
Engine.update(engine);
Matter.Body.rotate(suelo,angulo);
push();
translate(suelo.position.x,suelo.position.y);
rotate(angulo);
rect(0,0,100,20);

pop();
angulo +=0.1;
ellipse(pelota.position.x,pelota.position.y,30);
}
function Fuerza () {
  Matter.Body.applyForce(pelota,{x:0,y:0},{x:0,y:-0.05})
}
