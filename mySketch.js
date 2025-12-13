//amount of circles drawn
const circleNum = 30; //10-35

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(225,225,225);
	//select a circle to displace, doesn't chose the outside 10 circles becuase I thought it looked wierd
	randomCircle = floor(random(1,circleNum-10));
	//create random x and y cordinates within the box
	randomY= random(-((circleNum*5)/2), ((circleNum*20)/2));
	randomX= random(-((circleNum*5)/2), ((circleNum*20)/2));
	randcolor1 = random(0,225);
	randcolor2 = random(0,225);
	randcolor3 = random(0,225);
}

function draw() {
	//Vera Molnar - Rond Sur Cercle
	//https://spalterdigital.com/artworks/ronds-sur-cercle-designs/
	
	//center the drawling
	translate(width/2.3, height/3);
	
	//draw circles
	for(let x=0; x<=circleNum; x++){
		//add color gradient
		if (randcolor1 > 115){
			stroke(randcolor1-(x*5), randcolor2, randcolor3);
		}else{
			stroke(randcolor1+(x*5), randcolor2, randcolor3);
		}
		fill(0,0,0,0);
		//stroke(0,0,0);
		strokeWeight(2);
		if(x == randomCircle){
			//draw displaced circle with color
			if (randcolor1 > 115){
				stroke(randcolor1-(x*5), randcolor2, randcolor3);
			}else{
				stroke(randcolor1+(x*5), randcolor2, randcolor3);
			}
			//stroke(randcolor1-(x*5),randcolor2, randcolor3);
			strokeWeight(5);
			circle(randomX,randomY,(x+1)*20);
		}else{
			//draw rest of circles
			circle(-((circleNum*5)/2),25,(x+1)*20);
		}
		
		//create boxes to block out circle parts outside of the black box
		fill(225,225,225);
		stroke(225,225,225);
		rect(-(((circleNum*20)/2)-1200), -(((circleNum*20)/2)-100), -1700,-500);
		rect(-(((circleNum*20)/2)-100), (((circleNum*20)/2)+100), -700,-(circleNum*20));
		rect((((circleNum*20)/2)+100), -(((circleNum*20))-100), 800 ,1300);
		rect(-(((circleNum*20)/2)-100), (((circleNum*20)/2)+100), (circleNum*20),500);
		rect(-((circleNum*20)/2)+100,((circleNum*20)/2), -(circleNum*20)-500,500);
		
		//create black outline for box
		stroke(0,0,0);
		strokeWeight(2);
		fill(225,225,225,0);
		square(-(((circleNum*20)/2)-100), -(((circleNum*20)/2)-100), circleNum*20);
	}
}