function rlLevel28() {

	this.update = rl_level28_update;
	this.draw = rl_level28_draw;

	this.click = rl_level28_click;
    this.mouseMove = rl_level28_mouse_move;

	this.firstButtonHighlighted = false;

	this.button1 = new Button(75,300,275,80, "AH!");
	this.button2 = new Button(450,300,275,80, "EZ!");
	this.button3 = new Button(75,400,275,80, "CG!");
	this.button4 = new Button(450,400,275,80, "TV!");
	this.circle = new Circle (50,50,50,50,"28");
}

function rl_level28_update(){
	
}

function rl_level28_draw(ctx){
	
	this.button1.draw(ctx);
	this.button2.draw(ctx);
	this.button3.draw(ctx);
	this.button4.draw(ctx);
	this.circle.draw(ctx);

	ctx.font= "40px Gugi";
	ctx.fillText("Which one of these is an",160,50);
	ctx.fillText("element?",320,100);
}

function rl_level28_click(x, y){

	console.log("Clicked at: " + x + ", " + y);
	if(this.button1.hitTest(x, y)){
		console.log("Changing Level..");
		return new rlLevel29();
	}

	if(this.button2.hitTest(x, y)){
		console.log("Failed...");
		return new rlFailed();
	}

	if(this.button3.hitTest(x, y)){
		console.log("Failed..");
		return new rlFailed();
	}

	if(this.button4.hitTest(x, y)){
		console.log("Failed...");
		return new rlFailed();
	}
	
	return this;
}

function rl_level28_mouse_move(x, y){

	this.button1.hitTest(x, y);
	this.button2.hitTest(x, y);
	this.button3.hitTest(x, y);
	this.button4.hitTest(x, y);
}