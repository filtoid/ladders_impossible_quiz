function rlLevel18() {

	this.update = rl_level18_update;
	this.draw = rl_level18_draw;

	this.click = rl_level18_click;
    this.mouseMove = rl_level18_mouse_move;

	this.firstButtonHighlighted = false;

	this.buttonEnter = new Button(700,240,80,80, "Ent");

	this.circle = new Circle (50,50,50,50,"18");

	var x = document.getElementById("rlInputBoxL18");
	x.style.display = "block";
	x.value = "";
}

function rl_level18_update(){

}

function rl_level18_draw(ctx){
	
	this.circle.draw(ctx);
	this.buttonEnter.draw(ctx);

	ctx.font= "40px Gugi";
	ctx.fillText("#FF0000",0,150);
	ctx.fillText("#FFA500",0,200);	
	ctx.fillText("#FFFF00",0,250);	
	ctx.fillText("#00FF00",0,300);	
	ctx.fillText("#00FFFF",0,350);	
	ctx.fillText("#FF00FF",0,400);	
	ctx.fillText("#FF0000",0,450);	
}

function rl_level18_click(x, y){
	if(this.buttonEnter.hitTest(x, y)){
		console.log("inputed Enter");
		var x = document.getElementById("rlInputBoxL18");
		x.style.display = "none";
		var y = x.value

		if (y === "rainbow" || y === "Rainbow" || y === "RAINBOW"){
			console.log("code inputed was: " + y);
			
			return new rlLevel19();
		}

		else {
			console.log("Failed..");
			return new rlFailed();
		}
	}
	return this;
}

function rl_level18_mouse_move(x, y){

	this.buttonEnter.hitTest(x, y);
}