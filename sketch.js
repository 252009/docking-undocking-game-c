 var iss,issimg
 var backgroundimg
 var spaceCraft,spaceCraftimg,spaceCraftimg1,spaceCraftimg2,spaceCraftimg3
 var docker
 function preload()
 {
   issimg=loadImage("iss.png")
   backgroundimg=loadImage("spacebg.jpg")
   spaceCraftimg=loadImage("spacecraft1.png")
   spaceCraftimg1=loadImage("spaceCraft2.png")
   spaceCraftimg2=loadImage("spaceCraft3.png")
   spaceCraftimg3=loadImage("spaceCraft4.png")
 }
function setup() {
  createCanvas(800,400);
  iss=createSprite(400, 100, 50, 50);
  iss.addImage(issimg)
  iss.scale=0.5
  spaceCraft=createSprite(400,300,50,50)
  spaceCraft.addImage(spaceCraftimg)
  spaceCraft.scale=0.2
  docker=createSprite(360,110,20,20)
  docker.visible=false
}

function draw() {
  background(backgroundimg);  
  drawSprites();
  if(keyDown(UP_ARROW))
  {
    spaceCraft.y=spaceCraft.y-3
    
  }
  if(keyDown(RIGHT_ARROW))
  {
    spaceCraft.x=spaceCraft.x+3
    spaceCraft.addImage(spaceCraftimg3)
  }
  if(keyDown(LEFT_ARROW))
  {
    //mistake
    spaceCraft.x=spaceCraft.x-3
    spaceCraft.addImage(spaceCraftimg2)
  }
  if(keyDown(DOWN_ARROW))
  {
    spaceCraft.addImage(spaceCraftimg1)
  }
  if(spaceCraft.isTouching(docker))
  {
    textSize(40)
    fill("orange")
    text("! docking sucsessfull !",200,300)
    
  }
}