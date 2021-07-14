const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var my_engine, my_world;
var my_canvas;
var player_base1,player_base1,player,computer;


function setup() {
  my_canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  my_engine = Engine.create();
  my_world = my_engine.world;
	
   //Create Player Base and Computer Base Object
   player_base1 = new PlayerBase(300, random(450, height - 300), 180, 150);
   player = new Player(285, player_base1.body.position.y - 153, 50, 180);

   player_base2 = new PlayerBase(width-300, random(450, height - 300), 180, 150);
   computer = new Computer(width-280, player_base2.body.position.y - 153, 50, 180);

 }

function draw() {

  background(180);

  Engine.update(my_engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
  player_base1.display();
  player_base2.display();
  player.display();
  computer.display();

   //display Player and computerplayer


}
