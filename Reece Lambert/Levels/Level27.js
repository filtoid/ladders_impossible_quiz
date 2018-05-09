function rlLevel27() {

	this.update = rl_level27_update;
	this.draw = rl_level27_draw;

	this.click = rl_level27_click;
    this.mouseMove = rl_level27_mouse_move;

	this.firstButtonHighlighted = false;

	this.button1 = new Button(75,300,275,80, "C6");
	this.button2 = new Button(450,300,275,80, "E1");
	this.button3 = new Button(75,400,275,80, "K9");
	this.button4 = new Button(450,400,275,80, "H13");
	this.circle = new Circle (50,50,50,50,"27");
}

function rl_level27_update(){
	
}

function rl_level27_draw(ctx){
	
	this.button1.draw(ctx);
	this.button2.draw(ctx);
	this.button3.draw(ctx);
	this.button4.draw(ctx);
	this.circle.draw(ctx);

	ctx.font= "40px Gugi";
	ctx.fillText("What coordinate is good at",150,50);
	ctx.fillText("chewing?",320,100);
}

function rl_level27_click(x, y){

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
		console.log("Changing level..");
		return new rlLevel28();
	}

	if(this.button4.hitTest(x, y)){
		console.log("Failed...");
		return new rlFailed();
	}
	
	return this;
}

function rl_level27_mouse_move(x, y){

	this.button1.hitTest(x, y);
	this.button2.hitTest(x, y);
	this.button3.hitTest(x, y);
	this.button4.hitTest(x, y);
}