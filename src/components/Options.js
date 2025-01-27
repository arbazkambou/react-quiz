function Options({ question, dispatch, answer }) {
  const hasAnswerd = answer !== null;
  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hasAnswerd
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          disabled={hasAnswerd}
          key={option}
          index={index}
          onClick={() => dispatch({ type: "newAnswer", payLoad: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
