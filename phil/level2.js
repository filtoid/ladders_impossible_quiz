function PJLevel2(){
    this.update = pj_level2_update;
    this.draw = pj_level2_draw;
  
    this.click = pj_level2_click;
    this.mouseMove = pj_level2_mouse_move;
  
    this.buttons = [];
    this.buttons.push(new Button(520, 260, 8, 8, ""))
    for(var i=0; i<this.buttons.length; i++){
        this.buttons[i].color = "#ffffff";
        this.buttons[i].colorHighlighted = "#ffffff";
        this.buttons[i].textColor = "#ffffff";
    }

    this.img = new Image();
    this.img.src = "pic.jpg";
    
  }
  
  function pj_level2_update(){
  }
  
  function pj_level2_draw(ctx){
    
    ctx.drawImage(this.img, 0, 0, 600, 400);

    for(var i=0; i<this.buttons.length; i++){
        this.buttons[i].draw(ctx);
    }

    ctx.fillStyle = '#ffffff';
    ctx.font = "30px Arial";
    ctx.fillText("Level 2",200,50);
    ctx.font = "20px Arial";
    ctx.fillText("Twinkle Twinkle Little Star",100,120);
  }
  
  function pj_level2_click(x, y){
    for(var i=0; i<this.buttons.length; i++){
        if(this.buttons[i].hitTest(x, y)){
            return new PJLevel3();
        }
      }
    return this;
  }
  
  function pj_level2_mouse_move(x, y){
    for(var i=0; i<this.buttons.length; i++){
      this.buttons[i].hitTest(x, y);
    }
  }
  