let tictactoe = new TicTacToe();


$( "td" ).click(function() {
  $( this ).text(tictactoe.currentPlayer);
  tictactoe.changePlayer();
});
