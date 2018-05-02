function PJLevel4(){
    this.update = pj_level4_update;
    this.draw = pj_level4_draw;
  
    this.click = pj_level4_click;
    this.mouseMove = pj_level4_mouse_move;
  
    this.buttons = [];
    this.buttons.push(new Button(220, 260, 20, 20, ""))
    for(var i=0; i<this.buttons.length; i++){
        this.buttons[i].color = "#f4a142";
        this.buttons[i].colorHighlighted = "#ffbc70";
        this.buttons[i].textColor = "#000000";
    }
    this.buttonMovingUp = false;
    // this.img = new Image();
    // this.img.src = "pic.jpg";
    
  }
  
  function pj_level4_update(){
      var btn = this.buttons[0];
      btn.loc.x += 4;
      if(btn.loc.x > 600){
          btn.loc.x = 0;
      }
      if(this.buttonMovingUp){
          btn.loc.y -= 3;
      }else{
          btn.loc.y += 3;
      }
      if(btn.loc.y > 300){
        this.buttonMovingUp = true;
      }else if(btn.loc.y < 200){
        this.buttonMovingUp = false;
      }
  }
  
  function pj_level4_draw(ctx){
    
    // ctx.drawImage(this.img, 0, 0, 600, 400);

    for(var i=0; i<this.buttons.length; i++){
        this.buttons[i].draw(ctx);
    }

    ctx.fillStyle = '#000000';
    ctx.font = "30px Arial";
    ctx.fillText("Level 4",200,50);
    ctx.font = "20px Arial";
    ctx.fillText("Catch the button",100,120);
  }
  
  function pj_level4_click(x, y){
    // for(var i=0; i<this.buttons.length; i++){
    //     if(this.buttons[i].hitTest(x, y)){
    //         // Move to next level
            
    //     }
    //   }
    return this;
  }
  
  function pj_level4_mouse_move(x, y){
    for(var i=0; i<this.buttons.length; i++){
      this.buttons[i].hitTest(x, y);
    }
  }
  