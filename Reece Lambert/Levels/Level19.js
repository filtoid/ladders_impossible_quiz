function rlLevel19() {

	this.update = rl_level19_update;
	this.draw = rl_level19_draw;

	this.click = rl_level19_click;
    this.mouseMove = rl_level19_mouse_move;

	this.firstButtonHighlighted = false;

	this.button1 = new Button(75,300,275,80, "3");
	this.button2 = new Button(450,300,275,80, "4");
	this.button3 = new Button(75,400,275,80, "5");
	this.button4 = new Button(450,400,275,80, "6");
	this.circle = new Circle (50,50,50,50,"19");
}

function rl_level19_update(){

}

function rl_level19_draw(ctx){
	
	this.button1.draw(ctx);
	this.button2.draw(ctx);
	this.button3.draw(ctx);
	this.button4.draw(ctx);
	this.circle.draw(ctx);

	ctx.font= "40px Gugi";
	ctx.fillText("How many times was my horse",130,50);	
	ctx.fillText("Jim mentioned throughout this",130,100);	
	ctx.fillText("quiz?",360,150);	
}

function rl_level19_click(x, y){

	console.log("Clicked at: " + x + ", " + y);
	if(this.button1.hitTest(x, y)){
		console.log("Failed...");
		return new rlFailed();
	}

	if(this.button2.hitTest(x, y)){
		console.log("Changing Level");
		return new rlLevel20();
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

function rl_level19_mouse_move(x, y){

	this.button1.hitTest(x, y);
	this.button2.hitTest(x, y);
	this.button3.hitTest(x, y);
	this.button4.hitTest(x, y);
}