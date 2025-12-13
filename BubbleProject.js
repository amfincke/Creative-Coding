let input;
let analyzer;
let y = 0;
let v = 0;
let h = 0;
let r = 10;
let g = 0;
let b = 80;
let t = 100;
let thres = 0.02;
let bubbleSize = 500;
let yspeed = 15;
let randw = 0;
let circles = [];
let noiseLevel = 100;
let noiseScale = 0.001;
let wave1 = 0;
let waveNum = 15;

function setup() {
	createCanvas(windowWidth, windowHeight);
	//background(100);
	
	//create an audio import
	input = new p5.AudioIn();
	input.start();

	//randw = random(0, width);

}


function preload(){
	//loads bubble image
	bubble = loadImage("https://deckard.openprocessing.org/user543747/visual2815590/hec0738b8cbd5978cd014d3907d298ed6/realistic-transparent-3d-bubbles-underwater-soap-bubbles-vector-illustration-png.png");
}


function draw() {
	background(175, 239, 250);

	//Makes background waves
	for(let w = waveNum; w >=0; w--){
		h = (height*w)/(waveNum+1);
		strokeWeight(0);

		//makes color gradient
		r = map(w, 0, waveNum, 10, 150);
		g = map(w, 0, waveNum, 40, 200);
		b = map(w, 0, waveNum, 100, 225);
		
		fill(r,g,b, 30);
		
		for (let x = 0; x <=width; x++) {
			let nx = x * noiseScale;
			let nt = frameCount * 0.03;
			let waveHeight = noise(nx, nt) * noiseLevel;
			let y = h + waveHeight ;
			//fill(4, 118, 193, t);
			rect(x, height+waveHeight, 2, waveHeight - y -50);
		}
	}

	//decides random x position
	randx = random(width/3, (width*2)/3);

	// fill(142, 210, 237, 80);
	// stroke(142,210,237);
	// strokeWeight(1);

	//tracks volume
	let loudness = input.getLevel();
	stroke(0);
	fill(0, 100); 

	//uses random int to space out bubbles
	let randint = random(0,100)
	//loads array with bubble coordinates and size based on volume
	if(loudness > thres && randint > 50){
		v = loudness * bubbleSize;
		circles.push([randx, height, v]);
	}

	//draws bubbles moving upwards
	for (let c = 0; c < circles.length; c++){
		circles[c][1] = circles[c][1] - yspeed;
		image(bubble, circles[c][0], circles[c][1], circles[c][2], circles[c][2])
		//circle(circles[c][0], circles[c][1], circles[c][2]); 
	}

	//used this part to test the volumes
	//got it from https://openprocessing.org/sketch/566618 the microphone example link for the p5.sound library
	// // Graph the overall potential volume, w/ a line at the threshold
	// y = map(loudness, 0, 1, height, 0);
	// let ythreshold = map(thres, 0, 1, height, 0);
	
	// noStroke();
	// fill(175);
	// rect(0, 0, 20, height);
	// // Then draw a rectangle on the graph, sized according to volume
	// fill(0);
	// rect(0, y, 20, y);
	// stroke(0);
	// line(0, ythreshold, 19, ythreshold);
}