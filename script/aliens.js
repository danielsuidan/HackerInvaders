function Aliens(game, img, x, y,vx) {
    //todo:consider using a config filex
    this.game = game
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.game.width;
    this.game.height;
    this.img = new Image();
    this.img.src = img
    this.wid=60;
    this.hei=60;
}
Aliens.prototype.Draw = function () {
    this.game.ctx.drawImage(this.img, this.x, this.y,this.wid,this.hei);
}
Aliens.prototype.Move = function () {
    this.x += this.vx;
    if (this.x >= this.game.canvas.width-40 || this.x < 0) {
        this.y-=-50
        this.vx *= -1;
    }
    if(this.y>=this.game.width-500){
        this.vx=0;
        this.game.gameOver() 
    }
}