var rectDimensions;

function setup() {
	createCanvas(460,460);
	var rectDimensions = (200,200);
}

function draw() {
  background(255,255,255);
  
  rect(20,20,rectDimensions);
  line(20,20,220,220);
  line(70,20,220,170);
  line(120,20,220,120);
  line(170,20,220,70);
  line(20,70,170,220);
  line(20,120,120,220);
  line(20,170,70,220);
  
    rect(20,240,rectDimensions);
    line(45,240,45,440);
    line(70,240,70,440);
    line(95,240,95,440);
    line(120,240,120,440);
    line(145,240,145,440);
    line(170,240,170,440);
    line(195,240,195,440);
    line(220,240,220,440);
  
  
  rect(240,20,rectDimensions);
  line(240,220,440,20);
  line(290,220,440,70);
  line(340,220,440,120);
  line(390,220,440,170);
  line(240,170,390,20);
  line(240,120,340,20);
  line(240,70,290,20);
  
  
  rect(240,240,rectDimensions);
  line(240,265,440,265);
  line(240,290,440,290);
  line(240,315,440,315);
  line(240,340,440,340);
  line(240,365,440,365);
  line(240,390,440,390);
  line(240,415,440,415);
  
  
  }