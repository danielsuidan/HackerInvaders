function Bullets(game,x) {
    //todo: consider using a config filex
    this.game=game;
    this.x= x;
    this.y=810;
    this.game.width;
    this.game.height;
    this.vx=9;
    this.vy=9;
    this.img= new Image();
    this.img.src="./src/img/bullet.png";
    this.wid=10;
    this.hei=10;    

}
Bullets.prototype.Draw=function(){
    this.game.ctx.drawImage(this.img, this.x,this.y,this.wid,this.hei)
}
Bullets.prototype.move = function() {
    this.y -= this.vy;
  };