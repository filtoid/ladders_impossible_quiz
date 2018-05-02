function PJLevel1(){
  this.update = pj_level_update;
  this.draw = pj_level_draw;

  this.click = pj_level_click;
  this.mouseMove = pj_level_mouse_move;

  this.buttons = [];
  this.buttons.push(new Button(120, 120, 150, 100, "Quit"));
  this.buttons.push(new Button(320, 120, 150, 100, "QUIT"));
  this.buttons.push(new Button(120, 260, 150, 100, "QU1T"));
  this.buttons.push(new Button(320, 260, 150, 100, "!Quit!"));

  // this.button1 = new Button(120, 120, 150, 100, "Quit");
  for(var i=0; i<this.buttons.length; i++){
    this.buttons[i].color = "#f4a142";
    this.buttons[i].colorHighlighted = "#ffbc70";
    this.buttons[i].textColor = "#000000";
  }
  
}

function pj_level_update(){
}

function pj_level_draw(ctx){

  for(var i=0; i<this.buttons.length; i++){
    this.buttons[i].draw(ctx);
  }

  ctx.font = "30px Arial";
  ctx.fillText("Try Not To Quit",200,50);
}

function pj_level_click(x, y){
  if(this.buttons[2].hitTest(x, y)){
    return new PJLevel2();
  }
  for(var i=0;i<this.buttons.length;i++){
    if(this.buttons[i].hitTest(x,y)){
      return new PJGameOver();
    }
  }
  return this;
}

function pj_level_mouse_move(x, y){
  for(var i=0; i<this.buttons.length; i++){
    this.buttons[i].hitTest(x, y);
  }
}
