import Square from "./Square";

function Board({ squares, handleClick }) {
  return (
    <div className="board">
      {squares.map((square, index) => (
        <Square
          key={index}
          value={square}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
}

export default Board;