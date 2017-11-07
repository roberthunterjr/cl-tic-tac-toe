var Game = function() {
  //Need to start with drawing a new board;
  var boardPieces = [['-','-','-'],['-','-','-'],['-','-','-']];
  var moves = 0;
  this.inProgress = true;

  this.resetBoard = function() {
    boardPieces = [['-','-','-'],['-','-','-'],['-','-','-']];
    moves = 0;
  }
  this.drawBoard = function() {
    //this draws each row
    for(var i = 0; i < 3; i++) {
      console.log(boardPieces[i][0],'|',boardPieces[i][1],'|',boardPieces[i][2]);
      if(i<2) {
        console.log('_________');
      }
    }
  }
  this.changePiece = function(player,x,y) {
    if(x < 3 && y < 3) {
      boardPieces[x][y] = player.piece;
    }
  }
};
module.exports = Game;
