let x = 0;
let y = 0;
let xspeed = 10;
let yspeed = 10;
let color1 = 0;
let color2 = 0;
let color3 = 0;
let tempcolor = 0;
let diameter = 50;
let color1on = true;
let color2on = true;
let color3on = true;


function setup() {
	createCanvas(800, 600);
	//gives random coordinates for where the cicle will start
	x = random(10, width-10);
	y = random(10, height-10);
	color1 = random(0,255);
	color2 = random(0,255);
	color3 = random(0,255);
	//xspeed = random(-6,6);
	//yspeed = random(-6,6)
	background(200);
}

function draw() {
	//background(color1+50,color2+50,color3+50,2);
	
	// check for collision with left and right edge
  if (x < diameter/2 | x > width-(diameter/2)){
		xspeed = xspeed * -1; // reverse the x direction
		background(color1+50,color2+50,color3+50, 10);
		
		//has color1 get darker after it hit 225, and lighter when it hits 0
		if(color1on == true){
			color1 = color1 + 10;
			if(color1>=225){
				color1on = false;
			}
		}else{
			color1 = color1 -10;
			if(color1<=0){
				color1on = true;
			}
		}
		
		//has color2 get darker after it hit 225, and lighter when it hits 0
		if(color2on == true){
			color2 = color2 + 10;
			if(color2>=225){
				color2on = false;
			}
		}else{
			color2 = color2 -10;
			if(color2<=0){
				color2on = true;
			}
		}
		
		//has color3 get darker after it hit 225, and lighter when it hits 0
		if(color3on == true){
			color3 = color3 + 10;
			if(color3>=225){
				color3on = false;
			}
		}else{
			color3 = color3 -10;
			if(color3<=0){
				color3on = true;
			}
		}
		
	}
	
	if (y < diameter/2 | y > height-(diameter/2)){
		yspeed = yspeed * -1;
		background(color1+50,color2+50,color3+50, 10);
		
		//has color1 get darker after it hit 225, and lighter when it hits 0
		if(color1on == true){
			color1 = color1 + 10;
			if(color1>=225){
				color1on = false;
			}
		}else{
			color1 = color1 -10;
			if(color1<=0){
				color1on = true;
			}
		}
		
		//has color2 get darker after it hit 225, and lighter when it hits 0
		if(color2on == true){
			color2 = color2 + 10;
			if(color2>=225){
				color2on == false;
			}
		}else{
			color2 = color2 -10;
			if(color2<=0){
				color2on = true;
			}
		}
		
		//has color3 get darker after it hit 225, and lighter when it hits 0
		if(color3on == true){
			color3 = color3 + 10;
			if(color3>=225){
				color3on = false;
			}
		}else{
			color3 = color3 -10;
			if(color3<=0){
				color3on = true;
			}
		}
		
	}
	
	
	x = x + xspeed; // iterate x
  y = y + yspeed; // iterate y
	stroke(color1, color2, color3);
	strokeWeight(2);
	fill(color1, color2, color3);
	//background(color1+50,color2+50,color3+50,1);
	
  // draw a circle
  circle(x, y, diameter);
}