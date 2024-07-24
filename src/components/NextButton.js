function NextButton({ answer, dispatch, index, numOfQuestions, status }) {
  if (answer === null) return null;
  return (
    <>
      {index < numOfQuestions - 1 && (
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "nextQuestion" })}
        >
          Next
        </button>
      )}
      {index === numOfQuestions - 1 && (
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "finish" })}
        >
          Finish
        </button>
      )}
    </>
  );
}

export default NextButton;
