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
    expect(this.grid[0][0]).to.eql("X")
  });

});
