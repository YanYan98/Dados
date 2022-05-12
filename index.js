if (window.performance.navigation.type === 1) {
  rollDice();
}

function rollDice() {
  var randomNumber1 = Math.ceil(Math.random()*6);
  var randomNumber2 = Math.ceil(Math.random()*6);
  document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");
  document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png");

  if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="¡El jugador 1 gana!"
  } else {
    if (randomNumber1<randomNumber2) {
      document.querySelector("h1").innerHTML="¡El jugador 2 gana!"
    } else {
      document.querySelector("h1").innerHTML="¡Empate!"
    }
  }
}
