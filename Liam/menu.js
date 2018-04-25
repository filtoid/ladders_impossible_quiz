function LWMenu(){
  this.update = lw_menu_update;
  this.draw = lw_menu_draw
}

function lw_menu_update(){


}

function lw_menu_draw(ctx){
  ctx.fillRect(20,20,150,100);
  ctx.font = "30px Arial";
  ctx.fillText("Impossible Quiz",200,50);

}
