// import React, { Component } from 'react';
// import Board from './Board';

// export default class Game extends Component {

//     render() {
//         const history = this.state.history;
//         const current = history[this.state.stepNumber];
//         const winner = calculateWinner(current.squares);
    
//         const moves = history.map((step, move) => {
//           const desc = move ?
//             'Go to move #' + move :
//             'Go to game start';
//           return (
//             <li key={move}>
//               <button onClick={() => this.jumpTo(move)}>{desc}</button>
//             </li>
//           );
//         });
    
//         let status;
//         if (winner) {
//           status = "Winner: " + winner;
//         } else {
//           status = "Next player: " + (this.state.xIsNext ? "X" : "O");
//         }

//     render() {
//         return (
//             <div className="game">
//                 <div className="game-board">
//                     <Board />
//                 </div>
//                 <div className="game-info">
//                     <div>{status}</div>
//                     <ol>{moves}</ol>
//                 </div>
//             </div>
//         );
//     }
// }