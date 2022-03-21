import React from 'react';
import './App.css';
import Board from './Components/Board';

function App() {
  //   "boardState": [
  //       "",
  //       "",
  //       "",
  //       "",
  //       "",
  //       ""
  //   ],
  //   "evaluations": [
  //       null,
  //       null,
  //       null,
  //       null,
  //       null,
  //       null
  //   ],
  //   "rowIndex": 0,
  //   "solution": "pants"
  // }

  return (
    <div className="App">
      <h1>WORDULL</h1>
      <Board />
    </div>
  );
}

export default App;
