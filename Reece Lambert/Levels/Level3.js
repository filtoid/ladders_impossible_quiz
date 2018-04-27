function rlLevel3() {

	this.update = rl_level3_update;
	this.draw = rl_level3_draw;

	this.click = rl_level3_click;
    this.mouseMove = rl_level3_mouse_move;

	this.firstButtonHighlighted = false;

	this.button1 = new Button(260,250,80,80, "1");

	this.button2 = new Button(360,250,80,80, "2");

	this.button3 = new Button(460,250,80,80, "3");

	this.button4 = new Button(260,350,80,80, "4");

	this.button5 = new Button(360,350,80,80, "5");

	this.button6 = new Button(460,350,80,80, "6");

	this.button7 = new Button(260,450,80,80, "7");

	this.button8 = new Button(360,450,80,80, "8");

	this.button9 = new Button(460,450,80,80, "9");

	this.button10 = new Button(360,550,80,80, "0");

	this.circle = new Circle (50,50,50,50,"3");

}

function rl_level3_update(){
	
}

function rl_level3_draw(ctx){	
	
	this.button1.draw(ctx);
	this.button2.draw(ctx);
	this.button3.draw(ctx);
	this.button4.draw(ctx);
	this.button5.draw(ctx);
	this.button6.draw(ctx);
	this.button7.draw(ctx);
	this.button8.draw(ctx);
	this.button9.draw(ctx);
	this.button10.draw(ctx);
	this.circle.draw(ctx);

	ctx.font= "40px Gugi";
	ctx.fillText("Inspect to find the code",170,50);

}

function rl_level3_click(x, y){

	console.log("Clicked at: " + x + ", " + y);
	if(this.button1.hitTest(x, y)){
		console.log("inputed 1");
		
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

function rl_level3_mouse_move(x, y){

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

}