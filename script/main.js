window.onload=function(){
    var game=new Game("game");
    document.getElementsByTagName("canvas")[0].classList.add("oculto");
    document.getElementById("Start").onclick=function(){
    document.getElementById("general").classList.add("oculto")    
    document.getElementsByTagName("span")[0].classList.add("oculto");   
    document.getElementsByTagName("button")[0].classList.add("oculto");
    document.getElementsByTagName("canvas")[0].classList.remove("oculto");
   
        game.startGame();

    }; 




}