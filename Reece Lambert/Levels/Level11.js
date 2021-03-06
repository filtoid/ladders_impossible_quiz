function rlLevel11() {

	this.update = rl_level11_update;
	this.draw = rl_level11_draw;

	this.click = rl_level11_click;
    this.mouseMove = rl_level11_mouse_move;

	this.firstButtonHighlighted = false;

	this.button1 = new Button(75,300,275,80, "Carefully");
	this.button2 = new Button(450,300,275,80, "Eagerly");
	this.button3 = new Button(75,400,275,80, "You can't");
	this.button4 = new Button(450,400,275,80, "With ease");
	this.circle = new Circle (50,50,50,50,"11");
}

function rl_level11_update(){

}

function rl_level11_draw(ctx){
	
	this.button1.draw(ctx);
	this.button2.draw(ctx);
	this.button3.draw(ctx);
	this.button4.draw(ctx);
	this.circle.draw(ctx);

	ctx.font= "40px Gugi";
	ctx.fillText("Deja vu",320,50);	
}

function rl_level11_click(x, y){

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
		return new rlLevel12_1();
	}

	if(this.button4.hitTest(x, y)){
		console.log("Failed...");
		return new rlFailed();
	}

	return this;
}

function rl_level11_mouse_move(x, y){

	this.button1.hitTest(x, y);
	this.button2.hitTest(x, y);
	this.button3.hitTest(x, y);
	this.button4.hitTest(x, y);
}