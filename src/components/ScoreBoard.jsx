function ScoreBoard({ xScore, oScore }) {
  return (
    <div className="scoreboard">
      <div>X : {xScore}</div>
      <div>O : {oScore}</div>
    </div>
  );
}

export default ScoreBoard;