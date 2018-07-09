var expect = require('chai').expect;
var mocha = require('mocha');
var TicTacToe = require('../src/ticTacToe.js')

describe ("TicTacToe", function(){
   var tictactoe = new TicTacToe();
  it ("should have a grid",function (){
    expect(tictactoe.showGrid()).to.eql([["","",""],["","",""],["","",""]])
  });

  it ("should change the grid according to players choice",function (){
    tictactoe.play(0,0)
    expect(tictactoe.grid[0][0]).to.eql("X")
  });

  it ("should check if there is a winner on the rows",function (){
    tictactoe.play(2,0)
    tictactoe.changePlayer()
    tictactoe.play(1,2)
    tictactoe.changePlayer()
    tictactoe.play(2,2)
    tictactoe.changePlayer()
    tictactoe.play(0,0)
    tictactoe.changePlayer()
    tictactoe.play(2,1)
    expect(tictactoe.isWonHorizontal()).to.be.true
  });
  it ("should check if there is a winner on the columns",function (){
    tictactoe.play(0,1)
    tictactoe.changePlayer()
    tictactoe.play(1,2)
    tictactoe.changePlayer()
    tictactoe.play(1,1)
    tictactoe.changePlayer()
    tictactoe.play(0,0)
    tictactoe.changePlayer()
    tictactoe.play(2,1)
    expect(tictactoe.isWonVertical()).to.be.true
  });

  it ("should check if there is a winner on the diagonal",function (){
    tictactoe.play(0,0)
    tictactoe.changePlayer()
    tictactoe.play(1,2)
    tictactoe.changePlayer()
    tictactoe.play(1,1)
    tictactoe.changePlayer()
    tictactoe.play(1,0)
    tictactoe.changePlayer()
    tictactoe.play(2,2)
    expect(tictactoe.isWonDiagonal()).to.be.true
  });


});
