function LWlevel1(){
  this.update = lw_level1_update;
  this.draw = lw_level1_draw

  this.click = lw_level1_click;
  this.mouseMove = lw_level1_mouse_move;

  this.firstButtonHighlighted = false;
  this.button1 = new Button(250, 160, 200, 150, "Yes!");
  this.button1.color = '#009933'
  this.button1.colorHighlighted = '#66ff33'
  this.button1.textColor = '#000000'
  this.button2 = new Button(500, 160, 200, 150, "Nope! See ya!");
  this.button2.color = '#009933'
  this.button2.colorHighlighted = '#66ff33'
  this.button2.textColor = '#000000'
}

function lw_level1_update(){

}

function lw_level1_draw(ctx){
  this.button1.draw(ctx);
  this.button2.draw(ctx);
  ctx.font = "30px Arial";
  ctx.fillText("Do you want to play?",350,50);
  ctx.fillStyle = '#00000'
}



function lw_level1_click(x, y){
  if (this.button1.hitTest(x, y)){
    return new LWlevel2();
  }
  if (this.button2.hitTest(x, y)) {
    return new LWohwell();
  }
  return this;
}
function lw_level1_mouse_move(x, y){
  this.button1.hitTest(x, y);
  this.button2.hitTest(x, y);
}
