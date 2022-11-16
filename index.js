let img1El = document.querySelectorAll("img")[0];
let img2El = document.querySelectorAll("img")[1];
let displayEl = document.querySelector(".display");

function RandomNumber(){
    // Random Number
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    // Image Source
    var randomDiceImage1 = "dice" + randomNumber1 + ".png";
    var randomDiceImage2 = "dice" + randomNumber2 + ".png";

    var randomImageSource1 = "images/" + randomDiceImage1;
    var randomImageSource2 = "images/" + randomDiceImage2;

    img1El.setAttribute("src", randomImageSource1);
    img2El.setAttribute("src", randomImageSource2);


    // Results
    if (randomNumber1 > randomNumber2){
        displayEl.innerHTML = "Player 1 Wins!";
    }
    else if (randomNumber2 > randomNumber1){
        displayEl.innerHTML  = "Player 2 Wins!";
    } 
    else {
        displayEl.innerHTML ="Draw!"
    }
}

RandomNumber();