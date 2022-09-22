var canvas;
var backgroundImage, bg;
var eq1, eq2, eq3, eq4, eq5;
var imgeq1, imgeq2, imgeq3, imgeq4,imgeq5;

function preload(){
  backgroundImage = loadImage("./image/imgfondo.jpg")
  imgeq1 = loadImage("./image/imgeqbayerm.png")
  imgeq2 = loadImage("./image/imgeqchelsea.png")
  imgeq3 = loadImage("./image/imgeqmilan.png")
  imgeq4 = loadImage("./image/imgeqpsg.png")
  imgeq5 = loadImage("./image/imgeqrmadrid.png")
  function setup(){
   createcanvas(windowWidth, windowHeight);
   bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20);
   bg.addImage (backgroundImage);
   //agregar equipos//
   
   eq1 = createSprite (skell -500,50,6,6);
   eq1.addImage (imgeq1);
   
   eq2 = createSprite (skell -500,50,6,6);
   eq2.addImage (imgeq2);
  }
}

function draw(){
  drawSprites();
}