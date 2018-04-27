function rlFailed() {

	this.update = rl_failed_update;
	this.draw = rl_failed_draw;

	this.click = rl_failed_click;
    this.mouseMove = rl_failed_mouse_move;

	this.firstButtonHighlighted = false;

	this.button1 = new Button(75,450,275,80, "You're damn right");

	this.button2 = new Button(450,450,275,80, "Nah, i'm out");

}

function rl_failed_update(){
	
}

function rl_failed_draw(ctx){	
	
	this.button1.draw(ctx);
	this.button2.draw(ctx);

	ctx.font= "40px Gugi";
	ctx.fillText("Sorry, that's wrong. Do  ",180,50);
	ctx.fillText("you wanna try again?",200,100);

}

function rl_failed_click(x, y){

	console.log("Clicked at: " + x + ", " + y);
	if(this.button1.hitTest(x, y)){
		console.log("Changing to Menu");
		return new rlLevel1();
	}
	if(this.button2.hitTest(x, y)){
		console.log("Changing level...");
		return new rlMenu();
	}
	return this;

}

function rl_failed_mouse_move(x, y){

	this.button1.hitTest(x, y);
	this.button2.hitTest(x, y);

}