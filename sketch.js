var player1, dustbin, wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9;
var wall10, wall11, wall12, wall13, wall14, wall15, wall16, wall17, wall18, wall19, wall20, bg;

function preload(){
bg= loadImage("GREENYYY.jpg");


}


function setup() {
  createCanvas(1200,600);
  wall1= createSprite(401, 512, 190, 50);  
  wall2= createSprite(312, 302, 50, 465); 
  wall3= createSprite(360, 165, 150, 50);   
  wall4= createSprite(374, 242, 150, 50);  
  wall5= createSprite(520, 59, 465, 50);  
  wall6= createSprite(360, 429, 150, 50);  
  wall7= createSprite(645, 450, 50, 75);  
  wall8= createSprite(920, 60, 160, 50);  
  wall9= createSprite(800, 510, 450, 50);  
  wall10= createSprite(503, 100,40, 90);  
  wall11= createSprite(740, 450, 50, 70);  
  wall12= createSprite(1000, 280, 50, 490);  
  wall13= createSprite(950, 320, 90, 50);  
  wall14= createSprite(892, 250, 50, 190);  
  wall15= createSprite(820, 151, 200, 35);  
  wall16= createSprite(790, 240, 35, 200);  
  wall17= createSprite(689, 282, 50, 150); 
  wall18= createSprite(620, 232, 100, 50); 
  wall19= createSprite(569, 260, 45, 100); 
  wall20= createSprite(517, 320, 150, 30); 
}

function draw() {
  background(bg);  
  stroke("white");
  textSize(16);
  fill("white");
  text("x: "+mouseX+",y: "+mouseY,mouseX,mouseY);
  drawSprites();
} 