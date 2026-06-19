function ResetButton({ resetGame }) {
  return (
    <button
      className="reset-btn"
      onClick={resetGame}
    >
      Reset Game
    </button>
  );
}

export default ResetButton;