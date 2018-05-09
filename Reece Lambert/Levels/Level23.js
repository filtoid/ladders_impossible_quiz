function rlLevel23() {

	this.update = rl_level23_update;
	this.draw = rl_level23_draw;

	this.click = rl_level23_click;
    this.mouseMove = rl_level23_mouse_move;

	this.firstButtonHighlighted = false;

	this.button1 = new Button(265,300,275,80, ">:)");
	this.buttonFail = new Button(332,17,75,40, "this");
	this.circle = new Circle (50,50,50,50,"23");
}

function rl_level23_update(){
	
}

function rl_level23_draw(ctx){
	
	this.button1.draw(ctx);
	this.button1.colorHighlighted = "#FFAAAA";
	this.circle.draw(ctx);

	ctx.font= "40px Gugi";
	ctx.fillText("Click",225,50);
	ctx.fillText("to lose",428,50);
	this.buttonFail.draw2(ctx);
	this.buttonFail.color = "#00000000";
	this.buttonFail.colorHighlighted = "#AAFFAA66";
}

function rl_level23_click(x, y){

	console.log("Clicked at: " + x + ", " + y);
	if(this.button1.hitTest(x, y)){
		console.log("Changing Level..");
		return new rlLevel24();
	}

	if(this.buttonFail.hitTest(x, y)){
		console.log("Failed...");
		return new rlFailed();
	}
	
	return this;
}

function rl_level23_mouse_move(x, y){

	this.button1.hitTest(x, y);
	this.buttonFail.hitTest(x, y);
}