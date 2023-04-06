let video;
let captimg;
let gif_loadImg;
let gif_createImg;

function preload() {
  gif_loadImg = loadImage("aliens.gif");
  gif_createImg = createImg("aliens.gif");
}

	function setup() {
		createCanvas(640, 480);
		pixelDensity(1);
		background(100);
		video = createCapture(VIDEO); 
		video.size(640, 480);
	    video.hide();
      
	}

function draw(){
  captimg = video.get();
  image(captimg, 0, 0, captimg.width, captimg.height);
        
        loadPixels();
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
              let index = (x + y * width)*4;
              let r = pixels[index+0];
              let g = pixels[index+1];
              let b = pixels[index+2];
              let a = pixels[index+3];     
              
            pixels[index+0] = 255 - b;
              pixels[index+1] = r;
              pixels[index+2] = g;
        }
      }
      updatePixels();
  gif_createImg.position(100,height/2+30);
  
    }