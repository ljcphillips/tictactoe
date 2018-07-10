let tictactoe = new TicTacToe();


$( "td" ).click(function() {
  if(!$( this ).text() && !tictactoe.isWon()){
    $( this ).text(tictactoe.currentPlayer)
    tictactoe.play($(this).attr("id"))
    if(tictactoe.isWon()){
      alert(tictactoe.currentPlayer + " has won")
    }
    else if(tictactoe.isDraw())
      alert("Its a draw!!")
    else{
      tictactoe.changePlayer();
    }
  }
});
