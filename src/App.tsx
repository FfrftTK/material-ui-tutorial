import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './style.css';
import { render } from 'react-dom';

// const App: React.FC = () => {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// const Square = () => {
//   return(
//     <button className="square">
//       {}
//     </button>
//   );
// }

type SquareType = string | null;

interface SquareProps {
  value: SquareType;
  onClick: () => void;
}

const Square: React.FC<SquareProps> = props => {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
};

interface BoardState {
  squares: SquareType[];
  xIsNext: boolean;
}

class Board extends React.Component<{}, BoardState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      squares: Array<SquareType>(9).fill(null),
      xIsNext: true,
    };
  }

  handleClick(i: number) {
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares,
      xIsNext: !this.state.xIsNext,
    });
  }

  renderSquare(i: number) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = `Winner: ${winner}`;
    } else {
      status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;
    }
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

interface HistoryData {
  squares: ('O' | 'X' | null)[];
}
interface GameState {
  history: HistoryData[];
  xIsNext: boolean;
  stepNumber: number;
}
class Game extends React.Component<{}, GameState> {
  constructor() {
    super({});
    this.state = {
      history: [{ squares: Array(9).fill(null) }],
      xIsNext: true,
      stepNumber: 0,
    };
  }
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="gane-info">
          <div>{}</div>
          <ol>{}</ol>
        </div>
      </div>
    );
  }
}

const calculateWinner = (squares: SquareType[]) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const x of lines) {
    const [a, b, c] = x;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

interface GameProps {
  value: Board;
}

// const Game: React.FC<GameProps> = props => {
//   return (
//     <div className="game">
//       <div className="game-board"> {props.value}</div>
//       <div className="gane-info">
//         <div>{}</div>
//         <ol>{}</ol>
//       </div>
//     </div>
//   );
// };

export default Game;
