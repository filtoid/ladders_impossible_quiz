function rlLevel1() {
	this.update = rl_Level1_update;
	this.draw = rl_Level1_draw;

	this.click = rl_Level1_click;
    this.mouseMove = rl_Level1_mouse_move;

	this.firstButtonHighlighted = false;

	this.button1 = new Button(50,200,225,70, "Carefully");
	this.button1.color = "#FF0000";
	this.button1.colorHighlighted = "#800000";
	this.button1.textColor = "#000000";

	this.button2 = new Button(325,200,225,70, "Quickly");
	this.button2.color = "#FF0000";
	this.button2.colorHighlighted = "#800000";
	this.button2.textColor = "#000000";

	this.button3 = new Button(50,300,225,70, "Confidently");
	this.button3.color = "#FF0000";
	this.button3.colorHighlighted = "#800000";
	this.button3.textColor = "#000000";

	this.button4 = new Button(325,300,225,70, "Easily");
	this.button4.color = "#FF0000";
	this.button4.colorHighlighted = "#800000";
	this.button4.textColor = "#000000";
}

function rl_Level1_update(){
	
}

function rl_Level1_draw(ctx){
	this.button1.draw(ctx);
	this.button2.draw(ctx);
	this.button3.draw(ctx);
	this.button4.draw(ctx);

	ctx.font= "30px 'Gugi";
	ctx.fillText("How should you start an ",150,50);
	ctx.fillText("impossible quiz?",165,100);
}

function rl_Level1_click(x, y){
	if(this.button1.hitTest(x, y)){
		console.log("Changing level...")
		return new rlMenu();
	}
	if(this.button2.hitTest(x, y)){
		console.log("Changing level...")
		return new rlMenu();
	}
	if(this.button3.hitTest(x, y)){
		console.log("Changing level...")
		return new rlMenu();
	}
	if(this.button4.hitTest(x, y)){
		console.log("Changing level...")
		return new rlMenu();
	}
}

function rl_Level1_mouse_move(x, y){
	this.button1.hitTest(x, y);
	this.button2.hitTest(x, y);
	this.button3.hitTest(x, y);
	this.button4.hitTest(x, y);


}

