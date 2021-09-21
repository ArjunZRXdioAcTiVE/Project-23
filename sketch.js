const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;

let pB, cB, player, compP;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
  //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
  //Create Player Base and Computer Base Object

  cB = new CompBase (300, Math.round (random (200, 500)), 180, 150);
  pB = new PlayerBase (1000, Math.round (random (200, 500)), 180, 150);

  player = new Player (pB.body.position.x - 25, pB.body.position.y - 153, 50, 180);
  compP = new ComputerPlayer (cB.body.position.x + 25, cB.body.position.y - 153, 50, 180);
}

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  push ();
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
  pop ();

  //Display Playerbase and computer base 
  pB.display ();
  cB.display ();
  
  //display Player and computerplayer
  player.display ();  
  compP.display ();

}
