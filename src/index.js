let tictactoe = new TicTacToe();


$( "td" ).click(function() {
  if(!$( this ).text()){
    $( this ).text(tictactoe.currentPlayer)
    tictactoe.play()
    tictactoe.changePlayer();
  }
});
