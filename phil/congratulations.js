function PJCongratulations(){
    this.update = pj_congratulation_update;
    this.draw = pj_congratulation_draw;
  
    this.click = pj_congratulation_click;
    this.mouseMove = pj_congratulation_mouse_move;
  
    this.buttons = [];
    this.buttons.push(new Button(10, 10, 150, 50, "Menu"))
    for(var i=0; i<this.buttons.length; i++){
        this.buttons[i].color = "#f4a142";
        this.buttons[i].colorHighlighted = "#ffbc70";
        this.buttons[i].textColor = "#000000";
    }
    this.buttonMovingUp = false;

    this.confettiCannons = [];
    this.confettiCannons.push(new ConfettiDropper(5, 300, 2*(Math.PI/3)));
    this.confettiCannons.push(new ConfettiDropper(555, 300, Math.PI*1.35));
    
}
  
function pj_congratulation_update(){

    var count = 0;

    for(var i=0; i<this.confettiCannons.length; i++){
        this.confettiCannons[i].update();
        count += this.confettiCannons[i].confetti.length;
    }
    //console.log(count);
}

function pj_congratulation_draw(ctx){  
    for(var i=0; i<this.confettiCannons.length; i++){
        this.confettiCannons[i].draw(ctx);
    }

    for(var i=0;i<this.buttons.length; i++){
        this.buttons[i].draw(ctx);
    }

    ctx.fillStyle = '#000000';
    ctx.font = "30px Arial";
    ctx.fillText("Congratulations",200,50);
    ctx.font = "20px Arial";
    ctx.fillText("You beat the game",100,120);

    ctx.fillText("Now get back to work",100,150);
}

function pj_congratulation_click(x, y){
    for(var i=0; i<this.buttons.length; i++){
        if(this.buttons[i].hitTest(x, y)){
            // Move to next level
            return new PJMenu();
        }
    }
    return this;
}

function pj_congratulation_mouse_move(x, y){
    for(var i=0; i<this.buttons.length; i++){
        this.buttons[i].hitTest(x, y);
    }
}
