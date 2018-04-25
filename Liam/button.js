function Location(_x, _y){
  this.x = _x;
  this.y = _y;
}
function Button(_x, _y, _w, _h, _text){
  this.loc = new Location(_x, _y);
  this.size = new Location(_w, _h);
  this.color = "#00ff00";
  this.colorHighlighted = "#0000ff";
  this.text = _text;
  this.textColor = "#ff0000";
  this.highlighted = false;

  this.draw = button_draw;
  this.hitTest = button_hit_test;
}

function button_draw(ctx){
  var old_font = ctx.font;
  var old_color = ctx.fillStyle;

  if(this.highlighted){
    ctx.fillStyle = this.colorHighlighted;
  }else{
    ctx.fillStyle = this.color;
  }
  ctx.font = "20px Arial";

  ctx.fillRect(this.loc.x, this.loc.y, this.size.x, this.size.y);

  var txt_width = ctx.measureText(this.text).width;
  var txt_height = 18;
  // console.log(ctx.measureText(this.text));
  ctx.fillStyle = this.textColor;
  ctx.fillText(this.text, this.loc.x+ ((this.size.x/2) - (txt_width/2)) , this.loc.y + ((this.size.y/2) + (txt_height/2)));

  ctx.font = old_font;
  ctx.fillStyle = old_color;
}

function button_hit_test(x, y){
  if(x > this.loc.x && x < this.loc.x + this.size.x && y > this.loc.y && y < this.loc.y + this.size.y){
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
