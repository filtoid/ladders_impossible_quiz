function rlLevel12_5() {

	this.update = rl_level12_5_update;
	this.draw = rl_level12_5_draw;
	
	this.click = function(){
	}

	this.moveToNextLevel = false;
	setTimeout(function(){
		cur_screen.moveToNextLevel = true;
	}, 3000);

    this.mouseMove = rl_level12_5_mouse_move;

	this.firstButtonHighlighted = false;
	
	this.circle = new Circle (50,50,50,50,"11");
}

function rl_level12_5_update(){
	if(this.moveToNextLevel == true){
		return new rlLevel13();
	}
}

function rl_level12_5_draw(ctx){

	this.circle.draw(ctx);

	ctx.font= "40px Gugi";
	ctx.fillText("Don't stop believing",210,50);
	ctx.fillText("Hold", 160,120);
	ctx.fillText("on to", 260,120);
	ctx.fillText("that", 370,120);
	ctx.font= "200px Gugi";
	ctx.fillText("feeling", 80,400);
}

function rl_level12_5_click(x, y){

	this.moveToNextLevel = true;
}

function rl_level12_5_mouse_move(x, y){

}