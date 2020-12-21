
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var airplaneImg;
var airplane;
var coinImg;
var cloudImg;
var score = 0;

function preload(){
	airplaneImg = loadImage("plane.png");
	coinImg = loadImage("coin.png");
	cloudImg = loadImage("cloud.png");
}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	airplane = createSprite(windowWidth- 1000, windowHeight- 400, 60, 40);
	airplane.addImage(airplaneImg);

	coinsGroup = new Group();


	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background(80, 162, 218);

  fill("black")
  textSize(20);
  text("Score: "+ score,30,50);

  spawnCoins();
  spawnClouds();

  if(keyDown("UP_ARROW")){
    airplane.y = airplane.y-3;
  }
  if(keyDown("DOWN_ARROW")){
    airplane.y = airplane.y+3;
  }

  if(airplane.isTouching(coinsGroup)){
	  coinsGroup.destroyEach();
	  score = score+10;
  }
  
  drawSprites();
 
}

function spawnCoins() {
	if (frameCount % 240 === 0) {
	  var coin = createSprite(width+20,height-300,40,10);
	  coin.y = Math.round(random(100,600));
	  coin.addImage(coinImg);
	  coin.scale = 0.1;
	  coin.velocityX = -(6 + 3*score/100);
	  coin.lifetime = 500;
	  coinsGroup.add(coin);
	  
	}
	
  }
  function spawnClouds() {
	if (frameCount % 60 === 0) {
	  var cloud = createSprite(width+20,height-300,40,10);
	  cloud.y = Math.round(random(100,600));
	  cloud.addImage(cloudImg);
	  cloud.scale = 0.5;
	  cloud.velocityX = -(6 + 3*score/100);
	  cloud.lifetime = 500;
	  
	  
	}
	
  }



