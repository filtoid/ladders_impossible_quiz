function rlMenu(){

	this.update = rl_menu_update;
	this.draw = rl_menu_draw;

	this.click = rl_menu_click;
    this.mouseMove = rl_menu_mouse_move;

	this.firstButtonHighlighted = false;

	this.button1 = new Button(75,300,275,80, "Start");
	//Examples of changing the color, highlighted color and text color
	//this.button1.color = "#FF0000";
	//this.button1.colorHighlighted = "#800000";
	//this.button1.textColor = "#000000";

	this.button2 = new Button(450,300,275,80, "Instructions");
	this.button3 = new Button(75,400,275,80, "Credits");

	//For the input box in lvl 3, hidden until lvl 3

	var x = document.getElementById("rlInputBoxL3");
	x.style.display = "none";

	//For the secret link that appears in the menu after 6249 on lvl 3

	var y = document.getElementById("secretLinkText");

	if (y.innerHTML == "Secret Link") {
		y.style.display = "block";
	}

	else {
		y.style.display = "none";
	}
}

function rl_menu_update(){
	
}

function rl_menu_draw(ctx){

	this.button1.draw(ctx);
	this.button2.draw(ctx);
	this.button3.draw(ctx);

	ctx.font= "40px Gugi";
	ctx.fillText("The Highly Improbable Quiz",140,50);
}

function rl_menu_click(x, y){

	console.log("Clicked at: " + x + ", " + y);
	if(this.button1.hitTest(x, y)){
		var x = document.getElementById("secretLinkText");
		x.style.display = "none"
		console.log("Changing level..");
		return new rlLevel1();
	}

	if(this.button2.hitTest(x, y)){
		var x = document.getElementById("secretLinkText");
		x.style.display = "none"
		console.log("Changing level...");
		return new rlInstructions();
	}

	if(this.button3.hitTest(x, y)){
		var x = document.getElementById("secretLinkText");
		x.style.display = "none"
		console.log("Changing level...");
		return new rlCredits();
	}

	return this;
}

function rl_menu_mouse_move(x, y){

	this.button1.hitTest(x, y);
	this.button2.hitTest(x, y);
	this.button3.hitTest(x, y);
}