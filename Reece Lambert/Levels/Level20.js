function rlLevel20() {

	this.update = rl_level20_update;
	this.draw = rl_level20_draw;

	this.click = rl_level20_click;
    this.mouseMove = rl_level20_mouse_move;

	this.firstButtonHighlighted = false;

	this.button1 = new Button(75,300,275,80, "?");
	this.button2 = new Button(450,300,275,80, "3");
	this.button3 = new Button(75,400,275,80, "I getcha");
	this.button4 = new Button(450,400,275,80, "A horse named Jim");
	this.circle = new Circle (50,50,50,50,"20");
}

function rl_level20_update(){
	
}

function rl_level20_draw(ctx){
	
	this.button1.draw(ctx);
	this.button2.draw(ctx);
	this.button3.draw(ctx);
	this.button4.draw(ctx);
	this.circle.draw(ctx);

	ctx.font= "40px Gugi";
	ctx.fillText("Question 21:-",280,50);
	ctx.fillText("1472580369",290,100);
}

function rl_level20_click(x, y){

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
		console.log("Changing level...");
		return new rlFailed();
	}

	if(this.button4.hitTest(x, y)){
		console.log("Failed...");
		return new rlFailed();
	}
	
	return this;
}

function rl_level20_mouse_move(x, y){

	this.button1.hitTest(x, y);
	this.button2.hitTest(x, y);
	this.button3.hitTest(x, y);
	this.button4.hitTest(x, y);
}