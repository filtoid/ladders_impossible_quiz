function rlLevel16() {

	this.update = rl_level16_update;
	this.draw = rl_level16_draw;

	this.click = rl_level16_click;
    this.mouseMove = rl_level16_mouse_move;

	this.firstButtonHighlighted = false;

	this.button1 = new Button(100,200,100,80, "1");
	this.button2 = new Button(225,200,100,80, "2");
	this.button3 = new Button(350,200,100,80, "3");
	this.button4 = new Button(475,200,100,80, "4");
	this.button5 = new Button(600,200,100,80, "5");
	this.button6 = new Button(100,300,100,80, "6");
	this.button7 = new Button(225,300,100,80, "7");
	this.button8 = new Button(350,300,100,80, "8");
	this.button9 = new Button(475,300,100,80, "9");
	this.button10 = new Button(600,300,100,80, "10");
	this.button11 = new Button(100,400,100,80, "11");
	this.button12 = new Button(225,400,100,80, "12");
	this.button13 = new Button(350,400,100,80, "13");
	this.button14 = new Button(475,400,100,80, "14");
	this.button15 = new Button(600,400,100,80, "15");

	this.circle = new Circle (50,50,50,50,"16");
}

function rl_level16_update(){

}

function rl_level16_draw(ctx){
	
	this.button1.draw(ctx);
	this.button2.draw(ctx);
	this.button3.draw(ctx);
	this.button4.draw(ctx);
	this.button4.draw(ctx);
	this.button5.draw(ctx);
	this.button6.draw(ctx);
	this.button7.draw(ctx);
	this.button8.draw(ctx);
	this.button9.draw(ctx);
	this.button10.draw(ctx);
	this.button11.draw(ctx);
	this.button12.draw(ctx);
	this.button13.draw(ctx);
	this.button14.draw(ctx);
	this.button15.draw(ctx);
	this.circle.draw(ctx);

	ctx.font= "40px Gugi";
	ctx.fillText("What question number has",140,50);	
	ctx.fillText("been repeated twice?",200,100);
}

function rl_level16_click(x, y){

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
		return new rlLevel11();
	}

	if(this.button4.hitTest(x, y)){
		console.log("Failed...");
		return new rlFailed();
	}

	if(this.button5.hitTest(x, y)){
		console.log("Failed...");
		return new rlFailed();
	}

	if(this.button6.hitTest(x, y)){
		console.log("Failed...");
		return new rlFailed();
	}

	if(this.button7.hitTest(x, y)){
		console.log("Failed...");
		return new rlFailed();
	}

	if(this.button8.hitTest(x, y)){
		console.log("Failed...");
		return new rlFailed();
	}

	if(this.button9.hitTest(x, y)){
		console.log("Failed...");
		return new rlFailed();
	}

	if(this.button10.hitTest(x, y)){
		console.log("Failed...");
		return new rlFailed();
	}

	if(this.button11.hitTest(x, y)){
		console.log("Changing Level..");
		return new rlLevel17();
	}

	if(this.button12.hitTest(x, y)){
		console.log("Failed...");
		return new rlFailed();
	}

	if(this.button13.hitTest(x, y)){
		console.log("Failed...");
		return new rlFailed();
	}

	if(this.button14.hitTest(x, y)){
		console.log("Failed...");
		return new rlFailed();
	}

	if(this.button15.hitTest(x, y)){
		console.log("Failed...");
		return new rlFailed();
	}



	return this;
}

function rl_level16_mouse_move(x, y){

	this.button1.hitTest(x, y);
	this.button2.hitTest(x, y);
	this.button3.hitTest(x, y);
	this.button4.hitTest(x, y);
	this.button5.hitTest(x, y);
	this.button6.hitTest(x, y);
	this.button7.hitTest(x, y);
	this.button8.hitTest(x, y);
	this.button9.hitTest(x, y);
	this.button10.hitTest(x, y);
	this.button11.hitTest(x, y);
	this.button12.hitTest(x, y);
	this.button13.hitTest(x, y);
	this.button14.hitTest(x, y);
	this.button15.hitTest(x, y);
}