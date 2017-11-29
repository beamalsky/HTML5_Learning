window.addEventListener("load", init);

const BRICKS_WIDTH = 60;
const BRICKS_HEIGHT = 25;

var brick_across = 7;
var brick_down; 

var stage;
var score = 0;
var lives = 3;
var scoreText;
var bricks = [];
var brick_down;
var brickColor1;
var brickColor2;
var brickColor3;
var gameStarted = false;
var bgmStarted = false;

const KEYCODE_LEFT = 37;
const KEYCODE_RIGHT = 39;
const SPACEBAR = 32;
var keyboardMoveLeft = false;
var keyboardMoveRight = false;

function init() {

	if(stage) {
		stage.enableDOMEvents(false);
		stage.removeAllChildren();
		stage.removeAllEventListeners();
		stage.clear();
	}

	stage = new createjs.Stage("demoCanvas");
	stage.enableDOMEvents(true);

	createjs.Touch.enable(stage);
	createjs.Ticker.setFPS(60);

	demoCanvas.style.backgroundColor = randomHex();

	createScoreText();
	addToScore(0);

	//load sounds
	createjs.Sound.registerSound("assets/hit.wav", "hit1");
	createjs.Sound.registerSound("assets/hit2.wav", "hit2");
	createjs.Sound.registerSound("assets/blockGame.mp3", "bgm");

	//which block game?
	chooseGame();
}

function chooseGame() {
	if (Boolean(Math.floor(Math.random() * 2))) {
		init1();
	} else {
		init2();
	}
}

function createScoreText() {
	scoreText = new createjs.Text("", "16px Arial", "#000000");
	scoreText.x = 9;			
	scoreText.y = stage.canvas.height - 25;

	scoreText2 = new createjs.Text("", "16px Arial", "#ffffff");
	scoreText2.x = 10;			
	scoreText2.y = stage.canvas.height - 26;

	stage.addChild(scoreText);
	stage.addChild(scoreText2);
}

function addToScore(points) {
	score += points;
	scoreText.text = `Score: ${score}  |  Lives: ${lives}`;
	scoreText2.text = `Score: ${score}  |  Lives: ${lives}`;
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

	createjs.Sound.play("hit2");
	demoCanvas.style.backgroundColor = randomHex();

	gameStarted = false;

	if (lives <= 0) {
		loseGame();
	}
}

function loseGame() {

	if (confirm("You lost. :(\n\nWould you like to play again?") == true) {
		lives = 3;
		score = 0;
		scoreText.text = `Score: ${score}  |  Lives: ${lives}`;
		scoreText2.text = `Score: ${score}  |  Lives: ${lives}`;
		//stage.removeAllChildren();
		//stage.clear();
		init();
	} else {
		console.log("you lost!")
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