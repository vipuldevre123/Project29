const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


function setup() {
  createCanvas(900,400);
  engine = Engine.create();
    world = engine.world;
    ground = new Ground(450,380,900,20);
    stand1 = new Stand(390,300,250,10);
    stand2 = new Stand(705,200,200,10);
    box1 = new Box(300,275,30,40);
    box2 = new Box(330,275,30,40);
    box3 = new Box(360,275,30,40);
    box4 = new Box(390,275,30,40);
    box5 = new Box(420,275,30,40);
    box6 = new Box(450,275,30,40);
    box7 = new Box(480,275,30,40);
    box8 = new Box(330,235,30,40);
    box9 = new Box(360,235,30,40);
    box10= new Box(390,235,30,40);
    box11= new Box(420,235,30,40);
    box12= new Box(450,235,30,40);
    box13= new Box(360,195,30,40);
    box14= new Box(390,195,30,40);
    box15= new Box(420,195,30,40);
    box16= new Box(390,155,30,40);

    box17 = new Box(645,195,30,40);
    box18 = new Box(675,195,30,40);
    box19 = new Box(705,195,30,40);
    box20 = new Box(735,195,30,40);
    box21 = new Box(765,195,30,40);
    box22 = new Box(675,145,30,40);
    box23 = new Box(705,145,30,40);
    box24 = new Box(735,145,30,40);
    box25 = new Box(705,100,30,40);

   
   polygon = Bodies.circle(50,200,20);
   World.add(world,polygon);
   slingshot = new Slingshot(this.polygon,{x:100,y:200});
    
}

function draw() {
  //camera.zoom=camera.zoom+1
  background("lightgreen");  
  //text(mouseX + "," + mouseY,mouseX,mouseY)
  Engine.update(engine);

ground.display();
stand1.display();
stand2.display();
fill ("yellow");
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
fill ("red");
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
fill ("darkgreen");
box13.display();
box14.display();
box15.display();
fill ("pink");
box16.display();
box17.display();
box18.display();
box19.display();
box20.display();
fill ("blue");
box21.display();
box22.display();
box23.display();
fill ("purple");
box24.display();
box25.display();

circle(polygon.position.x,polygon.position.y,40)
slingshot.display();
 drawSprites();
}

function mouseDragged(){ 
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY}); 
}

function mouseReleased(){ 
  slingshot.fly(); 
}
