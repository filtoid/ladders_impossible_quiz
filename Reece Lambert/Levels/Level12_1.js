function rlLevel12_1() {

	this.update = rl_level12_1_update;
	this.draw = rl_level12_1_draw;

	this.click = rl_level12_1_click;
    this.mouseMove = rl_level12_1_mouse_move;

	this.firstButtonHighlighted = false;

	this.button1 = new Button(75,300,275,80, "that");
	this.button2 = new Button(450,300,275,80, "on to");
	this.button3 = new Button(75,400,275,80, "Hold");
	this.button4 = new Button(450,400,275,80, "feeling");
	this.circle = new Circle (50,50,50,50,"11");
}

function rl_level12_1_update(){

}

function rl_level12_1_draw(ctx){
	
	this.button1.draw(ctx);
	this.button2.draw(ctx);
	this.button3.draw(ctx);
	this.button4.draw(ctx);
	this.circle.draw(ctx);

	ctx.font= "40px Gugi";
	ctx.fillText("Don't stop believing",210,50);	
}

function rl_level12_1_click(x, y){

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
		return new rlLevel12_2();
	}

	if(this.button4.hitTest(x, y)){
		console.log("Failed...");
		return new rlFailed();
	}

	return this;
}

function rl_level12_1_mouse_move(x, y){

	this.button1.hitTest(x, y);
	this.button2.hitTest(x, y);
	this.button3.hitTest(x, y);
	this.button4.hitTest(x, y);
}