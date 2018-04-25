function LWlevel1(){
  this.update = lw_level1_update;
  this.draw = lw_level1_draw

  this.click = lw_level1_click;
  this.mouseMove = lw_level1_mouse_move;

  this.firstButtonHighlighted = false;
  this.button1 = new Button(100, 160, 150, 100, "Yes!");
  this.button1.color = '#f28f04'
  this.button1.colorHighlighted = '#ffbc70'
  this.button1.textColor = '#000000'
  this.button2 = new Button(325, 160, 150, 100, "Nope! See ya!");
  this.button2.color = '#f28f04'
  this.button2.colorHighlighted = '#ffbc70'
  this.button2.textColor = '#000000'
}

function lw_level1_update(){

}

function lw_level1_draw(ctx){
  this.button1.draw(ctx);
  this.button2.draw(ctx);
  ctx.font = "30px Arial";
  ctx.fillText("Do you want to play?",150,50);
  ctx.fillStyle = '#00000'
}

function lw_level1_click(x, y){
  if (this.button2.hitTest(x, y)) {
    return new LWMenu();
  }
  return this;
}
function lw_level1_mouse_move(x, y){
  this.button1.hitTest(x, y);
  this.button2.hitTest(x, y);
}
