function rlLevel24() {

	this.update = rl_level24_update;
	this.draw = rl_level24_draw;

	this.click = rl_level24_click;
    this.mouseMove = rl_level24_mouse_move;

	this.firstButtonHighlighted = false;

	this.circle = new Circle (50,50,50,50,"24");

	var x = document.getElementsByTagName("BODY")[0];
	x.style.backgroundImage = "url('Images/Space.jpg')";
	x.style.backgroundRepeat = "repeat-y";

	this.keyPressed = rlLevel24KeyPressed;
}

function rl_level24_update(){
	
}

function rl_level24_draw(ctx){

	this.circle.draw(ctx);
	
}

function rl_level24_click(x, y){
	console.log("Clicked at: " + x + ", " + y);
	return this;

}

function rl_level24_mouse_move(x, y){

}

function rlLevel24KeyPressed(key) {
	console.log(key);
	if (key == ' ') {
		console.log("Changing Level..");
		var x = document.getElementsByTagName("BODY")[0];
		x.style.backgroundImage = "url('Images/Dark_Big.jpg')";
		x.style.backgroundRepeat = "none";
		return new rlLevel25();

	}
	return this;

}