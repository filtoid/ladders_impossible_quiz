function rlLevel1() {

	this.update = rl_level1_update;
	this.draw = rl_level1_draw;

	this.click = rl_level1_click;
    this.mouseMove = rl_level1_mouse_move;

	this.firstButtonHighlighted = false;

	this.button1 = new Button(75,300,275,80, "Carefully");
	this.button2 = new Button(450,300,275,80, "Quickly");
	this.button3 = new Button(75,400,275,80, "Confidently");
	this.button4 = new Button(450,400,275,80, "Easily");
	this.circle = new Circle (50,50,50,50,"1");
}

function rl_level1_update(){
	
}

function rl_level1_draw(ctx){
	
	this.button1.draw(ctx);
	this.button2.draw(ctx);
	this.button3.draw(ctx);
	this.button4.draw(ctx);
	this.circle.draw(ctx);

	ctx.font= "40px Gugi";
	ctx.fillText("How should you start an ",170,50);
	ctx.fillText("improbable quiz?",240,100);
}

function rl_level1_click(x, y){

	console.log("Clicked at: " + x + ", " + y);
	if(this.button1.hitTest(x, y)){
		console.log("Changing level...");
		return new rlLevel2();
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
		console.log("Failed...");
		return new rlFailed();
	}

	return this;
}

function rl_level1_mouse_move(x, y){

	this.button1.hitTest(x, y);
	this.button2.hitTest(x, y);
	this.button3.hitTest(x, y);
	this.button4.hitTest(x, y);
}

