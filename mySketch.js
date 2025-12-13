//A wave will slowly rise until the clock reaches 12, then decrease until it reaches 12 again. 
//The time rises and falls with the wave
let noiseLevel = 100;
let noiseScale = 0.0003;
let wave1 = 0;
let wave2 = 0;
let wave3 = 0;
let wave4 = 0;
let wave5 = 0;
let minutes = 0;
//let hour = 0;

function setup() {
	createCanvas(1200, 700);
	background(200);
}

function draw() {

	//make a rectangle each time so the wave looks like it's moving
	fill(220);
	rect(0, 0, width, height);

	//find hour, minute, and second
	let hr = hour();
	let min = minute();
	let sec = second();

	textSize(48);

	//hr = 11;
	
	if (hr>11){
		hr = hr-12;
	}
	
	if (hr == 0){
		hr = 12;
	}	
	
	noiseLevel = map(hr, 0, 11, 200, height);
	noiseLevel = noiseLevel


	// //level of wave will change based on the hour, wanted to use the map function but couldn't figure it out
	// if(hr == 0||hr == 23){
	// 	noiseLevel = height/13*2 + min;
	// }
	// if(hr == 1||hr == 22){
	// 	noiseLevel = (height*2)/13*2 + min;
	// }
	// if(hr == 2||hr == 21){
	// 	noiseLevel = (height*3)/13*2 + min;
	// }
	// if(hr == 3||hr == 20){
	// 	noiseLevel = (height*4)/13*2 + min;
	// }
	// if(hr == 4||hr == 19){
	// 	noiseLevel = (height*5)/13*2 + min;
	// }
	// if(hr == 5||hr == 18){
	// 	noiseLevel = (height*6)/13*2 + min;
	// }
	// if(hr == 6||hr == 17){
	// 	noiseLevel = (height*7)/13*2 + min;
	// }
	// if(hr == 7||hr == 16){
	// 	noiseLevel = (height*8)/13*2 + min;
	// }
	// if(hr == 8||hr == 15){
	// 	noiseLevel = (height*9)/13*2 + min;
	// }
	// if(hr == 9||hr == 14){
	// 	noiseLevel = (height*10)/13*2 + min;
	// }
	// if(hr == 10||hr == 13){
	// 	noiseLevel = (height*11)/13*2 + min;
	// }
	// if(hr == 11||hr == 12){
	// 	noiseLevel = (height*12)/13*2 + min;
	// }
	
	
	//create waves
	for (let x = 0; x <= width; x++) {
		let nx = x * noiseScale;
		let nt = frameCount * 0.01;
		let waveHeight = noise(nx, nt) * noiseLevel;
		fill(0,0,0);
		rect(x, height - waveHeight, 2, waveHeight);
		//save the height of the wave a certain points for time to move with later
		if(x==width/6){
			wave1 = height - waveHeight;
		}
		if(x==width/3){
		 	wave2 = height-waveHeight;
		}
		if(x==width/2){
			wave3 = height-waveHeight;
		}
		if(x==((width*2)/3)){
			wave4 = height-waveHeight;
		}
		if(x==((width*5)/6)){
			wave5 = height-waveHeight;
		}
	}

	//set time so it's based on 12-hour clocks instead of 24-hour clocks
	//hr = hr;
	//if(hr>12){
	//	hr = hr-12;
	//}

	// if (hr == 0){
	// 	hr = 12;
	// }

	//prints time text on the same level as the wave at a certain point
	fill(225,225,225);	
	text(`${hr}`, width/6, wave1, 4);
	text(`:`, width/3, wave2, 4);
	text(`${min}`, width/2, wave3, 4);
	text(`:`, (width*2)/3, wave4, 4);
	text(`${sec}`, (width*5)/6, wave5, 4);

	//text(`${hr}:${min}:${sec}`, width / 2 - 100, height / 2);




}