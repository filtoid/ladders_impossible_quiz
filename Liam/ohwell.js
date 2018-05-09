function LWohwell(){
  this.update = lw_ohwell_update;
  this.draw = lw_ohwell_draw

  this.click = lw_ohwell_click;
  this.mouseMove = lw_ohwell_mouse_move;

  this.firstButtonHighlighted = false;
  this.button1 = new Button(350, 200, 300, 150, "Bye Bye!");
  this.button1.color = '#009933'
  this.button1.colorHighlighted = '#66ff33'
  this.button1.textColor = '#000000'
}

function lw_ohwell_update(){

}

function lw_ohwell_draw(ctx){
  this.button1.draw(ctx);
  ctx.font = "30px Arial";
  ctx.fillText("Oh well, What a shame!",350,50);
  ctx.fillStyle = '#00000'
}

function lw_ohwell_click(x, y){
  if(this.button1.hitTest(x, y)){
    return new LWMenu();
  }
  return this;
}
function lw_ohwell_mouse_move(x, y){
  this.button1.hitTest(x, y);
}
