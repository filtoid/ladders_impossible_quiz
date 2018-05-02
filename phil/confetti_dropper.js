// Confetti dropper moves in a straight line from the the
function ConfettiDropper(_x, _y, rot){
    this.update = PJ_CD_Update;
    this.draw = PJ_CD_Draw;

    this.loc = new Location(_x, _y);
    this.start_loc = new Location(_x, _y);
    this.rot = rot;
    this.speed = 5;

    this.confetti = [];
}

function PJ_CD_Update(){
    this.loc.x += this.speed * Math.sin(this.rot);
    this.loc.y += this.speed * Math.cos(this.rot);
    if(this.loc.y < 0){
        this.loc.x = this.start_loc.x;
        this.loc.y = this.start_loc.y;
    }

    for(var i=0; i<this.confetti.length;i++){
        this.confetti[i].update();
    }

    var ran = Math.floor(Math.random() * 10); 
    if(ran == 9){
        for(var i=0; i<this.confetti.length;i++){
            if(this.confetti[i].dead){
                this.confetti[i].dead = false;
                this.confetti[i].loc.x = this.loc.x;
                this.confetti[i].loc.y = this.loc.y;
                return;
            }
        }
        this.confetti.push(new Confetti(this.loc.x, this.loc.y));
    }

}

function PJ_CD_Draw(ctx){
    var oldStyle = ctx.fillStyle;
    ctx.fillStyle = '#0000ff';
    ctx.fillRect(this.loc.x, this.loc.y, 4, 4);
    //console.log(this);
    ctx.fillStyle = oldStyle;

    for(var i=0; i<this.confetti.length;i++){
        this.confetti[i].draw(ctx);
    }

}
