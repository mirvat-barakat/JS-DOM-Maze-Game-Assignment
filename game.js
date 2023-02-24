document.addEventListener("DOMContentLoaded", function(event){
    var start = document.getElementById("start");
    var end = document.getElementById("end");
    var status = document.getElementById("status");
    var boundaries = document.querySelectorAll(".boundary");
    var score = 0;
    var k=0;
    start.addEventListener("click", resetGame);
    start.addEventListener("mouseover",restartGame);
    end.addEventListener("mouseover", wonGame);
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].addEventListener("mouseover", lostGame);
    }
    function resetGame() {
        for (var i = 0; i < boundaries.length; i++) {
            boundaries[i].classList.remove("youlose");
        }
        won=false;
        score=0;
        status.textContent = "Click 'S' to restart the game.";
        k=1;
    }
    function restartGame() {
        status.textContent = "Begin by moving your mouse over the 'S'.";
        k=1;
        }
    
    function wonGame(){
        if (k==1){
            won=true;
            score+=5;
            status.textContent="You Won! Move your mouse over 'S' to play again. Score:"+score;  
            k=0;
        }
    }
    function lostGame(){
        if(k==1){
          for (var i = 0; i < boundaries.length; i++) {
            boundaries[i].classList.add("youlose");
          }
        k=0;
        score-=10;
        status.textContent = "You lost! Click 'S' to restart. Score: "+score;
        score=0;
        }
      
    } 
});