let tictactoe = new TicTacToe();


$( "td" ).click(function() {
  if(!$( this ).text()){
    $( this ).text(tictactoe.currentPlayer)
    tictactoe.play($(this).attr("id"))
    if(tictactoe.isWon()){
      alert(tictactoe.currentPlayer + " has won")
    }
    else{
      tictactoe.changePlayer();
    }
  }
});
