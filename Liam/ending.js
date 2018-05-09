function LWending(){
    this.update = lw_ending_update;
    this.draw = lw_ending_draw
  
    this.click = lw_ending_click;
    this.mouseMove = lw_ending_mouse_move;
  
    this.firstButtonHighlighted = false;
    this.button1 = new Button(350, 160, 300, 200, "Return to Menu");
    this.button1.color = '#009933'
    this.button1.colorHighlighted = '#66ff33'
    this.button1.textColor = '#000000'
   
  }
  
  function lw_ending_update(){
  
  }
  
  function lw_ending_draw(ctx){
    this.button1.draw(ctx);
    ctx.font = "30px Arial";
    ctx.fillText("Thank you for playing!",350,50);
    ctx.fillStyle = '#00000'
  }
  
  
  
  function lw_ending_click(x, y){
    if (this.button1.hitTest(x, y)){
      return new LWMenu();
    }
    return this;
  }
  function lw_ending_mouse_move(x, y){
    this.button1.hitTest(x, y);
  }