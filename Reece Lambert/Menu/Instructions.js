function rlInstructions(){

	this.update = rl_instructions_update;
	this.draw = rl_instructions_draw;

	this.click = rl_instructions_click;
    this.mouseMove = rl_instructions_mouse_move;

	this.firstButtonHighlighted = false;

	this.button1 = new Button(262,450,275,80, "Back to Menu");
}

function rl_instructions_update(){

}

function rl_instructions_draw(ctx){

	this.button1.draw(ctx);

	ctx.font= "30px Gugi";
	ctx.fillText("Complete Questions with improbable answers.",60,50);
	ctx.fillText("Get a question wrong and you'll get pushed back",50,100);
	ctx.fillText("to the start. Agonizing.",250,150);
}

function rl_instructions_click(x, y){

	console.log("Clicked at: " + x + ", " + y);
	if(this.button1.hitTest(x, y)){
		console.log("Changing to Menu");
		return new rlMenu();
	}

	return this;
}

function rl_instructions_mouse_move(x, y){

	this.button1.hitTest(x, y);
}