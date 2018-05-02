function LWlevel2(){
  this.update = lw_level2_update;
  this.draw = lw_level2_draw

  this.click = lw_level2_click;
  this.mouseMove = lw_level2_mouse_move;

  this.firstButtonHighlighted = false;
  this.button1 = new Button(100, 290, 150, 100, "Beholder");
  this.button1.color = '#f28f04'
  this.button1.colorHighlighted = '#ffbc70'
  this.button1.textColor = '#000000'
  this.button2 = new Button(325, 290, 150, 100, "Floaty Eyeball");
  this.button2.color = '#f28f04'
  this.button2.colorHighlighted = '#ffbc70'
  this.button2.textColor = '#000000'


}

function lw_level2_update(){

}

function lw_level2_draw(ctx){
  this.button1.draw(ctx);
  this.button2.draw(ctx);
  ctx.font = "30px Arial";
  ctx.fillText("What is this creature?",150,50);
  ctx.fillStyle = '#00000'
}

function lw_level2_click(x, y){
return this;
}





function lw_level2_mouse_move(x, y){
  this.button1.hitTest(x, y);
  this.button2.hitTest(x, y);
}
