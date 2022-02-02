var bg, bgImg
var rocket, rocketImg

function preload(){
 bgImg = loadImage("sky.jpg")
 rocketImg = loadImage("rocket.png")
}

function setup(){
  createCanvas(400,600)
  
  bg = createSprite(200, 300, 400, 600)
  bg.addImage("bg", bgImg)
  bg.scale = 3
  bg.velocityY = -3

  rocket = createSprite(200, 500, 10, 10)
  rocket.addImage("rocket", rocketImg)
  rocket.scale = 0.15
}

function draw(){
  background("white");
  if (bg.y < 0) {
    bg.y = bg.height/3
  }
  
drawSprites()
}
