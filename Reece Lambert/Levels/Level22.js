function rlLevel22() {

	this.update = rl_level22_update;
	this.draw = rl_level22_draw;

	this.click = rl_level22_click;
    this.mouseMove = rl_level22_mouse_move;

	this.firstButtonHighlighted = false;

	this.button1 = new Button(75,300,275,80, "Maybe at the Pond");
	this.button2 = new Button(450,300,275,80, "Maybe at the Lake");
	this.button3 = new Button(75,400,275,80, "Maybe at the River");
	this.button4 = new Button(450,400,275,80, "Maybe elsewhere...");
	this.circle = new Circle (50,50,50,50,"22");
}

function rl_level22_update(){
	
}

function rl_level22_draw(ctx){
	
	this.button1.draw(ctx);
	this.button2.draw(ctx);
	this.button3.draw(ctx);
	this.button4.draw(ctx);
	this.circle.draw(ctx);

	ctx.font= "40px Gugi";
	ctx.fillText("Where have my ducks gone?",130,50);
}

function rl_level22_click(x, y){

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
		return new rlLevel23();
	}

	if(this.button4.hitTest(x, y)){
		console.log("Failed...");
		return new rlFailed();
	}

	if(this.circle.hitTest(x, y)){
		console.log("Changing Level...");
		return new rlLevel23();
	}
	
	return this;
}

function rl_level22_mouse_move(x, y){

	this.button1.hitTest(x, y);
	this.button2.hitTest(x, y);
	this.button3.hitTest(x, y);
	this.button4.hitTest(x, y);
	this.circle.hitTest(x, y);

}