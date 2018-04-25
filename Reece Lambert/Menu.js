function rlMenu(){
	this.update = rl_menu_update;
	this.draw = rl_menu_draw;

	this.click = rl_menu_click;
    this.mouseMove = rl_menu_mouse_move;

	this.firstButtonHighlighted = false;

	this.button1 = new Button(50, 200, 225, 70, "Start");
}

function rl_menu_update(){
	
}

function rl_menu_draw(ctx){
	this.button1.draw(ctx);
	/*
	if(this.firstButtonHighlighted){
		ctx.fillStyle=("#FF0000")
	}
	else {
		ctx.fillStyle=("#800000")
	}
	ctx.fillRect(50,200,225,70);
	ctx.fillStyle=("#FF0000");
	ctx.fillRect(325,200,225,70);
	ctx.fillStyle=("#FF0000");
	ctx.fillRect(50,300,225,70);
	ctx.fillStyle=("#800000");
	ctx.fillRect(325,300,225,70);
	ctx.fillStyle=("#000000");
	*/

	ctx.font= "30px 'Gugi";
	ctx.fillText("The Highly Improbable Quiz",100,50);
}

function rl_menu_click(x, y){
  console.log("Clicked at: " + x + ", " + y);
  return this;
}

function rl_menu_mouse_move(x, y){
	this.button1.hitTest(x, y);

}
