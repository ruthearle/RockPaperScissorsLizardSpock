  Game.prototype.PAIRS = {
    rock:     { beats: ["scissors", "lizard"] },
    paper:    { beats: ["rock", "spock"] },
    scissors: { beats: ["paper", "lizard"] },
    lizard:   { beats: ["paper", "spock"] },
    spock:    { beats: ["scissors", "rock" ] }
  };


function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
};


Game.prototype.winner = function() {
  if (this.isSamePick()) return null;

  if (this.PAIRS[this.player1.pick].beats.indexOf(this.player2.pick) > -1){
    return this.player1;
}
  else {
    return this.player2;
    }

};

Game.prototype.isSamePick = function() {

  return this.player1.pick === this.player2.pick;

}
