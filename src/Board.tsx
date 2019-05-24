import React from 'react';
import './App.css';
import './style.css';
import Square from './Square';

type SquareType = 'X' | 'O' | null;

interface BoardProps {
  squares: SquareType[];
  onClick: (i: number) => void;
}

const Board: React.FC<BoardProps> = props => {
  const renderSquare = (i: number) => {
    return <Square value={props.squares[i]} onClick={() => props.onClick(i)} />;
  };
  return (
    <div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
