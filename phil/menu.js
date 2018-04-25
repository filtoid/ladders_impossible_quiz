function PJMenu(){
    this.update = pj_menu_update;
    this.draw = pj_menu_draw;

    this.click = pj_menu_click;
    this.mouseMove = pj_menu_mouse_move;

    this.firstButtonHighlighted = false;

    this.button1 = new Button(20, 20, 150, 100, "Start");
}

function pj_menu_update(){

}

function pj_menu_draw(ctx){

  var old_color = ctx.fillStyle;

  this.button1.draw(ctx);

  ctx.font = "30px Arial";
  ctx.fillText("Impossible Quiz",200,50);

}

function pj_menu_click(x, y){
  console.log("Clicked at: " + x + ", " + y);
  return this;
}

function pj_menu_mouse_move(x, y){
  this.button1.hitTest(x, y);
  // if(x > 20 && x < 170 && y > 20 && y < 120){
  //   this.firstButtonHighlighted = true;
  // }else{
  //   this.firstButtonHighlighted = false;
  // }
}
