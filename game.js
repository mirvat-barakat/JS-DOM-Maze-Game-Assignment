document.addEventListener("DOMContentLoaded", function(event){
    var start = document.getElementById("start");
    var end = document.getElementById("end");
    var status = document.getElementById("status");
    var boundaries = document.querySelectorAll(".boundary");
    var score = 0;
    start.addEventListener("mouseover", resetGame);
    end.addEventListener("mouseover", wonGame);
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].addEventListener("mouseover", lostGame);
    }
    function resetGame() {
        for (var i = 0; i < boundaries.length; i++) {
            boundaries[i].classList.remove("youlose");
        }
        status.textContent = "Begin by moving your mouse over the 'S'.";
    }
    function wonGame(){
        if (!start.classList.contains("youlose")){
            status.textContent="You Won! Click 'S' to play again.";
            score+=5;
            console.log(score);
        }
    }

});