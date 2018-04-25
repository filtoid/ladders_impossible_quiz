function PJMenu(){
    this.update = pj_menu_update;
    this.draw = pj_menu_draw;
}

function pj_menu_update(){

}

function pj_menu_draw(ctx){
  ctx.fillRect(20,20,150,100);

  ctx.font = "30px Arial";
  ctx.fillText("Impossible Quiz",200,50);

}
