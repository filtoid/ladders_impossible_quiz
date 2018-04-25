function rlMenu(){
	this.update = rl_menu_update;
	this.draw = rl_menu_draw;
}

function rl_menu_update(){
	
}

function rl_menu_draw(ctx){
ctx.fillRect(20,20,250,100);

	ctx.font= "30px Arial";
	ctx.fillText("Impossible Quiz",300,50);
}