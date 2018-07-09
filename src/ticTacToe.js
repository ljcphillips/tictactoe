function TicTacToe(){
  this.grid = [["","",""],["","",""],["","",""]]
};

TicTacToe.prototype.showGrid = function () {
  return this.grid;
};

TicTacToe.prototype.play = function (orisontal, vertical, player) {
   this.grid[orisontal][vertical] = player
};

TicTacToe.prototype.isWonHorizontal = function () {
   if (this.grid[0][0] === "X" && this.grid[0][1] === "X" && this.grid[0][2] === "X" ||
       this.grid[1][0] === "X" && this.grid[1][1] === "X" && this.grid[1][2] === "X" ||
       this.grid[2][0] === "X" && this.grid[2][1] === "X" && this.grid[2][2] === "X"){

   return true;
   }
   if (this.grid[0][0] === "O" && this.grid[0][1] === "O" && this.grid[0][2] === "O" ||
       this.grid[1][0] === "O" && this.grid[1][1] === "O" && this.grid[1][2] === "O" ||
       this.grid[2][0] === "O" && this.grid[2][1] === "O" && this.grid[2][2] === "O"){

   return true;
    }


};



module.exports = TicTacToe;
