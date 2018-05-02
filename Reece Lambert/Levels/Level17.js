function rlLevel17() {

	this.update = rl_level17_update;
	this.draw = rl_level17_draw;

	this.click = rl_level17_click;
    this.mouseMove = rl_level17_mouse_move;

	this.firstButtonHighlighted = false;

	this.button1 = new Button(75,300,275,80, "It's hiding");
	this.button2 = new Button(450,300,275,80, "Ransomware");
	this.button3 = new Button(75,400,275,80, "Killed by virus");
	this.button4 = new Button(450,400,275,80, "Went to get mail");
	this.circle = new Circle (50,50,50,50,"17");
}

function rl_level17_update(){

}

function rl_level17_draw(ctx){
	
	this.button1.draw(ctx);
	this.button2.draw(ctx);
	this.button3.draw(ctx);
	this.button4.draw(ctx);
	this.circle.draw(ctx);

	ctx.font= "40px Gugi";
	ctx.fillText("Where did the blackmailing",150,50);
	ctx.fillText("computer go?",270,100);
}

function rl_level17_click(x, y){

	console.log("Clicked at: " + x + ", " + y);
	if(this.button1.hitTest(x, y)){
		console.log("Failed...");
		return new rlFailed();
	}

	if(this.button2.hitTest(x, y)){
		console.log("Changing Level..");
		return new rlLevel18();
	}

	if(this.button3.hitTest(x, y)){
		console.log("Failed...");
		return new rlLevel11();
	}

	if(this.button4.hitTest(x, y)){
		console.log("Failed...");
		return new rlFailed();
	}

	return this;
}

function rl_level17_mouse_move(x, y){

	this.button1.hitTest(x, y);
	this.button2.hitTest(x, y);
	this.button3.hitTest(x, y);
	this.button4.hitTest(x, y);
}