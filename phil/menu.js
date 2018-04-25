function PJMenu(){
    this.update = pj_menu_update;
    this.draw = pj_menu_draw;

    this.click = pj_menu_click;
    this.mouseMove = pj_menu_mouse_move;

    this.firstButtonHighlighted = false;

    this.buttons = []
    this.buttons.push(new Button(20, 20, 150, 100, "Start"));
    this.buttons.push(new Button(20, 140, 150, 100, "About"));
    this.buttons.push(new Button(20, 260, 150, 100, "Another Button"));
    this.buttons.push(new Button(190, 260, 150, 100, "one more Button"));

    for(var i=0;i<this.buttons.length;i++){
      this.buttons[i].color = "#f4a142";
      this.buttons[i].colorHighlighted = "#ffbc70";
      this.buttons[i].textColor = "#000000";
    }
}

function pj_menu_update(){

}

function pj_menu_draw(ctx){

  var old_color = ctx.fillStyle;

  for(var i=0;i<this.buttons.length;i++){
    this.buttons[i].draw(ctx);
  }

  ctx.font = "30px Arial";
  ctx.fillText("Impossible Quiz",200,50);
}

function pj_menu_click(x, y){
  // console.log("Clicked at: " + x + ", " + y);
  if(this.buttons[0].hitTest(x, y)){
    return new PJLevel1();
  }
  return this;
}

function pj_menu_mouse_move(x, y){
  var didHit = false;
  for(var i=0;i<this.buttons.length;i++){
    didHit = didHit | this.buttons[i].hitTest(x, y);
  }
  if(didHit){
    document.body.style.cursor = "pointer";
  }else{
    document.body.style.cursor = "default";
  }
}
