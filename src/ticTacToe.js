(function(exports) {

function TicTacToe(){
  this.grid = ["","","","","","","","",""]
  this.currentPlayer = 'X'
  this.count = 1
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
  this.count ++
}


TicTacToe.prototype.play = function (gridIndex) {
  this.grid[parseInt(gridIndex)] = this.currentPlayer
};

TicTacToe.prototype.isWonHorizontal = function () {
   if (this.grid[0] === this.currentPlayer && this.grid[1] === this.currentPlayer && this.grid[2] === this.currentPlayer ||
       this.grid[3] === this.currentPlayer && this.grid[4] === this.currentPlayer && this.grid[5] === this.currentPlayer ||
       this.grid[6] === this.currentPlayer && this.grid[7] === this.currentPlayer && this.grid[8] === this.currentPlayer){

   return true;
   }
};

TicTacToe.prototype.isWonVertical = function () {
   if (this.grid[0] === this.currentPlayer && this.grid[3] === this.currentPlayer && this.grid[6] === this.currentPlayer ||
       this.grid[1] === this.currentPlayer && this.grid[4] === this.currentPlayer && this.grid[7] === this.currentPlayer ||
       this.grid[2] === this.currentPlayer && this.grid[5] === this.currentPlayer && this.grid[8] === this.currentPlayer){

   return true;
   }
};

TicTacToe.prototype.isWonDiagonal = function () {
   if (this.grid[0] === this.currentPlayer && this.grid[4] === this.currentPlayer && this.grid[8] === this.currentPlayer ||
       this.grid[2] === this.currentPlayer && this.grid[4] === this.currentPlayer && this.grid[6] === this.currentPlayer){

   return true;
   }
};

TicTacToe.prototype.isWon = function () {
   if ( this.isWonVertical() === true || this.isWonHorizontal() === true || this.isWonDiagonal() === true){
   return true;
   }
};

TicTacToe.prototype.isDraw = function () {
   if ( !this.isWon() && this.count === 9){
     return true;
   }
};

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
    module.exports = TicTacToe;
  else {
    exports.TicTacToe = TicTacToe;
  }

})(this);
