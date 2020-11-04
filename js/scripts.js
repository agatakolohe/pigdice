function PigDice() {
  this.players = [];
  this.scores = [];
  this.playerId = 0;
}

PigDice.prototype.addPlayer = function (player) {
  this.players.push(player);
};

PigDice.prototype.assignID = function () {
  this.playerId += 1;
  return this.playerId;
};

function Player(name, score) {
  this.name = name;
  this.score = score;
}

Player.prototype.playerTurn = function () {
  // not working
  players.forEach(function (score) {
    if (score === 0) {
      return "It is not your turn";
    } else {
      return "It is your turn";
    }
  });
};
