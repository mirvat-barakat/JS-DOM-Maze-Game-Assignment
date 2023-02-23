document.addEventListener("DOMContentLoaded", function(event){
    var start = document.getElementById("start");
    var end = document.getElementById("end");
    var status = document.getElementById("status");
    var boundaries = document.querySelectorAll(".boundary");
    var score = 0;
    start.addEventListener("click", resetGame);
    start.addEventListener("mouseover",restartGame);
    end.addEventListener("mouseover", wonGame);
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].addEventListener("mouseover", lostGame);
    }
    var i=0;
    function resetGame() {
        for (var i = 0; i < boundaries.length; i++) {
            boundaries[i].classList.remove("youlose");
        }
        score=0;
        status.textContent = "Begin by moving your mouse over the 'S'.";
    }
    function restartGame() {
        i+=1;
        status.textContent = "Begin by moving your mouse over the 'S'.";
         } 
    
    function wonGame(){
        if ( !start.classList.contains("youlose")){
            status.textContent="You Won! Click 'S' to play again.";
            score+=5;
        }
    }
    function lostGame(){
        if(score==0){
        for (var i = 0; i < boundaries.length; i++) {
            boundaries[i].classList.add("youlose");
        }
        status.textContent = "You lost! Click the 'S' to play again.";
        score-=10;
        }
    }
});