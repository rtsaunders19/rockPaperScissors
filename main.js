
var computerChoice = Math.random();




//

var plays = ['rock','paper','scissors'];

function shoot() {
  console.log('hey');
  var computerHand = document.createElement("div");
  var play = plays[Math.floor(Math.random()*plays.length)];
  computerHand.setAttribute('data-shot', play);
  document.getElementById("computer").appendChild(computerHand);
  computerHand.innerText(play);
}

var playerButton = document.getElementsByTagName('BUTTON');

playerButton.addEventListener("click", function() {
  console.log('hey');
})

  //shoot();
