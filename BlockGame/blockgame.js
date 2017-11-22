window.addEventListener("load", init);

const BRICKS_WIDTH = 60;
const BRICKS_HEIGHT = 25;

var score = 0;
var lives = 3;
var scoreText;
var gameStarted = false;
var bgmStarted = false;

const KEYCODE_LEFT = 37;
const KEYCODE_RIGHT = 39;
const SPACEBAR = 32;
var keyboardMoveLeft = false;
var keyboardMoveRight = false;

function init() {

	stage = new createjs.Stage("demoCanvas");

	createjs.Touch.enable(stage);
	createjs.Ticker.setFPS(60);

	demoCanvas.style.backgroundColor = randomHex();
	brickColor = randomHex();

	createScoreText();
	addToScore(0);

	//load sounds
	createjs.Sound.registerSound("assets/hit.wav", "hit_brick");
	//createjs.Sound.registerSound("assets/hit2.wav", "hit_paddle");
	createjs.Sound.registerSound("assets/blockGame.mp3", "bgm");

	init1();
}

function winGame() {

	demoCanvas.style.backgroundColor = randomHex();

	gameStarted = false;

	if (confirm("You won! :)\n\nWould you like to play again?") == true) {
		gameStarted = false;
		lives += 3;
		init();
	} else {
		console.log("no replay");
	}
}

function loseLife() {
	lives--;
	scoreText.text = `Score: ${score}  |  Lives: ${lives}`;
	scoreText2.text = `Score: ${score}  |  Lives: ${lives}`;

	demoCanvas.style.backgroundColor = randomHex();

	gameStarted = false;

	if (lives < 0) {
		loseGame();
	}		
}

function loseGame() {

	if (confirm("You lost. :(\n\nWould you like to play again?") == true) {
		lives = 3;
		score = 0;
		init();
	} else {
		console.log("you lost!")
	}
}

function createBrickGrid(l, h) {
	for (var i = 0; i < l; i++)
		for (var j = 0; j < w; j++) {
			createBrick(i * (BRICKS_WIDTH + 10) + 40, j * (BRICKS_HEIGHT + 5) + 20, brickColor)
		}
}

function createBrick(x, y, c) {
	brick = new createjs.Shape();
	brick.graphics.beginFill(c).beginStroke('#FFFFFF');
	brick.graphics.drawRect(0, 0, BRICKS_WIDTH, BRICKS_HEIGHT);
	brick.graphics.endFill();

	brick.regX = BRICKS_WIDTH / 2;
	brick.regY = BRICKS_HEIGHT / 2;

	brick.x = x;
	brick.y = y;
    brick.setBounds(brick.regX,brick.regY,BRICKS_WIDTH,BRICKS_HEIGHT);
	stage.addChild(brick);

	bricks.push(brick);
}