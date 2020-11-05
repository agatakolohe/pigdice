function PigDice() {
  this.players = [];
  this.totalScores = [];
  this.playerId = 0;
}

PigDice.prototype.addPlayer = function (player) {
  this.players.push(player);
};

PigDice.prototype.assignID = function () {
  this.playerId += 1;
  return this.playerId;
};

function Player(name) {
  this.name = name;
  this.roundScore = 0;
  this.totalScore = 0;
}
// Not working
// Player.prototype.playerTurn = function () {
//
//   players.forEach(function (score) {
//     if (score === 0) {
//       return "It is not your turn";
//     } else {
//       return "It is your turn";
//     }
//   });
// };
