var rock = document.getElementById("rock")
rock.addEventListener("click", pickRock);
rock.addEventListener("click", getIdRock);
rock.addEventListener("click", setDisplayRock);
function pickRock () {
    document.getElementById("myblank").src="http://www.yourfishstuff.com/resize/Shared/Images/Product/Deco-Rocks-Small/small-deco-thumb.jpg?bw=1000&w=1000&bh=1000&h=1000"}
function getIdRock () {
 myId = array[0]}
 function setDisplayRock() {
     document.getElementById("myDisplay").innerHTML = myId
 };

var paper = document.getElementById("paper")
paper.addEventListener("click", pickPaper);
paper.addEventListener("click", getIdPaper);
paper.addEventListener("click", setDisplayPaper);
function pickPaper () {
    document.getElementById("myblank").src="http://2.bp.blogspot.com/_8vi4m0uMUgo/TBUr26_LHKI/AAAAAAAAAbA/eXxB0zmhVe0/s1600/notebook-paper.jpg"}
function getIdPaper () {
        myId = array[1]}
function setDisplayPaper() {
            document.getElementById("myDisplay").innerHTML = myId
};

var scissors = document.getElementById("scissors")
scissors.addEventListener("click", pickScissors);
scissors.addEventListener("click", getIdScissors);
scissors.addEventListener("click", setDisplayScissors);
function pickScissors () {
    document.getElementById("myblank").src="https://www.bing.com/th?id=OIP.7xCZBIw6Z-lJ7sh756hKbgHaHa&pid=Api&rs=1"}
function getIdScissors () {
        myId = array[2]}
function setDisplayScissors() {
            document.getElementById("myDisplay").innerHTML = myId
};

var reset = document.getElementById("reset")
reset.addEventListener("click", resetBlank);
function resetBlank () {
    document.getElementById("myblank").src="https://www.bing.com/th?id=OIP.UtgXRfq5DsTwjkq4cWA-VQHaNK&w=126&h=182&c=7&o=5&dpr=2&pid=1.7"
    document.getElementById("cpblank").src="https://www.bing.com/th?id=OIP.UtgXRfq5DsTwjkq4cWA-VQHaNK&w=126&h=182&c=7&o=5&dpr=2&pid=1.7"
};


var picArray = ["https://www.bing.com/th?id=OIP.7xCZBIw6Z-lJ7sh756hKbgHaHa&pid=Api&rs=1",
"http://2.bp.blogspot.com/_8vi4m0uMUgo/TBUr26_LHKI/AAAAAAAAAbA/eXxB0zmhVe0/s1600/notebook-paper.jpg",
"http://www.yourfishstuff.com/resize/Shared/Images/Product/Deco-Rocks-Small/small-deco-thumb.jpg?bw=1000&w=1000&bh=1000&h=1000"
]

var play = document.getElementById("play")
play.addEventListener("click", compChoice);
function compChoice() {
document.getElementById("cpblank").src=picArray[Math.floor(Math.random()*picArray.length)]

};

play.addEventListener("click", clickMath);
function clickMath() {

};

var array = ["Rock", "Paper", "Scissors"]
var myId = []
var cpId = []