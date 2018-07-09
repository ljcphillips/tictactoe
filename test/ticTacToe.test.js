var expect = require('chai').expect;
var mocha = require('mocha');
var TicTacToe = require('../src/ticTacToe.js')

describe ("TicTacToe", function(){
   var tictactoe = new TicTacToe();
  it ("should have a grid",function (){
    expect(tictactoe.showGrid()).to.eql([["","",""],["","",""],["","",""]])
  });

  it ("should change the grid according to players choice",function (){
    tictactoe.play(0,0,"X")
    expect(tictactoe.grid[0][0]).to.eql("X")
  });

  it ("should check if there is a winner on the rows",function (){
    tictactoe.play(2,0,"O")
    tictactoe.play(2,1,"O")
    tictactoe.play(2,2,"O")
    expect(tictactoe.isWonHorizontal()).to.be.true
  });


});
