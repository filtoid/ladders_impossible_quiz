function LWlevel3(){
  this.update = lw_level3_update;
  this.draw = lw_level3_draw

  this.click = lw_level3_click;
  this.mouseMove = lw_level3_mouse_move;

  this.firstButtonHighlighted = false;
  this.button1 = new Button(200, 200, 150, 50, "1");
  this.button1.color = '#f28f04'
  this.button1.colorHighlighted = '#ffbc70'
  this.button1.textColor = '#000000'
  this.button2 = new Button(600, 200, 150, 50, "2");
  this.button2.color = '#f28f04'
  this.button2.colorHighlighted = '#ffbc70'
  this.button2.textColor = '#000000'
  this.button3 = new Button(200, 500, 150, 50, "3" );
  this.button3.color = '#f28f04'
  this.button3.colorHighlighted = '#ffbc70'
  this.button3.textColor = '#000000'
  this.button4 = new Button(600, 500, 150, 50, "4");
  this.button4.color = '#f28f04'
  this.button4.colorHighlighted = '#ffbc70'
  this.button4.textColor = '#000000'



}
function lw_level3_update(){

}


function lw_level3_draw(ctx){
  this.button1.draw(ctx);
  this.button2.draw(ctx);
  this.button3.draw(ctx);
  this.button4.draw(ctx);
  ctx.font = "30px Arial";
  ctx.fillText("Which of these is a greatsword?",350,50);
  ctx.fillStyle = '#00000'

}


function lw_level3_click(){


}

function lw_level3_mouse_move(x, y){
  this.button1.hitTest(x, y);
  this.button2.hitTest(x, y);
  this.button3.hitTest(x, y);
  this.button4.hitTest(x, y);
}
