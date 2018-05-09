function rlSuccess() {

	this.update = rl_success_update;
	this.draw = rl_success_draw;

	this.click = rl_success_click;
    this.mouseMove = rl_success_mouse_move;

	this.firstButtonHighlighted = false;

	this.button1 = new Button(265,450,275,80, "To credits");
}

function rl_success_update(){
	
}

function rl_success_draw(ctx){	
	
	this.button1.draw(ctx);

	ctx.font= "40px Gugi";
	ctx.fillText("Congrats! You've won! You've",110,50);
	ctx.fillText("successfully battled your way",105,100);
	ctx.fillText("through improbable puzzles and",90,150);
	ctx.fillText("incredibly unusual answers!",120,200);
	ctx.fillText("Not many people would of made",95,250);
	ctx.fillText("it here, so feel achieved.",160,300);
	ctx.fillText("Thanks for playing, take it easy.",95,350);
}

function rl_success_click(x, y){

	console.log("Clicked at: " + x + ", " + y);
	if(this.button1.hitTest(x, y)){
		console.log("Changing to Credits");
		return new rlCredits();
	}
	return this;
}

function rl_success_mouse_move(x, y){

	this.button1.hitTest(x, y);
}