const Player = require('./player.js');
const Game = require('./game.js');
const UI = require('./ui.js');

var players = UI.getPlayerStartingInfo((players) => {
  playerOne = new Player(players.one,'X');
  playerTwo = new Player(players.two, 'O');
  console.log('Hello',playerOne.name,'and',playerTwo.name,'lets get started!');
  //Start game;
  startGame();
});

var startGame = function() {
  var round = new Game();
  round.drawBoard();
  console.log('Starting game!');
  var currentPlayer = playerOne;
  // player One goes first;
    //alternate between players until there is a winner
  UI.getPlayerMove((move) => {
    round.changePiece(currentPlayer, move.row, move.col);
    round.drawBoard();
  })
}
