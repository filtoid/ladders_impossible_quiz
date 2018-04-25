function PJMenu(){
    this.update = pj_menu_update;
    this.draw = pj_menu_draw;

    this.click = pj_menu_click;
    this.mouseMove = pj_menu_mouse_move;
}

function pj_menu_update(){

}

function pj_menu_draw(ctx){
  ctx.fillStyle = '#00ff00';
  ctx.fillRect(20,20,150,100);
  ctx.fillStyle = '#0000ff';
  ctx.fillRect(180,20,150,100);

  ctx.font = "30px Arial";
  ctx.fillText("Impossible Quiz",200,50);

}

function pj_menu_click(x, y){
  console.log("Clicked at: " + x + ", " + y);
}

function pj_menu_mouse_move(x, y){

}
