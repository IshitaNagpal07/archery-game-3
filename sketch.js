var bowImg,boardImg;
var bow,board;
var bg;
var canvas,edges;
var arrow,arrowImg;

function preload() {
 //bg = loadImage("ground-removebg-preview.png");
 bg =  loadImage("bg.png");
 bowImg = loadImage("both.png");
 boardImg = loadImage("board.png");
 arrowImg = loadImage("a2.png");
}

function setup() {
  //createCanvas(1000,500);
  canvas = createCanvas(displayWidth-20,displayHeight-30);

  board = createSprite(700,200);
  board.addImage("board",boardImg);
  board.scale=0.5;

  bow = createSprite(700,650);
  bow.addImage("bow",bowImg);
  bow.scale=0.5;

  arrow = createSprite(700,650);
  arrow.addImage("arrow",arrowImg);
  arrow.scale=0.5;
  

  edges=createEdgeSprites();
}

function draw() {
  background(bg);

  if(keyDown("space")){
    arrow.velocityY=-2;
  }

  //bow.x=mouse.X;
  //bow.y=mouse.Y;

  /*ellipse(x, y, r*2, r*2);
  x += xspeed;
  y += yspeed;
  if (x > width - r || x < r) {
    xspeed = -xspeed;
  }
  if (y > height - r || y < r) {
    yspeed = -yspeed;
  }*/

 // board.velocityX=4;

 //if(board.isTouching(edges)){
  // 
 // }

  //getBouncingBox()

  //camera.position.x = displayWidth/2;
  //camera.position.y = displayHeight/2;
  //else{
    //
  //}

  //board.bounce(edges);
    
 //if(board.position.x > displayWidth){
  //board.velocityX=-4;
 //}

  fill("red");
  textSize(30);
  text("SCORE: ",1300,50);
  drawSprites();
}