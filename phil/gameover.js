function PJGameOver(){
    this.update = pj_gameover_update;
    this.draw = pj_gameover_draw;
  
    this.click = pj_gameover_click;
    this.mouseMove = pj_gameover_mouse_move;
  
    this.button1 = new Button(120, 120, 150, 100, "Reset");
    this.button1.color = "#f4a142";
    this.button1.colorHighlighted = "#ffbc70";
    this.button1.textColor = "#000000";
  }
  
  function pj_gameover_update(){
  }
  
  function pj_gameover_draw(ctx){
    this.button1.draw(ctx);
  
    ctx.font = "30px Arial";
    ctx.fillText("Game Over - you lose",200,50);
  }
  
  function pj_gameover_click(x, y){
    if(this.button1.hitTest(x, y)){
      return new PJMenu();
    }
    return this;
  }
  
  function pj_gameover_mouse_move(x, y){
    this.button1.hitTest(x, y);
  }
  