import { useState, useEffect } from "react";
import Board from "../components/Board";
import GameStatus from "../components/GameStatus";
import ScoreBoard from "../components/ScoreBoard";
import ResetButton from "../components/ResetButton";
import { calculateWinner } from "../utils/gameLogic";

function Home() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const [xScore, setXScore] = useState(0);
  const [oScore, setOScore] = useState(0);

  const winner = calculateWinner(squares);

  useEffect(() => {
    if (winner === "X") {
      setXScore((prev) => prev + 1);
    } else if (winner === "O") {
      setOScore((prev) => prev + 1);
    }
  }, [winner]);

  const handleClick = (index) => {
    if (squares[index] || winner) return;

    const newSquares = [...squares];
    newSquares[index] = xIsNext ? "X" : "O";

    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  let status;

  if (winner) {
    status = `Winner: ${winner} 🎉`;
  } else if (!squares.includes(null)) {
    status = "Match Draw 🤝";
  } else {
    status = `Next Player: ${xIsNext ? "X" : "O"}`;
  }

  return (
    <div className="container">
      <h1>Tic Tac Toe</h1>

      <ScoreBoard xScore={xScore} oScore={oScore} />

      <GameStatus status={status} />

      <Board
        squares={squares}
        handleClick={handleClick}
      />

      <ResetButton resetGame={resetGame} />
    </div>
  );
}

export default Home;