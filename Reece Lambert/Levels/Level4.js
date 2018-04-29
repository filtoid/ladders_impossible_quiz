function rlLevel4(){

	this.update = rl_level4_update;
	this.draw = rl_level4_draw;

	this.click = rl_level4_click;
    this.mouseMove = rl_level4_mouse_move;

	this.firstButtonHighlighted = false;

	this.button1 = new Button(75,300,275,80, "Yep");
	this.buttonAlt1 = new Button(75,300,275,80, "Well, in this case it does");
	this.button2 = new Button(450,300,275,80, "Nope..");
	this.button3 = new Button(75,400,275,80, "Couldn't say");
	this.button4 = new Button(450,400,275,80, "Is this still a quiz?");
	this.circle = new Circle(50,50,50,50,"4");

	var x = document.getElementById("inputBox");
	x.style.display = "none";
}

function rl_level4_update(){
	
}

function rl_level4_draw(ctx){
	var x = window.innerWidth;

	if (x > 600){
	this.button1.draw(ctx);
	}

	else {
	this.buttonAlt1.draw(ctx);
	}

	this.button2.draw(ctx);
	this.button3.draw(ctx);
	this.button4.draw(ctx);
	this.circle.draw(ctx);
	
	ctx.font= "40px Gugi";
	ctx.fillText("Does size matter?",220,50);
}

function rl_level4_click(x, y){

	console.log("Clicked at: " + x + ", " + y);
	if(this.button1.hitTest(x, y) && window.innerWidth > 600){
		console.log("Changing level..");
		return new rlFailed();
	}

	if(this.buttonAlt1.hitTest(x, y) && window.innerWidth < 600){
		console.log("Changing level..");
		return new rlLevel5();
	}

	if(this.button2.hitTest(x, y)){
		console.log("Changing level...");
		return new rlFailed();
	}

	if(this.button3.hitTest(x, y)){
		console.log("Changing level...");
		return new rlFailed();
	}

	if(this.button4.hitTest(x, y)){
		console.log("Changing level...");
		return new rlFailed();
	}

	return this;
}

function rl_level4_mouse_move(x, y){

	this.button1.hitTest(x, y);
	this.buttonAlt1.hitTest(x, y);
	this.button2.hitTest(x, y);
	this.button3.hitTest(x, y);
	this.button4.hitTest(x, y);
}