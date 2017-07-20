import React from 'react';
import './App.css';
import Board from '../../containers/Board';


const App = () => (
  <div className="app">
    <h2>Juego Tres en raya</h2>
    <div className="game">

      <Board />
    </div>

    <div className="footer">
      <h4>Integrantes:</h4>
      <a href="https://github.com/Akhail/">Betancourt Michel</a>
      <a href="https://github.com/jdgez">Guedez Jesus</a>
      <a href="https://github.com/algex/">Oropeza Gerardo</a>
    </div>
  </div>
)

export default App;
