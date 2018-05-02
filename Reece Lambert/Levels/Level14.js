function rlLevel14() {

	this.update = rl_level14_update;
	this.draw = rl_level14_draw;

	this.click = rl_level14_click;
    this.mouseMove = rl_level14_mouse_move;

	this.firstButtonHighlighted = false;

	this.button1 = new Button(75,300,275,80, "Happiness and Dreams");
	this.button2 = new Button(450,300,275,80, "Magic");
	this.button3 = new Button(75,400,275,80, "Dankness");
	this.button4 = new Button(450,400,275,80, "Milk");
	this.circle = new Circle (50,50,50,50,"14");
}

function rl_level14_update(){

}

function rl_level14_draw(ctx){
	
	this.button1.draw(ctx);
	this.button2.draw(ctx);
	this.button3.draw(ctx);
	this.button4.draw(ctx);
	this.circle.draw(ctx);

	ctx.font= "40px Gugi";
	ctx.fillText("What is the other 98% of",170,50);
	ctx.fillText("full fat Milk?",290,100);
}

function rl_level14_click(x, y){

	console.log("Clicked at: " + x + ", " + y);
	if(this.button1.hitTest(x, y)){
		console.log("Failed...");
		return new rlFailed();
	}

	if(this.button2.hitTest(x, y)){
		console.log("Failed...");
		return new rlFailed();
	}

	if(this.button3.hitTest(x, y)){
		console.log("Failed...");
		return new rlFailed();
	}

	if(this.button4.hitTest(x, y)){
		console.log("Changing Level..");
		return new rlLevel15();
	}

	return this;
}

function rl_level14_mouse_move(x, y){

	this.button1.hitTest(x, y);
	this.button2.hitTest(x, y);
	this.button3.hitTest(x, y);
	this.button4.hitTest(x, y);
}