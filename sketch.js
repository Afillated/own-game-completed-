
var bullet,obstacle;
var obstacleGroup;
var gameState = 0
function preload()
{
	meteor1=loadImage("image/meteor.png");
	garbage=loadImage("image/garbage.png");
	spaceShipImg=loadImage("image/spaceship.png");
	backgroundImg=loadImage("image/spaceBackground.jpg");
	gameoverImg=loadImage("image/gameover.png");
}

function setup() {
	createCanvas(800, 700);




	//Create the Bodies Here.
	
	background1 = createSprite(400,350,800,700)
	background1.addImage(backgroundImg);
	background1.scale = 4.7
	background1.velocityY = -7;
	Spaceship=createSprite(400,400,10,10)
	Spaceship.addImage(spaceShipImg)
	Spaceship.scale = 0.25;
	Spaceship.depth = 10
	Spaceship.velocityY = 3;
	gameover=createSprite(400,350,10,10);
	gameover.addImage(gameoverImg);
	gameover.visible = false;


  obstacleGroup = new Group();
  bulletGroup = new Group();
}


function draw() {
 
  background(0);
  
  if(gameState === 0){
  	if(keyDown("W")){
		Spaceship.velocityY = -10;
	}
	if(keyDown("A")){
		Spaceship.velocityX = -5;
	}
	if(keyDown("D")){
		Spaceship.velocityX = 5;
	}
	Spaceship.velocityY = Spaceship.velocityY +1;
	
	backgroundImg.velocityY = 5;
	if(keyDown("space")){
		bullet = createSprite(Spaceship.x,Spaceship.y+50,3,10)
		//bullet.addImage()
		bullet.velocityY = -8;
		bulletGroup.add(bullet)
		}
		if(background1.y<0){
			background1.y=background1.height/2
		}
		if(obstacleGroup.isTouching(bulletGroup)){
			obstacleGroup.destroyEach();
		}
		if(obstacleGroup.isTouching(Spaceship)){
			gameState = 1
		}
		spawnMeteors();
	}
	if(gameState === 1){
		gameover.visible= true;
		background1.velocityY= 0;
		obstacleGroup.destroyEach();
		bulletGroup.destroyEach();
		Spaceship.velocityY=0;
		Spaceship.velocityX=0;
	}
	//console.log(Spaceship.y)
	
  
  drawSprites();
 
}


function spawnMeteors(){

	var framediv = Math.round(random(50,125))

	if(frameCount % framediv ===0){
		obstacle = createSprite(200,0,10,10);
		obstacleGroup.add(obstacle)
		obstacle.x = Math.round(random(50,775));
		obstacle.velocityY = 3;
		obstacle.scale = 0.25
		obstacle.lifetime = 500;
		var rand = Math.round(random(1,2))

		switch(rand){
			case 1 : obstacle.addImage(meteor1)
					break;
			case 2 : obstacle.addImage(garbage)
					break;
			default : break;		
		}
	}
}
 






