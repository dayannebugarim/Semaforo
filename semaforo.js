const red = document.getElementById("red");
const yellow = document.getElementById("yellow");
const green = document.getElementById("green");
const auto = document.getElementById("automatic");
const img = document.getElementById("img");

var GreenInterval;
var YellowInterval;
var RedInterval;

auto.addEventListener("click", () => {
    function startTrafficSignal () {
        GreenInterval = setTimeout(function () {
            img.src="./img/verde.png"
        },2000);
    
        YellowInterval = setTimeout(function () {
            img.src="./img/amarelo.png"
        },5000);
    
        RedInterval = setTimeout(function () {
            img.src="./img/vermelho.png"
        },8000);
    }

    setInterval(function () {
        startTrafficSignal();
    },12000);
    
    startTrafficSignal();
});

red.addEventListener("click", () => {
    img.src="./img/vermelho.png";
    clearTimeout(GreenInterval);
    clearTimeout(YellowInterval);
    clearTimeout(RedInterval);
});

yellow.addEventListener("click", () => {
    img.src="./img/amarelo.png";
    clearTimeout(GreenInterval);
    clearTimeout(YellowInterval);
    clearTimeout(RedInterval);
});

green.addEventListener("click", () => {
    img.src="./img/verde.png";
    clearTimeout(GreenInterval);
    clearTimeout(YellowInterval);
    clearTimeout(RedInterval);
});