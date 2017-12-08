window.addEventListener("load", init);

const BRICKS_WIDTH = 60;
const BRICKS_HEIGHT = 25;

const LEVEL_TIME = 21100;

const LEVEL_TIMES = [21100, 35400, 49250, 67150, 81350, 95200, 109350, 122700, 144100, 158350];
var startTime = 0;
var level = 0;
var nextSwitch;

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
var brickColor4;
var gameStarted = false;
var bgmStarted = false;
var bgm;
var highScore = 0;

const KEYCODE_LEFT = 37;
const KEYCODE_RIGHT = 39;
const SPACEBAR = 32;
var keyboardMoveLeft = false;
var keyboardMoveRight = false;

function init() {

	if (typeof(Storage) !== "undefined") {
		if(localStorage.highScore == undefined) {
			localStorage.highScore = 0;
		}
		highScore = localStorage.highScore;
	} else {
		highScore = 0;
	}

	clearStage();

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
	//init3();
	chooseGame();
}

function resetLevel() {
	if (bgm.playState === "playFinished") {
	//if (score >= 500) { // to test win states
		endGame();
	} else {
		bricks = [];
		gameStarted = false;
		level += 1
		nextSwitch = startTime + LEVEL_TIMES[level];
		init();
	}
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
	scoreText2.x = 8;			
	scoreText2.y = stage.canvas.height - 26;

	stage.addChild(scoreText);
	stage.addChild(scoreText2);
}

function addToScore(points) {
	score += points;
	scoreText.text = `Score: ${score}  |  Lives: ${lives}`;
	scoreText2.text = `Score: ${score}  |  Lives: ${lives}`;
}

function endGame() {

	gameStarted = false;
	clearStage();

	demoCanvas.style.backgroundColor = "#000000";

	if (score > highScore) {
		highScore = score;
		localStorage.highScore = score;
	}

	showEndText();
}

function showEndText() {
	winText = new createjs.Text(`Game over!\n\n\nYour score: ${score}\n\nHigh score: ${highScore}`, "bold 32px Arial", "#FFFFFF");
	winText.x = stage.canvas.width / 2;			
	winText.y = stage.canvas.height / 2 - 100;
	winText.textAlign = "center";

	stage.addChild(winText);
}

function loseLife() {
	lives--;
	
	if (lives <= 0) {
		loseGame();
	}

	scoreText.text = `Score: ${score}  |  Lives: ${lives}`;
	scoreText2.text = `Score: ${score}  |  Lives: ${lives}`;

	createjs.Sound.play("hit2");
	demoCanvas.style.backgroundColor = randomHex();

	gameStarted = false;
}

function loseGame() {
	lives = 3;
	score -= 2000;
	//resetLevel();
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

	//return brick;
	bricks.push(brick);
}

function clearStage() {
	if(stage) {
		stage.enableDOMEvents(false);
		stage.removeAllChildren();
		stage.removeAllEventListeners();
		stage.clear();
	}
}

function randomHex() {
	var hex = "#"
	var hexArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9","a","b","c","d","e","f"];
	for (i = 0; i < 6; i++) {
		var rand = hexArray[Math.floor(Math.random() * hexArray.length)]
		hex += rand
	}
	return hex;
}