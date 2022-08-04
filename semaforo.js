const buttons = document.getElementsByClassName("button");
const red = document.getElementById("red");
const yellow = document.getElementById("yellow");
const green = document.getElementById("green");
const auto = document.getElementById("automatic");
const img = document.getElementById("img");

console.log(buttons);
console.log(red);
console.log(img.src);

red.addEventListener("click", () => {
    img.src="./img/vermelho.png";
});

yellow.addEventListener("click", () => {
    img.src="./img/amarelo.png";
});

green.addEventListener("click", () => {
    img.src="./img/verde.png";
});

auto.addEventListener("click", () => {
    setInterval(() => {
        img.src="./img/verde.png";
    },1000)
    setInterval(() => {
        img.src="./img/amarelo.png";
    },2000)
    setInterval(() => {
        img.src="./img/vermelho.png";
    },3000)
    //img.src="./img/verde.png";
});