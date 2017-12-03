var pieceCount = 0;
var livePiece = [];

var xCoordinates = [];
var yCoordinates = [];

function init3() {

	createjs.Ticker.addEventListener("tick", tick3);

	brick_down = 20;
	brickColor1 = randomHex();
	brickColor2 = randomHex();
	brickColor3 = randomHex();
	brickColor4 = randomHex();

	createXCoordinates(brick_across);
	createYCoordinates(brick_down);

	createPiece(xCoordinates[(Math.floor(Math.random() * 6))], yCoordinates[0]);

	stage.on("stagemousedown", function(event) {
		movePiece(livePiece);
		createPiece(xCoordinates[(Math.floor(Math.random() * 6))], yCoordinates[0]);

	});

	console.log(livePiece);
	console.log(yCoordinates.length);
}

function tick3() {

	if (livePiece[3].y < yCoordinates[brick_down]) {
		movePiece(livePiece);
	}

	checkRows();

	stage.update();
} 

//check each tick if a row is full. If so, destroy it!
function checkRows() {

}

function createPiece(x, y) {
	var r = Math.floor(Math.random() * 3);

	switch (r) {
		case 0: createPiece0(x, y); break;
		case 1: createPiece1(x, y); break;
		case 2: createPiece2(x, y); break;
		case 3: createPiece3(x, y); break;
	}
}

function createPiece0(x, y) {
	createBrick(x, y, brickColor1);
	createBrick(x, y + BRICKS_HEIGHT + 5, brickColor1);
	createBrick(x, y + (2 * BRICKS_HEIGHT) + 10, brickColor1);
	createBrick(x, y + (3 * BRICKS_HEIGHT) + 15, brickColor1);

	livePiece = bricks.slice(bricks.length - 4);
	livePiece.push(0);
	pieceCount += 1;
}

function createPiece1(x, y) {
	createBrick(x, y, brickColor2);
	createBrick(x, y + BRICKS_HEIGHT + 5, brickColor2);
	createBrick(x + BRICKS_WIDTH + 10, y, brickColor2);
	createBrick(x + BRICKS_WIDTH + 10, y + BRICKS_HEIGHT + 5, brickColor2);	

	livePiece = bricks.slice(bricks.length - 4);
	livePiece.push(1);
	pieceCount += 1;
}

function createPiece2(x, y) {
	createBrick(x, y, brickColor3);
	createBrick(x, y + BRICKS_HEIGHT + 5, brickColor3);
	createBrick(x, y + (2 * BRICKS_HEIGHT) + 10, brickColor3);
	createBrick(x + BRICKS_WIDTH + 10, y + (2 * BRICKS_HEIGHT) + 10, brickColor3);

	livePiece = bricks.slice(bricks.length - 4);
	livePiece.push(2);
	pieceCount += 1;
}

function createPiece3(x, y) {
	createBrick(x, y, brickColor4);
	createBrick(x, y + BRICKS_HEIGHT + 5, brickColor4);
	createBrick(x + BRICKS_WIDTH + 10, y + BRICKS_HEIGHT + 5, brickColor4);
	createBrick(x + BRICKS_WIDTH + 10, y + (2 * BRICKS_HEIGHT) + 10, brickColor4);

	livePiece = bricks.slice(bricks.length - 4);
	livePiece.push(3);
	pieceCount += 1;
}

//could do some transforming
function transformPiece1() {

}

function createXCoordinates(across) {
	for (i = 0; i < across; i++) {
		var x = i * (BRICKS_WIDTH + 10) + 40;
		xCoordinates.push(x);
	}
}

function createYCoordinates(down) {
	for (j = 0; j <= down; j++) {
		var y = j * (BRICKS_HEIGHT + 5) + 20;
		yCoordinates.push(y);
	}
}

function moveBrick(b, y) {
	createjs.Tween.get(b, {}).to({y:b.y + 50}, 900);
}

function movePiece(bricks) {

	switch (bricks[4]) {
		case 0: movePiece0(bricks); break;
		case 1: movePiece1(bricks); break;
		case 2: movePiece2(bricks); break;
		case 3: movePiece3(bricks); break;
	}
}

function movePiece0(bricks) {
	moveBrick(bricks[0], 17);
	moveBrick(bricks[1], 18);
	moveBrick(bricks[2], 19);
	moveBrick(bricks[3], 20);
}

function movePiece1(bricks) {
	moveBrick(bricks[0], 19);
	moveBrick(bricks[1], 20);
	moveBrick(bricks[2], 19);
	moveBrick(bricks[3], 20);
}

function movePiece2(bricks) {
	moveBrick(bricks[0], 18);
	moveBrick(bricks[1], 19);
	moveBrick(bricks[2], 20);
	moveBrick(bricks[3], 20);
}

function movePiece3(bricks) {
	moveBrick(bricks[0], 18);
	moveBrick(bricks[1], 19);
	moveBrick(bricks[2], 19);
	moveBrick(bricks[3], 20);
}