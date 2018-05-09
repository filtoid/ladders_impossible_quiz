function LWcredits(){
  this.update = lw_credits_update;
  this.draw = lw_credits_draw

  this.click = lw_credits_click;
  this.mouseMove = lw_credits_mouse_move;

  this.firstButtonHighlighted = false;
  this.button1 = new Button(350, 400, 200, 150, "Menu");
  this.button1.color = '#009933'
  this.button1.colorHighlighted = '#66ff33'
  this.button1.textColor = '#000000'
}

function lw_credits_update(){


}
function lw_credits_draw(){
this.button1.draw(ctx)

  ctx.font = "30px Arial";
  ctx.fillText("Credits",400,50);
  ctx.fillStyle = '#00000'
  ctx.fillText("Quiz Idea - Liam Watson",275,200);
  ctx.fillStyle = '#00000'
  ctx.fillText("Images - Wizards of the Coast",275,350);
  ctx.fillStyle = '#00000'

}

function lw_credits_click(x, y){
  if(this.button1.hitTest(x, y)){
    return new LWMenu
  }
return this;
}

function lw_credits_mouse_move(x, y){
  this.button1.hitTest(x, y)
}
