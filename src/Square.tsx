import React from 'react';
import './App.css';
import './style.css';

type SquareType = 'X' | 'O' | null;

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

export default Square;
