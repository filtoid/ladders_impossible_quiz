function LWlevel4(){
    this.update = lw_level4_update;
    this.draw = lw_level4_draw
  
    this.click = lw_level4_click;
    this.mouseMove = lw_level4_mouse_move;
  
    this.firstButtonHighlighted = false;
    this.button1 = new Button(200, 375, 200, 150, "Silver");
    this.button1.color = '#009933'
    this.button1.colorHighlighted = '#66ff33'
    this.button1.textColor = '#000000'
    this.button2 = new Button(575, 375, 200, 150, "Jumbone");
    this.button2.color = '#009933'
    this.button2.colorHighlighted = '#66ff33'
    this.button2.textColor = '#000000'

    this.img1 = new Image();
    this.img1.src = "Images/SilverBar.jpg";
    this.img2 = new Image();
    this.img2.src = "Images/Jumbone.jpg";

  }
  
  function lw_level4_update(){
  
  }
  
  function lw_level4_draw(ctx){
    ctx.drawImage(this.img1, 150, 100, 300, 200);
    ctx.drawImage(this.img2, 550, 100, 300, 200);
    this.button1.draw(ctx);
    this.button2.draw(ctx);
    ctx.font = "30px Arial";
    ctx.fillText("What harms Werewolves?",350,50);
    ctx.fillStyle = '#00000'
  }
  
  
  
  function lw_level4_click(x, y){
    if (this.button1.hitTest(x, y)) {
        return new LWlevel5();
      }
      if(this.button2.hitTest(x, y)){
        this.message = "Try Again"
        this.button2.text = "Incorrect!"
        this.button2.color = "#808080"
        this.button2.colorHighlighted = "#808080"
      }
      return this;
    }
    
  function lw_level4_mouse_move(x, y){
    this.button1.hitTest(x, y);
    this.button2.hitTest(x, y);
  }
  