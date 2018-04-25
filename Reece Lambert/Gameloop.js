//Globals
var FPS = 25; // target frames per second
var SECONDSBETWEENFRAMES = 1 / FPS;

var ctx = null; // Useful to have a global reference for measuring fonts for instance
var canvas = null; // The main drawing area
var currentTime = 0; // For debugging - you can store the current time and see how it's changed
var cur_screen = null;

function loadGame(){
	canvas = document.getElementById('canvas');
	ctx = canvas.getContext('2d');

	// Do setup code here - make resources/assign things etc
	cur_screen = new rlMenu();
	// The following line sets up the game loop
	setInterval(update, SECONDSBETWEENFRAMES * 500);
  console.log("We have loaded the game");
}

function update(){
	// Store the time - for debugging purposes mostly
	currentTime += SECONDSBETWEENFRAMES;
	

	// Clear the drawing area
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.save();

	//Do you drawing here - make your resources draw themselves
	cur_screen.update();
	cur_screen.draw(ctx);
	ctx.restore();
}
