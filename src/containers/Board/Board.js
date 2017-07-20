import React from 'react';
import Figure from '../../components/Figure';
import TicTacToe from '../../utils/TicTacToe';

import './Board.css';
class Board extends React.Component {
  constructor() {
    super();
    this.state = { board: [['','',''],['','',''],['','','']], isX: true, gameOver: '' };
  }
  
  click = (y, x) => (e) => {
    let temp = this.state.board;
    if(temp[y][x] === ''){
      temp[y][x] = this.state.isX ? 'X' : 'O';
      this.setState({
        board: temp,
        isX: !this.state.isX
      })
    }
    let win = TicTacToe.checkWin(temp);
    if(win) {
      this.setState({gameOver: `Gano ${win}`})
    }
    if(temp.every((row) => row.every((n) => n !== ''))) {
      this.setState({gameOver: 'Empate'})
    }
  }

  renderRow = (row, y) => {
    return (
      <div key={y}>
        { row.map((value, x) => (
            <Figure
              key={x}
              figure={value}
              handleClick={this.click(y, x)}/>
          )) 
        }
      </div>
    );
  }
  newGame = () => {
    this.setState({
      board: [['','',''],['','',''],['','','']],
      gameOver: ''
    })
  }
  render() {
    let go = this.state.gameOver;
    let board = this.state.board;
    return (
      <div className="board">
        <input type="button" value="vs Local" onClick={this.newGame}/>
        <input type="button" value="vs Humano" onClick={this.newGame}/>
        {board.map(this.renderRow)}
        {go !== '' && <div className="game-over">{go}</div>}        
      </div>
    );
  }

}

export default Board;
