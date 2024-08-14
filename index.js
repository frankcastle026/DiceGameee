var randomNumber1 = Math.floor((Math.random()* 6)+1);
var randomNumber2 = Math.floor((Math.random()* 6)+1);

var name1 = prompt("Player 1 Name :");
var n1 = document.querySelector(".name_1 p");
n1.innerHTML = name1;

var name2 = prompt("Player 2 Name :");
var n2 = document.querySelector(".name_2 p");
n2.innerHTML = name2;

if(randomNumber1 === 1){
document.querySelector(".img1").setAttribute("src", "./images/dice1.png");
}
else if(randomNumber1 === 2){
document.querySelector(".img1").setAttribute("src", "./images/dice2.png");
}
else if(randomNumber1 === 3){
document.querySelector(".img1").setAttribute("src", "./images/dice3.png");
}
else if(randomNumber1 === 4){
document.querySelector(".img1").setAttribute("src", "./images/dice4.png");
}
else if(randomNumber1 === 5){
document.querySelector(".img1").setAttribute("src", "./images/dice5.png");
}
else if(randomNumber1 === 6){
document.querySelector(".img1").setAttribute("src", "./images/dice6.png");
}


if(randomNumber2 === 1){
document.querySelector(".img2").setAttribute("src", "./images/dice1.png");
}
else if(randomNumber2 === 2){
document.querySelector(".img2").setAttribute("src", "./images/dice2.png");
}
else if(randomNumber2 === 3){
document.querySelector(".img2").setAttribute("src", "./images/dice3.png");
}
else if(randomNumber2 === 4){
document.querySelector(".img2").setAttribute("src", "./images/dice4.png");
}
else if(randomNumber2 === 5){
document.querySelector(".img2").setAttribute("src", "./images/dice5.png");
}
else if(randomNumber2 === 6){
document.querySelector(".img2").setAttribute("src", "./images/dice6.png");
}

if(randomNumber1 > randomNumber2){
    var a = document.querySelector(".container h1");
    a.innerHTML = "🚩 " + name1 + " Wins";
}

else if(randomNumber2 > randomNumber1){
    var a = document.querySelector(".container h1");
    a.innerHTML = name2 + " Wins 🚩";
}

else{
    var a = document.querySelector(".container h1");
    a.innerHTML = "DRAW !";
}