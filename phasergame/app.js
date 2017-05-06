var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {preload:preload, create:create, update:update});
var score = 0;
var life = 3

function preload(){
  game.load.image('sky', 'assests/sky.png')
  game.load.image('gound', 'assests/platform.png')
  game.load.image('star', 'assests/star.png')
  game.load.spritesheet('dude', 'assests/dude.png')
  game.load.spritesheet('baddie', 'assests/baddie.png')
}

function create(){
  game.physics.startSystem(Phaser.Physics.ARCADE);
  game.add.sprite(0,0,'sky');
  platforms = game.add.physicsGroup();
  platforms.enableBody = true;
  var ground = platforms.create(0, game.world.height - 50, 'ground');
  ground.scale.setTo(2,2);
  ground.body.immovable = true;
  var ledge = platforms.create(400, 400, 'ground');
  ledge.body.immovable = true;
  ledge = platforms.create(-150, 250, 'ground');
  ledge.body.immovable = true;
  player = game.add.sprite(32, game.world.height - 220, 'dude')
  player.animations.add('left', [0,1,2,3], 10, true)
  player.animations.add('right', [0,1,2,3], 10, true)
  game.physics.arcade.enable(player);
  player.body.bounce.y = 0.2;
  player.body.gravity.y = 300;
  player.body.colliderWorldBounds = true;
  enemy1 = game.add.sprite(760, 20, 'baddies');
  enemy1.animations.add('left', [0,1], 10, true)
  enemy2 = game.add.sprite(760, 20, 'baddies');
  enemy2.animations.add('left', [0,1], 10, true)
  enemy3 = game.add.sprite(760, 20, 'baddies');
  enemy3.animations.add('left', [0,1], 10, true)
  cursors = game.input.keyboard.createCursorKeys();

  stars = game.add.physicsGroup();
  for (var i = 0; i < 12; i++){
  	var star = stars.create(i * 70, 0, 'star');
  	star.body.gravity.y = 200;
  	star.body.bounce.y = 0.7 + Math.random() * 0.2;
  }
}

function update(){

}