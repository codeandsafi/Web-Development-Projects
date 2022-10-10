var val1 = Math.floor(Math.random() * 6 + 1);
var val2 = Math.floor(Math.random() * 6 + 1);

let winner = document.querySelector("h1");

if(val1>val2){
    winner.innerHTML = `Winner is Player 1!`
}
else if(val1===val2){
    winner.innerHTML = `Draw!`
}
else{
    winner.innerHTML = `Winner is Player 2!`
}

let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");

var firstImageName = `images/dice${val1}.png`;
var secondImageName = `images/dice${val2}.png`;

img1.setAttribute("src", firstImageName);
img2.setAttribute("src", secondImageName);