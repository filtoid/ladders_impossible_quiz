function rlLevel26() {

	this.update = rl_level26_update;
	this.draw = rl_level26_draw;

	this.click = rl_level26_click;
    this.mouseMove = rl_level26_mouse_move;

	this.firstButtonHighlighted = false;

	this.buttonEnt = new Button(580,240,100,80, "Ent");
	this.circle = new Circle (50,50,50,50,"26");

	var x = document.getElementById("rlInputBoxL26");
	x.style.display = "block";

	var y = document.getElementById("rlSecretCodeL3_26")
	y.innerHTML = "My name is Jim...";
	y.style.display = "block";
}

function rl_level26_update(){
	
}

function rl_level26_draw(ctx){
	
	this.buttonEnt.draw(ctx);
	this.circle.draw(ctx);

	ctx.font= "40px Gugi";
	ctx.fillText("My name has been lost on",160,50);
	ctx.fillText("this page. What am I?",200,100);
	ctx.fillText("I am a...",300,200);
}

function rl_level26_click(x, y){

	console.log("Clicked at: " + x + ", " + y);
	if(this.buttonEnt.hitTest(x, y)){
		var x = document.getElementById("rlInputBoxL26");
		var y = document.getElementById("rlSecretCodeL3_26");

		if (x.value == "Horse" || x.value == "horse" || x.value == "HORSE") {
			console.log("Changing Level..");
			y.style.display = "none";
			x.style.display = "none";
			return new rlLevel27;
		}

		else if (x.value == "Jim" || x.value == "jim" || x.value == "JIM") {
			x.value = "Not Exactly";
		}

		else {
			console.log("Failed...");
			y.style.display = "none";
			x.style.display = "none";
			return new rlFailed;
		}
	}
	return this;
}

function rl_level26_mouse_move(x, y){

	this.buttonEnt.hitTest(x, y);
}