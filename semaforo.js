const red = document.getElementById("red");
const yellow = document.getElementById("yellow");
const green = document.getElementById("green");
const auto = document.getElementById("automatic");
const img = document.getElementById("img");

var GreenTime;
var YellowTime;
var RedTime;
var Interval;

auto.addEventListener("click", () => {
    function StartAuto() {
        img.src="./img/verde.png"
        GreenTime = setTimeout(function () {
            img.src="./img/verde.png"
        },3000);
    
        YellowTime = setTimeout(function () {
            img.src="./img/amarelo.png"
        },4500);
    
        RedTime = setTimeout(function () {
            img.src="./img/vermelho.png"
        },8000);
    }

    Interval = setInterval(function () {
        StartAuto();
    },12000);
    
    StartAuto();
});

red.addEventListener("click", () => {
    img.src="./img/vermelho.png";
    clearInterval(Interval);
    clearTimeout(GreenTime);
    clearTimeout(YellowTime);
    clearTimeout(RedTime);
});

yellow.addEventListener("click", () => {
    img.src="./img/amarelo.png";
    clearInterval(Interval);
    clearTimeout(GreenTime);
    clearTimeout(YellowTime);
    clearTimeout(RedTime);
});

green.addEventListener("click", () => {
    img.src="./img/verde.png";
    clearInterval(Interval);
    clearTimeout(GreenTime);
    clearTimeout(YellowTime);
    clearTimeout(RedTime);
});