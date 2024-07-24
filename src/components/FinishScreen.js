function FinishScreen({ points, maxPossiblePoints, highScore, dispatch }) {
  const percetange = Math.ceil((points / maxPossiblePoints) * 100);
  let emoji;
  if (percetange >= 90) emoji = "🎖️";
  if (percetange >= 80 && percetange < 90) emoji = "🥈";
  if (percetange >= 70 && percetange < 80) emoji = "😇";
  if (percetange >= 60 && percetange < 70) emoji = "🙂";
  if (percetange >= 50 && percetange < 60) emoji = "😣";
  if (percetange >= 0 && percetange < 50) emoji = "🤦";

  return (
    <>
      <p className="result">
        {emoji} You scored <strong>{points}</strong> out of{" "}
        <storng>{maxPossiblePoints}</storng> (<strong>{percetange}</strong>%)
      </p>
      <p className="highscore">(Highscore: {highScore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz!
      </button>
    </>
  );
}

export default FinishScreen;
