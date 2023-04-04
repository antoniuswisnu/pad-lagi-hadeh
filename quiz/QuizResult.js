 function QuizResult({ result, retry }) {
  return (
    <div className="result-screen">
      <h2>Result : {result.percentage}%</h2>
      <p>
        Selected {result.correct} Jawaban benar {result.total} question{" "}
      </p>
      <button onClick={retry}>Retry</button>
    </div>
  );
}

export default QuizResult;
