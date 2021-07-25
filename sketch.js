var player, enemy
var backgroundImage, enemyImage, laserImage, LazerImage
var gameState = Play

function preload(){
    backgroundImage = loadImage("Background.jpg")
    enemyImage = loadImage("Enemy.jpg")
    laserImage = loadImage("Good Laser.png")
    LazerImage = loadImage("Bad Laser.png")

    enemiesGrounp = new Group()
}

function setup(){
    createCanvas(800, 400)

    player = new Player(750, 200, 10, 10)

}

function draw(){
    background(backgroundImage)

    if(gameState === Play){

        if(keyDown(UP_ARROW)){

        }
        if(player.isTouching(enemy)){
            gameState = End
        }
    }

    drawSprites();
}

function spawnEnemy() {
    if (frameCount % 60 === 0) {
      var enemy = createSprite(600,0,40,10);
      enemy.x = Math.round(random(50,750));
      enemy.addImage(enemyImage);
      enemy.scale = 0.5;
      enemy.velocityY = 5;
      
      enemy.lifetime = 400;

      enemiesGroup.add(enemy);
    }
    
  }

function spawnLaser() {
    if (frameCount % 60 === 0) {
      var laser = createSprite(600,0,40,10);
      laser.x = player.x
      laser.addImage(laserImage);
      laser.scale = 0.5;
      laser.velocityY = -8;
    }
    
}

function spawnLazer() {
    if (frameCount % 60 === 0) {
      var Lazer = createSprite(600,0,40,10);
      Lazer.x = enemy.x
      Lazer.addImage(LazerImage);
      Lazer.scale = 0.5;
      Lazer.velocityY = 8;
    }
    
}