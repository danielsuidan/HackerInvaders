    function Ship(game) {

      //todo:  consider using a config external file
        this.game=game
        this.x = 500;
        this.y = 800;
        this.game.width; 
        this.game.height;
        this.vx = 9;
        this.vy = 3;
        this.img = new Image();
        this.img.src="./src/img/player2.png";
        this.bullets = [];
}
    
        Ship.prototype.Draw=function(){
            this.game.ctx.drawImage(this.img, this.x, this.y, 50, 50);
              this.bullets.forEach(function(bullet) {
                bullet.Draw();
                bullet.move();
              });
        }
        Ship.prototype.shoot = function() {
            var bullet = new Bullets(this.game,this.x+20);
          
            this.bullets.push(bullet);
          };
        Ship.prototype.Move=function(){
          //todo: consider adding a keyboard config file
            var KEY_RIGHT = 39;
            var KEY_LEFT = 37;
            var SPACE=32;

            //todo: consider adding a KeyboardManager object x
            document.onkeydown = function (e) {
                e.preventDefault();
                switch (e.keyCode) {
                  case KEY_LEFT:
                  if(this.x>-3){this.x -= this.vx;}
                   else {this.x += this.vx}
                    break;
                  case KEY_RIGHT:
                  if(this.x<1057){this.x += this.vx;}
                  else {this.x -= this.vx}
                   break;
                  case SPACE:
                  this.shoot();
                  break;
                }
              }.bind(this);
        }
