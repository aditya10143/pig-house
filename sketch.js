const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3, box4, box5;
var pig1, pig2;
var log1, log2, log3, log4;

function setup(){
    var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(750,440,60,60);
    pig1 = new Pig (810, 440);
    box2 = new Box(890,440,60,60);
    log1 = new Log(820,420,200,PI/2);

    box3 = new Box(750,280,60,60);
    pig2 = new Pig (820, 400);
    box4 = new Box(890,400,60,60);
    log2 = new Log(820,350,200,PI/2);

    ground = new Ground(600,height,1200,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    fill ("red")
    box1.display();
    box2.display();
    fill ("lightblue")
    ground.display();
    fill ("green");
    pig1.display();
    fill ("yellow");
    log1.display();
   // fill ("red");
   // box3.display();
    //fill ("green");
    //pig2.display();
    //fill ("red");
    //box4.display();
    //fill ("yellow");
    //log2.display();

}