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

});