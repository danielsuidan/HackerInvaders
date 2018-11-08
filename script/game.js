function Game(canvasId){
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext("2d");
    this.fps = 60;
    this.vx=3;
    this.reset();
    this.width=1080;
    this.height=950;
    


}
Game.prototype.reset=function(){
    this.aliens=[];
    this.generateAliens();
    this.ship=new Ship(this);
    this.score=0;
    
}
Game.prototype.startGame=function(){
     console.log("pepe")
     this.interval= setInterval(function(){
        this.clear();
        this.DrawAll();
        console.log(this.score)
       if (this.isCollision()==true)this.score+=10;
       this.drawScore();
        this.MoveAll();
        this.clearBullet()
       this.nextLevel();  
      }.bind(this),1000/60)
}
Game.prototype.clear=function(){
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
}

//todo: consider adding a config document. Separate what changes from what does not xx
// let GameConfig = {
//     alien1Img: 
// }

//todo: consider adding a aliengenerator class for unit testing purposes
Game.prototype.generateAliens=function(){
    var x = 200;
    var y = 100;
    for(var i =0; i<6; i++){
        //todo: consider adding a config 
        console.log(this.vx)
        this.aliens.push(new Aliens(this, "./src/img/invader.png",x,y, this.vx))
        x +=30;
        this.aliens.push(new Aliens(this, "./src/img/invader2.png",x-30,y+70, this.vx))
        x +=30;
        this.aliens.push(new Aliens(this, "./src/img/invader3.png",x-60,y+130, this.vx))
        x +=30;
        this.aliens.push(new Aliens(this, "./src/img/invader.png",x-90,y+200, this.vx))
        x +=30;

    }
}
Game.prototype.DrawAll=function() {
    this.aliens.forEach(function(alien){
        alien.Draw();
    })
    this.ship.Draw();
}
Game.prototype.MoveAll=function(){
    this.aliens.forEach(function(alien){
        alien.Move();
    })
    this.ship.Move();
}
Game.prototype.isCollision = function() {
    this.aliens.forEach(function(alien, alienIndex){
        
        this.ship.bullets.forEach(function(bullet, bulletIndex) {
           
           if(
                alien.x + alien.wid >= bullet.x &&
                bullet.x + bullet.wid>=alien.x &&
                alien.y + alien.hei >= bullet.y&&
                bullet.y+bullet.hei>=alien.y
             ){
                 this.score+=10;
                 this.aliens.splice(alienIndex, 1)
                 this.ship.bullets.splice(bulletIndex, 1)
             }
          }.bind(this));
    }.bind(this))
  };
  Game.prototype.clearBullet = function() {
    this.ship.bullets = this.ship.bullets.filter(function(bullets) {
      return bullets.y >= 0;
    });
  };
  Game.prototype.drawScore = function() {
    this.ctx.font = "30px sans-serif";
    this.ctx.fillStyle = "green";
    this.ctx.fillText("SCORE:", 50, 50);
    this.ctx.fillText(this.score, 180, 50);
  }

  Game.prototype.nextLevel=function () {
    
      if(this.score===240){
        clearInterval(this.interval)
        this.vx++   
        this.ctx.font="100px sans-serif"
        this.ctx.fillStyle="green"
        this.ctx.fillText("LeveL UP¡¡", 300, 430);
        this.reset();
        setTimeout(function(){
            this.startGame();
        }.bind(this),3000)
        
      }
  }



