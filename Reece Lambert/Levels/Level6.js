function rlLevel6() {

	this.update = rl_level6_update;
	this.draw = rl_level6_draw;

	this.click = rl_level6_click;
    this.mouseMove = rl_level6_mouse_move;

	this.firstButtonHighlighted = false;

	this.button1 = new Button(75,300,275,80, "Police Officer");
	this.button2 = new Button(450,300,275,80, "Lawyer");
	this.button3 = new Button(75,400,275,80, "Footballer");
	this.button4 = new Button(450,400,275,80, "Chef");
	this.circle = new Circle (50,50,50,50,"6");
}

function rl_level6_update(){
  
}

function rl_level6_draw(ctx){
	
	this.button1.draw(ctx);
	this.button2.draw(ctx);
	this.button3.draw(ctx);
	this.button4.draw(ctx);
	this.circle.draw(ctx);

	ctx.font= "40px Gugi";
	ctx.fillText("Which of these professions",140,50);		
}

function rl_level6_click(x, y){

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

function rl_level6_mouse_move(x, y){

	this.button1.hitTest(x, y);
	this.button2.hitTest(x, y);
	this.button3.hitTest(x, y);
	this.button4.hitTest(x, y);
}