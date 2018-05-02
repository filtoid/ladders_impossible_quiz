// Confetti dropper moves in a straight line from the the
function Confetti(_x, _y){
    this.update = PJ_Conf_Update;
    this.draw = PJ_Conf_Draw;

    this.loc = new Location(_x, _y);
    this.start_loc = new Location(_x, _y);
    this.fall_speed = 1;
    this.dead = false;

    var colors = ['#ff0000', '#00ffff', '#0055ff', '#bca64d'];
    var ran = Math.floor(Math.random() * colors.length);
    this.color = colors[ran];
}

function PJ_Conf_Update(){
    this.loc.y += this.fall_speed;
    var ran = Math.floor(Math.random() * 4) -2;
    this.loc.x += ran;
    
    if(this.loc.y > 400){
        this.dead = true;
    }
}

function PJ_Conf_Draw(ctx){
    if(this.dead==false){
        var oldStyle = ctx.fillStyle;
        ctx.fillStyle = this.color;
        ctx.fillRect(this.loc.x, this.loc.y, 4, 4);
        
        ctx.fillStyle = oldStyle;
    }
}