var randomNumber1 = Math.floor(Math.random() * 6) + 1;  // 1 to 6

var randomDice = "dice" + randomNumber1 + ".png"; // dice1.png up to dice6.png

var randomImageSource1 = "images/" + randomDice; // images/dice1.png up to images/dice6.png

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);

/* We should do the exact process for the second dice. We can't use just the last line of code.
  Becuase it will show the same numbers for both dices when we refresh the website. */

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png"; // we just combine the 1st and 2nd line of above codes.

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 wins!"
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
