function LWMenu(){
  this.update = lw_menu_update;
  this.draw = lw_menu_draw

  this.click = lw_menu_click;
  this.mouseMove = lw_menu_mouse_move;

  this.firstButtonHighlighted = false;
  this.button1 = new Button(250, 160, 450, 150, "Start");
  this.button1.color = '#009933'
  this.button1.colorHighlighted = '#66ff33'
  this.button1.textColor = '#000000'
  this.button2 = new Button(250, 375, 450, 150, "Credits");
  this.button2.color = '#009933'
  this.button2.colorHighlighted = '#66ff33'
  this.button2.textColor = '#000000'
}

function lw_menu_update(){


}

function lw_menu_draw(ctx){

  this.button1.draw(ctx)
  this.button2.draw(ctx)

  ctx.font = "30px Arial";
  ctx.fillStyle = '#000000'
  ctx.fillText("D&D Quiz",400,50);


}
function lw_menu_click(x, y){
  if(this.button1.hitTest(x, y)){
    return new LWlevel1();
  }
  if(this.button2.hitTest(x, y)){
    return new LWcredits
  }
  return this;
}

function lw_menu_mouse_move(x, y){
this.button1.hitTest(x, y)
this.button2.hitTest(x, y)


}
