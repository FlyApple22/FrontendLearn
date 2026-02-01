import { useState } from "react";
import "./App.css";
import Square from "./Square";

function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  function handleClick(i) {
    const copySquares = [...squares];
    if (xIsNext) {
      copySquares[i] = "X";
    } else {
      copySquares[i] = "O";
    }
    setXIsNext(!xIsNext);
    setSquares(copySquares);
  }
  return (
    <>
      <div className='board-row'>
        <Square
          updateSquare={() => {
            handleClick(0);
          }}
          value={squares[0]}
        />
        <Square
          updateSquare={() => {
            handleClick(1);
          }}
          value={squares[1]}
        />
        <Square
          updateSquare={() => {
            handleClick(2);
          }}
          value={squares[2]}
        />
      </div>
      <div className='board-row'>
        <Square
          updateSquare={() => {
            handleClick(3);
          }}
          value={squares[3]}
        />
        <Square
          updateSquare={() => {
            handleClick(4);
          }}
          value={squares[4]}
        />
        <Square
          updateSquare={() => {
            handleClick(5);
          }}
          value={squares[5]}
        />
      </div>
      <div className='board-row'>
        <Square
          updateSquare={() => {
            handleClick(6);
          }}
          value={squares[6]}
        />
        <Square
          updateSquare={() => {
            handleClick(7);
          }}
          value={squares[7]}
        />
        <Square
          updateSquare={() => {
            handleClick(8);
          }}
          value={squares[8]}
        />
      </div>
    </>
  );
}

export default Board;
