var p1 = new Player('Ruth');
var p2 = new Player('Matrix');
var game = new Game(p1, p2);
var choices = ["rock", "paper", "scissors", "lizard", "spock"];

$(document).ready(function(){
  $('#user_name').on('submit', function(e) {
    e.preventDefault();
    p1.name= $('#input_name').val();
  });
    $('.choices img').on('click', function() {
    p1.picks($(this).data('pick'));
    p2.picks(choices[Math.floor(Math.random()*choices.length)]);

    $('<li>' + game.winningMessage() + '</li>').prependTo('#results').slideDown();

    $('#results li:gt(3)').fadeOut(function(){
    $(this).remove();
    });
    });

  });

