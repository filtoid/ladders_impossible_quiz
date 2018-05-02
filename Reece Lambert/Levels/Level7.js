function rlLevel7() {

	this.update = rl_level7_update;
	this.draw = rl_level7_draw;

	this.click = rl_level7_click;
    this.mouseMove = rl_level7_mouse_move;

	this.firstButtonHighlighted = false;

	this.button1 = new Button(75,300,275,80, "A number");
	this.button2 = new Button(450,300,275,80, "A sign");
	this.button3 = new Button(75,400,275,80, "A horse named Jim");
	this.button4 = new Button(450,400,275,80, "A rubber");
	this.circle = new Circle (50,50,50,50,"7");
	this.keyPressed = rlLevel7KeyPressed;
}

function rl_level7_update(){

}

function rl_level7_draw(ctx){
	
	this.button1.draw(ctx);
	this.button2.draw(ctx);
	this.button3.draw(ctx);
	this.button4.draw(ctx);
	this.circle.draw(ctx);

	ctx.font= "40px Gugi";
	ctx.fillText("1_ and 1000_ _ are the same",150,50);	
	ctx.fillText("if _ is...", 340,100);
}

function rl_level7_click(x, y){

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
		return new rlFailed();
	}

	if(this.button4.hitTest(x, y)){
		console.log("Failed...");
		return new rlFailed();
	}

	return this;
}

function rl_level7_mouse_move(x, y){

	this.button1.hitTest(x, y);
	this.button2.hitTest(x, y);
	this.button3.hitTest(x, y);
	this.button4.hitTest(x, y);
}

function rlLevel7KeyPressed(key) {
	console.log(key);
	if (key == 'm' || key =='M') {
		console.log("Changing Level..");
		return new rlLevel8();
	}
	return this;

}

