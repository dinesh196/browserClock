function setup() { 
  createCanvas(400, 400);
  angleMode(DEGREES);

  //console.log("Its working");
} 

function draw() { 
  background(0);
  translate(200,200);
  rotate(-90);

  let hr = hour();
  let min = minute();
  let sec = second();

 /* strokeWeight(4);
  stroke(255);
  noFill();
  ellipse(200,200,300,300);*/

  strokeWeight(8);
  stroke(255,100,150);
  noFill();
  let end1 = map(sec,0,60,0,360);
  arc(0,0,300,300,0,end1);

  push();
  rotate(end1);
  stroke(255,100,150);
  line(0,0,100,0);
  pop();

  stroke(150,100,255);
  let end2 = map(min,0,60,0,360);
  arc(0,0,280,280,0,end2);

  push();
  rotate(end2);
  stroke(50,100,255);
  line(0,0,100,0);
  pop();

  stroke(150,255,100);
  let end3 = map(hr%12,0,12,0,360);
  arc(0,0,260,260,0,end3);

  push();
  rotate(end3);
  stroke(150,255,100);
  line(0,0,100,0);
  pop();

  stroke(255);
  point(0,0);



  /*fill(255);
  noStroke();
  text(hr + ":" + min + ":"+ sec, 10,200)*/
}