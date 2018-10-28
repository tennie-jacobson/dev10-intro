function clearErrors() {
  for(var i = 0; i < document.forms["gambleSeven"].elements.length; i++) {
    if(document.forms["gambleSeven"].elements[i]
          .parentElement.className.indexOf("has-") != -1) {
      document.forms["gambleSeven"].elements[i].parentElement.className = "form-group";
    }
  }
}

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function resetForm() {
  clearErrors();
  document.forms["gambleSeven"]["startingBet"].value = "";
  document.getElementById("results").style.display = "none";
  document.getElementById("playButton").innerText = "Play";
  document.forms["gambleSeven"]["startingBet"].focus();
}

function validateItems() {
  clearErrors();
  var playMoney = document.forms["gambleSeven"]["startingBet"].value;
  // If num1 is not a number or empty we need to warn the user
  if(playMoney == isNaN(playMoney) || "") {
    alert("Starting bet must be filled in with a number.");
    document.forms["gambleSeven"]["startingBet"].parentElement.className = "form-group has-error";
    document.forms["gambleSeven"]["startingBet"].focus();
    return false;
  }

  var numRolls = 0;
  var highAmountRoll = 0;
  var highAmount = playMoney;

  while(playMoney > 0) {
    numRolls++;
    var die1 = rollDice();
    var die2 = rollDice();
    if(die1 + die2 == 7) {
      playMoney += 4;
      if(playMoney >= highAmount) {
        highAmount = playMoney;
        highAmountRoll = numRolls;
      }
    } else {
      playMoney--;
    }
  }
  document.getElementById("results").style.display = "block";
  document.getElementById("playButton").innerText = "Play Again";
  document.getElementById("startingBet").innerText = Number(startingBet);
  document.getElementById("totalRolls").innerText = numRolls;
  document.getElementById("highAmount").innerText = highAmount;
  document.getElementById("highAmountRolls").innerText = highAmountRoll;
  // return false to avoid submitting form.
  return false;
}
