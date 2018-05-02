function rlLevel8(){

	this.update = rl_level8_update;
	this.draw = rl_level8_draw;

	this.click = rl_level8_click;
    this.mouseMove = rl_level8_mouse_move;

	this.firstButtonHighlighted = false;

	this.button1 = new Button(75,300,275,80, "REALLY BIG");
	this.button2 = new Button(450,300,275,80, "A horse named Jim");
	this.button3 = new Button(75,400,275,80, "Answer");
	this.button4 = new Button(450,400,275,80, "An elephant");
	this.circle = new Circle (50,50,50,50,"8");
}

function rl_level8_update(){
	
}

function rl_level8_draw(ctx){

	this.button1.draw(ctx);
	this.button2.draw(ctx);
	this.button3.draw(ctx);
	this.button4.draw(ctx);

	this.circle.draw(ctx);

	ctx.font= "40px Gugi";
	ctx.fillText("The answer is really big",170,50);
}

function rl_level8_click(x, y){

	console.log("Clicked at: " + x + ", " + y);
	if(this.button1.hitTest(x, y)){
		console.log("Changing level..");
		return new rlFailed();
	}

	if(this.button2.hitTest(x, y)){
		console.log("Changing level...");
		return new rlFailed();
	}

	if(this.button3.hitTest(x, y)){
		console.log("Changing level...");
		return new rlFailed();
	}

	if(this.button4.hitTest(x, y)){
		console.log("Changing level...");
		return new rlFailed();
	}

	if(this.circle.hitTest(x, y)){
		console.log("Changing level...");
		return new rlLevel9();
	}

	return this;
}

function rl_level8_mouse_move(x, y){

	this.button1.hitTest(x, y);
	this.button2.hitTest(x, y);
	this.button3.hitTest(x, y);
	this.button4.hitTest(x, y);
	this.circle.hitTest(x, y);
}