function rlLevel9() {

	this.update = rl_level9_update;
	this.draw = rl_level9_draw;

	this.click = rl_level9_click;
    this.mouseMove = rl_level9_mouse_move;

	this.firstButtonHighlighted = false;

	this.button1 = new Button(75,300,275,80, "Under four");
	this.button2 = new Button(450,300,275,80, "About nine");
	this.button3 = new Button(75,400,275,80, "Over twenty");
	this.button4 = new Button(450,400,275,80, "A horse named Jim");
	this.circle = new Circle (50,50,50,50,"9");
}

function rl_level9_update(){

}

function rl_level9_draw(ctx){
	
	this.button1.draw(ctx);
	this.button2.draw(ctx);
	this.button3.draw(ctx);
	this.button4.draw(ctx);
	this.circle.draw(ctx);

	ctx.font= "40px Gugi";
	ctx.fillText("How many letters are in the",150,50);	
	ctx.fillText("answer?", 340,100);
}

function rl_level9_click(x, y){

	console.log("Clicked at: " + x + ", " + y);
	if(this.button1.hitTest(x, y)){
		console.log("Failed...");
		return new rlFailed();
	}

	if(this.button2.hitTest(x, y)){
		console.log("Failed...");
		return new rlLevel10();
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

function rl_level9_mouse_move(x, y){

	this.button1.hitTest(x, y);
	this.button2.hitTest(x, y);
	this.button3.hitTest(x, y);
	this.button4.hitTest(x, y);
}