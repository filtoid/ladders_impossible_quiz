function LWMenu(){
  this.update = lw_menu_update;
  this.draw = lw_menu_draw

  this.click = lw_menu_click;
  this.mouseMove = lw_menu_mouse_move;

  this.firstButtonHighlighted = false;
  this.button1 = new Button(250, 160, 200, 150, "Start");
  this.button1.color = '#f28f04'
  this.button1.colorHighlighted = '#ffbc70'
  this.button1.textColor = '#000000'
}

function lw_menu_update(){


}

function lw_menu_draw(ctx){

  this.button1.draw(ctx)

  ctx.fillStyle = '#f28f04'
  ctx.fillRect(495,160,200,150);
  ctx.fillStyle = '#f28f04'
  ctx.fillRect(250,375,450,150)
  ctx.fillStyle = '#000000'
  ctx.font = "30px Arial";
  ctx.fillText("Impossible Quiz",350,50);
  ctx.fillStyle = '#00000'

}
function lw_menu_click(x, y){
  if(this.button1.hitTest(x, y)){
    return new LWlevel1();
  }
  return this;
}

function lw_menu_mouse_move(x, y){
this.button1.hitTest(x, y)


}
