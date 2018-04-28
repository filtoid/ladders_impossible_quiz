function rlCredits(){

	this.update = rl_credits_update;
	this.draw = rl_credits_draw;

	this.click = rl_credits_click;
    this.mouseMove = rl_credits_mouse_move;

	this.firstButtonHighlighted = false;

	this.button1 = new Button(262,450,275,80, "Back to Menu");
}

function rl_credits_update(){
	
}

function rl_credits_draw(ctx){

	this.button1.draw(ctx);
	

	ctx.font= "30px Gugi";
	ctx.fillText("Puzzle design - Dude with hoodie",160,50);
	ctx.fillText("Background design - Dude with hoodie",120,100);
	ctx.fillText("Coding - Dude with hoodie",210,150);
	ctx.fillText("Director - Dude with hoodie",205,200);
	ctx.fillText("Editor - Dude with hoodie",220,250);
	ctx.fillText("Camera Guy - Dude with hoodie",170,300);
	ctx.fillText("Stunt Dude - Dude with hoodie",180,350);
	ctx.fillText("The guy with a hood - Dude with hoodie",120,400);
}

function rl_credits_click(x, y){

	console.log("Clicked at: " + x + ", " + y);
	if(this.button1.hitTest(x, y)){
		console.log("Changing level..");
		return new rlMenu();
	}

	return this;
}

function rl_credits_mouse_move(x, y){

	this.button1.hitTest(x, y);
}