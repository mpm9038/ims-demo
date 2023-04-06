//Modified version of Jeff Thompson code: https://www.youtube.com/watch?v=VYg-YdGpW1o 
let video;

function setup() {
  createCanvas(windowWidth, windowHeight);
  video = createCapture(VIDEO);
  video.size(width,height);
  video.hide();
}

function draw() {
  background(220);
  
  let gridSize = int(map(mouseX,0,width,15,50));
  
video.loadPixels();
for (let y = 0; y<video.height; y+=gridSize){
  for (let x=0;x<video.width;x+=gridSize) {
let index = (y * video.width + x)*4;
    let r = video.pixels[index];
    let dia = map (r,0,255,gridSize,2);
    //modified the color
    fill(random(100,255),random(100,255),random(100,255));
   // noStroke(); (wanted stroke)
  //changed circle to rect
    rect(x,y,dia);
  }
}
}