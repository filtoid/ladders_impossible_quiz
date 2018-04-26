function rlLevel3() {

	this.update = rl_level3_update;
	this.draw = rl_level3_draw;

	this.click = rl_level3_click;
    this.mouseMove = rl_level3_mouse_move;

	this.firstButtonHighlighted = false;

	this.button1 = new Button(75,200,275,80, "Carefully");

	this.button2 = new Button(450,200,275,80, "Eagerly");

	this.button3 = new Button(75,300,275,80, "You can't");

	this.button4 = new Button(450,300,275,80, "With ease");

	this.circle = new Circle (50,50,50,50,"2");

}

function rl_level3_update(){
	
}

function rl_level3_draw(ctx){	
	
	this.button1.draw(ctx);
	this.button2.draw(ctx);
	this.button3.draw(ctx);
	this.button4.draw(ctx);
	this.circle.draw(ctx);

	ctx.font= "40px Gugi";
	ctx.fillText("How should you start an ",170,50);
	ctx.fillText("impossible quiz?",240,100);

}

function rl_level3_click(x, y){

	console.log("Clicked at: " + x + ", " + y);
	if(this.button1.hitTest(x, y)){
		console.log("Changing level...");
		return new rlMenu();
	}
	if(this.button2.hitTest(x, y)){
		console.log("Changing level...");
		return new rlMenu();
	}
	if(this.button3.hitTest(x, y)){
		console.log("Changing level...");
		return new rlLevel3();
	}
	if(this.button4.hitTest(x, y)){
		console.log("Changing level...");
		return new rlMenu();
	}
	return this;

}

function rl_level2_mouse_move(x, y){

	this.button1.hitTest(x, y);
	this.button2.hitTest(x, y);
	this.button3.hitTest(x, y);
	this.button4.hitTest(x, y);

}