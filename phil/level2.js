function PJLevel2(){
    this.update = pj_level2_update;
    this.draw = pj_level2_draw;
  
    this.click = pj_level2_click;
    this.mouseMove = pj_level2_mouse_move;
  
    this.buttons = [];

    this.img = new Image();
    this.img.src = "pic.jpg";
    
  }
  
  function pj_level2_update(){
  }
  
  function pj_level2_draw(ctx){
  
    ctx.drawImage(this.img, 0, 0, 640, 480);

  
    ctx.font = "30px Arial";
    ctx.fillText("Level 2",200,50);
  }
  
  function pj_level2_click(x, y){
   
    return this;
  }
  
  function pj_level2_mouse_move(x, y){
    for(var i=0; i<this.buttons.length; i++){
      this.buttons[i].hitTest(x, y);
    }
  }
  