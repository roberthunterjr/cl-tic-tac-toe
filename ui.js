const prompt = require('prompt');


module.exports.getPlayerStartingInfo = function(next) {
  prompt.start();
  prompt.get(['playerX','playerO'], function(err, result) {
    if(err) {
      console.log('Please try again');
    }
    var players = {};
    players.one = result.playerX;
    players.two = result.playerO;
    next(players);
  });
};

module.exports.getPlayerMove = function(next) {
  prompt.start();
  console.log('Enter Move (row then column, top to bottom, left to right)');
  prompt.get(['row','column'], function(err, results) {
    if(err) {
      console.log('Error accepting move');
    } else {
      var move = {row: results.row, column: results.column};
      next(move);
    }
  })
}
