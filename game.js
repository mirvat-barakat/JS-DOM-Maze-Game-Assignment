document.addEventListener("DOMContentLoaded", function(event){
    var start = document.getElementById("start");
    var end = document.getElementById("end");
    var status = document.getElementById("status");
    var boundaries = document.querySelectorAll(".boundary");
    var score = 0;
    var lost=false;
    var won=false;
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
        status.textContent = "Begin by moving your mouse over the 'S'.";
    }
    function restartGame() {
        if (won==true){
        status.textContent = "Begin by moving your mouse over the 'S'.";
         } 
        }
    
    function wonGame(){
        if (score==0 &&!start.classList.contains("youlose")){
            won=true;
        }
        else if(won==true && !start.classList.contains("youlose")){
            won=true;}
            score+=5;
            status.textContent="You Won! Move your mouse over 'S' to play again. Score:"+score;  
        }

    
    function lostGame(){
        if(score==0){
        for (var i = 0; i < boundaries.length; i++) {
            boundaries[i].classList.add("youlose");
        
        } 
        lost=true;
        
        }
        else if(won==true && lost==false){
          for (var i = 0; i < boundaries.length; i++) {
            boundaries[i].classList.add("youlose");
        }   
        lost=true; 
        }
        if(lost=true){
        score-=10;
        status.textContent = "You lost! Click 'S' to restart. Score: "+score;
        won=false;
        }
    }
});