// side length
let r = 100;
//slider to interact with the size of the square
let sldr;
function setup() {
  createCanvas(400, 400);
  // strokeWeight(5);
  //creating the new slider
  
  sldr = createSlider(100, 360, 100);
  //centering the square
  rectMode(CENTER);
}
function draw() {
  background(100);
  // assigning the slider value to the square side length
  r= sldr.value();
  // the rectrangle or square
  rect(width/2, height/2, r, r);
  // default white
   fill(255);
  // control structure to allow and control the interactivity
    if(mouseX >= width/2 - r/2 && mouseX <= width/2 + r/2 &&  mouseY >= height/2 - r/2 && mouseY <= height/2 + r/2){
        fill(200, 100, 100);
       }
    // debug
    // print(mouseX);
}