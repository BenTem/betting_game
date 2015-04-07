$(document).ready(function reset(){

  $("#place_bet").css('display', "inline-block");
  $("#reset").css('display', "none");
  var userMoney = 20;
  $('#cash').text("$" + userMoney);

  $("#place_bet").on('click',function(){

    var dealerNumber = Math.floor((Math.random() * 10) + 1);
    var bet = parseInt($("#bet").val(),10);
    var userGuess = parseInt($("#guess").val(),10);

    if (bet > userMoney) return $("#messages").text("You don't have that much money");
    if (bet <= 0) return $("#messages").text("Bets must be greater than zero!");
    if (isNaN(bet)) bet = 0;

    switch (userGuess){
      case dealerNumber:
        $("#messages").text("You got it! You win $" + bet * 2 + "!");
        userMoney += bet * 2;
        console.log(userMoney + " money");
        break;
      case dealerNumber + 1:
      case dealerNumber - 1:
        $("#messages").text("Close! You Keep your money! The correct answer was " + dealerNumber );
        console.log(userMoney + " money");
        break;
      default:
        $("#messages").text("Wrong! You lose $" + bet + "! The correct answer was " + dealerNumber );
        userMoney -= bet;
        console.log(userMoney + " money");
        break;
    };
    if (userMoney === 0) {
      $("#place_bet").css('display', "none");
      $("#reset").css('display', "inline-block");
      $('#reset').unbind('click').bind('click',reset);
    };
    $('#cash').text("$" + userMoney);
  });
});