



function Circle(_x, _y, _w, _h, _text){
  this.loc = new Location(_x, _y);
  this.size = new Location(_w, _h);
  this.color = "#404040";
  this.colorHighlighted = "#404040";
  this.text = _text;
  this.textColor = "#000000";
  this.highlighted = false;

  this.draw = circle_draw;
  this.hitTest = circle_hit_test;
}

function circle_draw(ctx){
  var old_font = ctx.font;
  var old_color = ctx.fillStyle;

  if(this.highlighted){
    ctx.fillStyle = this.colorHighlighted;
  }else{
    ctx.fillStyle = this.color;
  }
  ctx.font = "45px Raleway";

  //ctx.fillRect(this.loc.x, this.loc.y, this.size.x, this.size.y);
  ctx.beginPath();

  ctx.arc(this.loc.x,this.loc.y,this.size.x,0,2*Math.PI);
  ctx.fill();
  var txt_width = ctx.measureText(this.text).width;
  var txt_height = 20;
  // console.log(ctx.measureText(this.text));
  ctx.fillStyle = this.textColor;
  ctx.fillText(this.text, this.loc.x - (txt_width/2) , this.loc.y  + (txt_height/2));

  ctx.font = old_font;
  ctx.fillStyle = old_color;
}

function circle_hit_test(x, y){
  if(x > this.loc.x-this.size.x && x < this.loc.x + this.size.x && y > this.loc.y - this.loc.y && y < this.loc.y + this.size.y){
    this.highlighted = true;
    document.body.style.cursor = "pointer";
    return true;
  }else{
    this.highlighted = false;
    document.body.style.cursor = "default";
    return false;
  }
  return false;
}