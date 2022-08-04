const red = document.getElementById("red");
const yellow = document.getElementById("yellow");
const green = document.getElementById("green");
const auto = document.getElementById("automatic");
const img = document.getElementById("img");

var GreenInterval;
var YellowInterval;
var RedInterval;

auto.addEventListener("click", () => {
    GreenInterval = setInterval(() => {img.src="./img/verde.png"},1000);
    YellowInterval = setInterval(() => {img.src="./img/amarelo.png"},2000);
    RedInterval = setInterval(() => {img.src="./img/vermelho.png"},3000);    
    GreenInterval = setInterval(() => {img.src="./img/verde.png"},4000);
});

red.addEventListener("click", () => {
    img.src="./img/vermelho.png";
    clearInterval(GreenInterval);
    clearInterval(YellowInterval);
    clearInterval(RedInterval);
});

yellow.addEventListener("click", () => {
    img.src="./img/amarelo.png";
    clearInterval(GreenInterval);
    clearInterval(YellowInterval);
    clearInterval(RedInterval);
});

green.addEventListener("click", () => {
    img.src="./img/verde.png";
    clearInterval(GreenInterval);
    clearInterval(YellowInterval);
    clearInterval(RedInterval);
});