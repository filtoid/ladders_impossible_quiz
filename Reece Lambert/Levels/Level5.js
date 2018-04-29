function rlLevel5() {

	this.update = rl_level5_update;
	this.draw = rl_level5_draw;

	this.click = rl_level5_click;
    this.mouseMove = rl_level5_mouse_move;

	this.firstButtonHighlighted = false;

	this.button1 = new Button(75,300,275,80, "Police Officer");
	this.button2 = new Button(450,300,275,80, "Lawyer");
	this.button3 = new Button(75,400,275,80, "Footballer");
	this.button4 = new Button(450,400,275,80, "Chef");
	this.buttonAnswer = new Button(221,67,75,40, "ve t");
	this.circle = new Circle (50,50,50,50,"5");
}

function rl_level5_update(){
  
}

function rl_level5_draw(ctx){
	
	this.button1.draw(ctx);
	this.button2.draw(ctx);
	this.button3.draw(ctx);
	this.button4.draw(ctx);
	this.circle.draw(ctx);

	ctx.font= "40px Gugi";
	ctx.fillText("Which of these professions",140,50);
	ctx.fillText("lo",190,100);
	this.buttonAnswer.draw2(ctx);
	this.buttonAnswer.color = "#00000000";
	this.buttonAnswer.colorHighlighted = "#AAAAAA22";
	ctx.fillText("o help animals?",295,100);
		
}

function rl_level5_click(x, y){

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

	if(this.buttonAnswer.hitTest(x, y)){
		console.log("Changing Level..");
		return new rlLevel6();
	}

	return this;
}

function rl_level5_mouse_move(x, y){

	this.button1.hitTest(x, y);
	this.button2.hitTest(x, y);
	this.button3.hitTest(x, y);
	this.button4.hitTest(x, y);
	this.buttonAnswer.hitTest(x, y);
}