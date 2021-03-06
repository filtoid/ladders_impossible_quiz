function rlLevel13() {

	this.update = rl_level13_update;
	this.draw = rl_level13_draw;

	this.click = rl_level13_click;
    this.mouseMove = rl_level13_mouse_move;

	this.firstButtonHighlighted = false;

	this.button1 = new Button(75,300,275,80, "A Quad");
	this.button2 = new Button(450,300,275,80, "A Squad");
	this.button3 = new Button(75,400,275,80, "A group");
	this.button4 = new Button(450,400,275,80, "A gathering");
	this.circle = new Circle (50,50,50,50,"13");
}

function rl_level13_update(){

}

function rl_level13_draw(ctx){
	
	this.button1.draw(ctx);
	this.button2.draw(ctx);
	this.button3.draw(ctx);
	this.button4.draw(ctx);
	this.circle.draw(ctx);

	ctx.font= "40px Gugi";
	ctx.fillText("What is a group of squid",170,50);
	ctx.fillText("called?",340,100);
}

function rl_level13_click(x, y){

	console.log("Clicked at: " + x + ", " + y);
	if(this.button1.hitTest(x, y)){
		console.log("Failed...");
		return new rlFailed();
	}

	if(this.button2.hitTest(x, y)){
		console.log("Changing Level..");
		return new rlLevel14();
	}

	if(this.button3.hitTest(x, y)){
		console.log("Failed...");
		return new rlFailed();
	}

	if(this.button4.hitTest(x, y)){
		console.log("Failed...");
		return new rlFailed();
	}

	return this;
}

function rl_level13_mouse_move(x, y){

	this.button1.hitTest(x, y);
	this.button2.hitTest(x, y);
	this.button3.hitTest(x, y);
	this.button4.hitTest(x, y);
}