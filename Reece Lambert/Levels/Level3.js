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
	this.buttonDelete = new Button(260,550,80,80, "Del");
	this.button0 = new Button(360,550,80,80, "0");
	this.buttonEnter = new Button(460,550,80,80, "Ent");
	this.circle = new Circle (50,50,50,50,"3");

	var x = document.getElementById("rlInputBoxL3");
	x.style.display = "block";
	x.value = "";

	var y = document.getElementById("rlSecretCodeL3");
	y.style.display = "block";
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
	this.buttonDelete.draw(ctx);
	this.button0.draw(ctx);
	this.buttonEnter.draw(ctx);
	this.circle.draw(ctx);

	ctx.font= "40px Gugi";
	ctx.fillText("Ah, we have been 'inspecting'",130,50);
	ctx.fillText("you",365,100);
}

function rl_level3_click(x, y){
	
	//When clicked, buttons 0 to 9 will display their corresponding number 
	//inside the input box
	console.log("Clicked at: " + x + ", " + y);
	if(this.button1.hitTest(x, y)){
		console.log("inputed 1");
		var x = document.getElementById("rlInputBoxL3").value;
		document.getElementById("rlInputBoxL3").value  = x + "1";
	}

	if(this.button2.hitTest(x, y)){
		console.log("inputed 2");
		var x = document.getElementById("rlInputBoxL3").value;
		document.getElementById("rlInputBoxL3").value  = x + "2";
	}

	if(this.button3.hitTest(x, y)){
		console.log("inputed 3");
		var x = document.getElementById("rlInputBoxL3").value;
		document.getElementById("rlInputBoxL3").value  = x + "3";
	}

	if(this.button4.hitTest(x, y)){
		console.log("inputed 4");
		var x = document.getElementById("rlInputBoxL3").value;
		document.getElementById("rlInputBoxL3").value  = x + "4";
	}

	if(this.button5.hitTest(x, y)){
		console.log("inputed 5");
		var x = document.getElementById("rlInputBoxL3").value;
		document.getElementById("rlInputBoxL3").value  = x + "5";	
	}

	if(this.button6.hitTest(x, y)){
		console.log("inputed 6");
		var x = document.getElementById("rlInputBoxL3").value;
		document.getElementById("rlInputBoxL3").value  = x + "6";	
	}

	if(this.button7.hitTest(x, y)){
		console.log("inputed 7");
		var x = document.getElementById("rlInputBoxL3").value;
		document.getElementById("rlInputBoxL3").value  = x + "7";
	}

	if(this.button8.hitTest(x, y)){
		console.log("inputed 8");
		var x = document.getElementById("rlInputBoxL3").value;
		document.getElementById("rlInputBoxL3").value  = x + "8";
	}

	if(this.button9.hitTest(x, y)){
		console.log("inputed 9");
		var x = document.getElementById("rlInputBoxL3").value;
		document.getElementById("rlInputBoxL3").value  = x + "9";
	}

	if(this.button0.hitTest(x, y)){
		console.log("inputed 0");
		var x = document.getElementById("rlInputBoxL3").value;
		document.getElementById("rlInputBoxL3").value  = x + "0";
	}

	if(this.buttonEnter.hitTest(x, y)){
		console.log("inputed Enter");
		var x = document.getElementById("rlInputBoxL3").value;
		var y = document.getElementById("rlSecretCodeL3");
		y.style.display = "none";

		// When enter is clicked and the code is 3279, hide the 
		// input box and change to level 4
		if (x === "3279"){
			console.log("code inputed was: " + x);
			var x = document.getElementById("rlInputBoxL3");
			x.style.display = "none";
			return new rlLevel4();
		}

		// When enter is clicked and the code is 6349, change
		// the secret link text to 'Secret Link', input the 
		// message 'link in menu' in the input box and remove
		// that message after 3 seconds
		else if (x === "6249"){
			console.log("code inputed was: " + x);
			document.getElementById("secretLinkText").innerHTML = "Secret Link";
			document.getElementById("rlInputBoxL3").value = "Link in menu";
			setTimeout(function rlfadeAway(){
				document.getElementById("rlInputBoxL3").value = "";
			} ,3000);
		}

		// If neither 3279 or 6249 is inputted, change the
		// canvas to the failed screen
		else {
			console.log("code inputed was: " + x);
			var z = document.getElementById("rlInputBoxL3");
			z.style.display = "none";
			return new rlFailed();	
		}
	}

	// Using the substring function, remove the last character
	// of the input box
	if(this.buttonDelete.hitTest(x, y)){
		console.log("inputed Delete");
		var x = document.getElementById("rlInputBoxL3").value;
		var y = x.substring(0, x.length - 1);
		document.getElementById("rlInputBoxL3").value = y;
		console.log("code is now: " + y);
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
	this.button0.hitTest(x, y);
	this.buttonEnter.hitTest(x, y);
}