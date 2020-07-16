const Engine = Matter.Engine,
World = Matter.World,
Events = Matter.Events,
Bodies = Matter.Bodies;

var engine, world;

var raindrops =[];

var maxDrops = 100;

function preload()
{
    
}

function setup()
{
   canvas = createCanvas(1000,500);
   engine = Engine.create();
   world = engine.world;
   umbrella = new Umbrella(500,400);
}

function draw()
{
    background(0,0,0);

    Engine.update(engine);

    umbrella.display();

    if((frameCount%1===0)&&(maxDrops>0)){
    raindrops.push(new Drops(random(0,1000),10));
    maxDrops--;    
   }
 
  for (var j = 0; j < raindrops.length; j++) {
   
   raindrops[j].display();
   raindrops[j].update();
  }
}

