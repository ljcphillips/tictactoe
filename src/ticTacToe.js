(function(exports) {

function TicTacToe(){
  this.grid = [["","",""],["","",""],["","",""]]
  this.currentPlayer = 'X'
};

TicTacToe.prototype.showGrid = function () {
  return this.grid;
};

TicTacToe.prototype.changePlayer = function(){
  if (this.currentPlayer === 'X'){
    this.currentPlayer = 'O'
  }else{
    this.currentPlayer = 'X'
  }
}


TicTacToe.prototype.play = function (orisontal, vertical) {
  this.grid[orisontal][vertical] = this.currentPlayer
};

TicTacToe.prototype.isWonHorizontal = function () {
   if (this.grid[0][0] === this.currentPlayer && this.grid[0][1] === this.currentPlayer && this.grid[0][2] === this.currentPlayer ||
       this.grid[1][0] === this.currentPlayer && this.grid[1][1] === this.currentPlayer && this.grid[1][2] === this.currentPlayer ||
       this.grid[2][0] === this.currentPlayer && this.grid[2][1] === this.currentPlayer && this.grid[2][2] === this.currentPlayer){

   return true;
   }
};

TicTacToe.prototype.isWonVertical = function () {
   if (this.grid[0][0] === this.currentPlayer && this.grid[1][0] === this.currentPlayer && this.grid[2][0] === this.currentPlayer ||
       this.grid[0][1] === this.currentPlayer && this.grid[1][1] === this.currentPlayer && this.grid[2][1] === this.currentPlayer ||
       this.grid[0][2] === this.currentPlayer && this.grid[1][2] === this.currentPlayer && this.grid[2][2] === this.currentPlayer){

   return true;
   }
};

TicTacToe.prototype.isWonDiagonal = function () {
   if (this.grid[0][0] === this.currentPlayer && this.grid[1][1] === this.currentPlayer && this.grid[2][2] === this.currentPlayer ||
       this.grid[0][2] === this.currentPlayer && this.grid[1][1] === this.currentPlayer && this.grid[2][0] === this.currentPlayer){

   return true;
   }
};

TicTacToe.prototype.isWon = function () {
   if ( this.isWonVertical() === true || this.isWonHorizontal() === true || this.isWonDiagonal() === true){
   return true;
   }
};

// module.exports = TicTacToe;

exports.TicTacToe = TicTacToe;
})(this);
