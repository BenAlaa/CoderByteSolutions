import React from 'react';
import ReactDOM from 'react-dom';

const rowStyle = {
  display: 'flex'
}

const squareStyle = {
  'width':'60px',
  'height':'60px',
  'backgroundColor': '#ddd',
  'margin': '4px',
  'display': 'flex',
  'justifyContent': 'center',
  'alignItems': 'center',
  'fontSize': '20px',
  'color': 'white'
}

const boardStyle = {
  'backgroundColor': '#eee',
  'width': '208px',
  'alignItems': 'center',
  'justifyContent': 'center',
  'display': 'flex',
  'flexDirection': 'column',
  'border': '3px #eee solid'
}

const containerStyle = {
  'display': 'flex',
  'alignItems': 'center',
  'flexDirection': 'column'
}

const instructionsStyle = {
  'marginTop': '5px',
  'marginBottom': '5px',
  'fontWeight': 'bold',
  'fontSize': '16px',
}

const buttonStyle = {
  'marginTop': '15px',
  'marginBottom': '16px',
  'width': '80px',
  'height': '40px',
  'backgroundColor': '#8acaca',
  'color': 'white',
  'fontSize': '16px',
}

const Square = ({value, handleClick}) => {
  return (
    <div
      className="square"
      style={squareStyle}
      onClick={handleClick}>
      {value}
    </div>
  );
}

const checkWinner = (board) => {
  for(let i = 0; i < 3; i++) {
    if (board[i][0] && board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
      return true;
    }
  }
  for(let i = 0; i < 3; i++) {
    if (board[0][i] && board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
      return true;
    }
  }
  if (board[0][0] && board[0][0] === board[1][1] && board[1][1] === board[2][2]){
    return true;
  }
  if(board[0][2] && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
    return true;
  }
  return false;
}

const Board = () => {
  const emptyBoard = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ]
  const [currentPlayer, setCurrentPlayer] = React.useState(1);
  const [winner, setWinner] = React.useState('None');
  const [board, setBoard] = React.useState(emptyBoard);
  const clickSquare = (row, column) => {
    if (!board[row][column] && winner === 'None') {
      let newBoard = [...board];
      newBoard[row][column] = currentPlayer === 1 ? 'X' : 'O';
      setBoard(newBoard);
      if(checkWinner(newBoard)) {
        setWinner(`Player ${currentPlayer}`);
      }
      else {
        setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
      }
    }
    
  }
  const reset = () => {
    setBoard(emptyBoard);
    setWinner('None');
    setCurrentPlayer(1);
  }
  return (
    <div style={containerStyle} className="gameBoard">
      <div className="status" style={instructionsStyle}>Next player: {currentPlayer}</div>
      <div className="winner" style={instructionsStyle}>Winner: {winner}</div>
      <button style={buttonStyle} onClick={() => reset()}>Reset</button>
      <div style={boardStyle}>
        <div className="board-row" style={rowStyle}>
          <Square value={board[0][0]} handleClick={() => clickSquare(0,0)}/>
          <Square value={board[0][1]} handleClick={() => clickSquare(0,1)}/>
          <Square value={board[0][2]} handleClick={() => clickSquare(0,2)}/>
        </div>
        <div className="board-row" style={rowStyle}>
          <Square value={board[1][0]} handleClick={() => clickSquare(1,0)}/>
          <Square value={board[1][1]} handleClick={() => clickSquare(1,1)}/>
          <Square value={board[1][2]} handleClick={() => clickSquare(1,2)}/>
        </div>
        <div className="board-row" style={rowStyle}>
          <Square value={board[2][0]} handleClick={() => clickSquare(2,0)}/>
          <Square value={board[2][1]} handleClick={() => clickSquare(2,1)}/>
          <Square value={board[2][2]} handleClick={() => clickSquare(2,2)}/>
        </div>
      </div>
    </div>
  );
}

const Game = () => {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
    </div>
  );
}

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);