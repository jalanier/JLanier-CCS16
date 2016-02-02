function setup() {
  createCanvas (500,500)
}

function draw() {
  if (mouseX > 100 && mouseX < 400 && mouseY > 100 && mouseY < 400){
 fill(255,0,255)
 rect(100,100,300,300)
 
  }
  if (mouseX > 200 && mouseX < 300 && mouseY > 200 && mouseY < 300){
 fill(255,0,0)
 rect(200,200,100,100)
 
  }
  if (mouseX > 225 && mouseX < 275 && mouseY > 225 && mouseY < 275){
 fill(0,0,255)
 rect(225,225,50,50)
 
  }	
}