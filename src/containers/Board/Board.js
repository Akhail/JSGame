import React from 'react';
import Figure from '../../components/Figure';
import './Board.css';
class Board extends React.Component {
  constructor() {
    super();
    this.state = { board: [['','',''],['','',''],['','','']], isX: true };
  }
  
  click = (y, x) => (e) => {
    let temp = this.state.board;
    if(temp[y][x] === ''){
      temp[y][x] = this.state.isX ? 'x' : 'c';
      this.setState({
        board: temp,
        isX: !this.state.isX
      })
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

  render() {
    return (
      <div className="board">
        {this.state.board.map(this.renderRow)}
      </div>
    );
  }

  componentDidMount() {
    this.setState({ someKey: 'otherValue' });
  }
}

export default Board;
