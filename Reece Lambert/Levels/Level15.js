function rlLevel15() {

	this.update = rl_level15_update;
	this.draw = rl_level15_draw;

	this.click = rl_level15_click;
    this.mouseMove = rl_level15_mouse_move;

	this.firstButtonHighlighted = false;

	this.button1 = new Button(75,300,275,80, "Go to question 14");
	this.button2 = new Button(450,300,275,80, "Go to question 15");
	this.button3 = new Button(75,400,275,80, "Go to question 16");
	this.button4 = new Button(450,400,275,80, "Go to question 17");
	this.circle = new Circle (50,50,50,50,"?");
}

function rl_level15_update(){

}

function rl_level15_draw(ctx){
	
	this.button1.draw(ctx);
	this.button2.draw(ctx);
	this.button3.draw(ctx);
	this.button4.draw(ctx);
	this.circle.draw(ctx);

	ctx.font= "40px Gugi";
	ctx.fillText("What question is next?",180,50);	
}

function rl_level15_click(x, y){

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
		console.log("Changing Level..");
		return new rlLevel16();
	}

	if(this.button4.hitTest(x, y)){
		console.log("Failed...");
		return new rlFailed();
	}

	return this;
}

function rl_level15_mouse_move(x, y){

	this.button1.hitTest(x, y);
	this.button2.hitTest(x, y);
	this.button3.hitTest(x, y);
	this.button4.hitTest(x, y);
}