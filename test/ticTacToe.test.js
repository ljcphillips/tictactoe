var expect = require('chai').expect;
var mocha = require('mocha');
var TicTacToe = require('../src/ticTacToe.js')

describe ("TicTacToe", function(){
  var tictactoe
   beforeEach(function(){
     tictactoe = new TicTacToe();
   });
  it ("should have a grid",function (){
    expect(tictactoe.showGrid()).to.eql(["","","","","","","","",""])
  });

  it ("should change the grid according to players choice",function (){
    tictactoe.play(0)
    expect(tictactoe.grid[0]).to.eql("X")
  });

  it ("should check if there is a winner on the rows",function (){
    tictactoe.play(6)
    tictactoe.changePlayer()
    tictactoe.play(5)
    tictactoe.changePlayer()
    tictactoe.play(7)
    tictactoe.changePlayer()
    tictactoe.play(0)
    tictactoe.changePlayer()
    tictactoe.play(8)
    expect(tictactoe.isWonHorizontal()).to.be.true
  });
  it ("should check if there is a winner on the columns",function (){
    tictactoe.play(1)
    tictactoe.changePlayer()
    tictactoe.play(5)
    tictactoe.changePlayer()
    tictactoe.play(4)
    tictactoe.changePlayer()
    tictactoe.play(0)
    tictactoe.changePlayer()
    tictactoe.play(7)
    expect(tictactoe.isWonVertical()).to.be.true
  });

  it ("should check if there is a winner on the diagonal",function (){
    tictactoe.play(0)
    tictactoe.changePlayer()
    tictactoe.play(5)
    tictactoe.changePlayer()
    tictactoe.play(4)
    tictactoe.changePlayer()
    tictactoe.play(3)
    tictactoe.changePlayer()
    tictactoe.play(8)
    expect(tictactoe.isWonDiagonal()).to.be.true
  });

  it ("should check if there is a winner",function (){
    tictactoe.play(0)
    tictactoe.changePlayer()
    tictactoe.play(5)
    tictactoe.changePlayer()
    tictactoe.play(4)
    tictactoe.changePlayer()
    tictactoe.play(3)
    tictactoe.changePlayer()
    tictactoe.play(8)
    expect(tictactoe.isWon()).to.be.true
  });

});
