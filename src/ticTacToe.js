function TicTacToe(){
  this.grid = [["","",""],["","",""],["","",""]]
};

TicTacToe.prototype.showGrid = function () {
  return this.grid;
};


module.exports = TicTacToe;
