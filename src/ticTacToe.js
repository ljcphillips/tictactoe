function TicTacToe(){
  this.grid = [["","",""],["","",""],["","",""]]
};

TicTacToe.prototype.showGrid = function () {
  return this.grid;
};

TicTacToe.prototype.play = function (orisontal, vertical, player) {
   this.grid[orisontal][vertical] = player
};


module.exports = TicTacToe;
