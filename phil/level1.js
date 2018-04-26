function PJLevel1(){
  this.update = pj_level_update;
  this.draw = pj_level_draw;

  this.click = pj_level_click;
  this.mouseMove = pj_level_mouse_move;

  this.button1 = new Button(120, 120, 150, 100, "Quit");
  this.button1.color = "#f4a142";
  this.button1.colorHighlighted = "#ffbc70";
  this.button1.textColor = "#000000";
}

function pj_level_update(){
}

function pj_level_draw(ctx){
  this.button1.draw(ctx);
}

function pj_level_click(x, y){
  if(this.button1.hitTest(x, y)){
    return new PJMenu();
  }
  return this;
}

function pj_level_mouse_move(x, y){
  this.button1.hitTest(x, y);
}
