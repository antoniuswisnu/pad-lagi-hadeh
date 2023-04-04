import { useState } from "react";

import QuestionList from "./questions.json";

import QuizResult from "./QuizResult";
import Question from "./Question";

function QuizScreen({retry}) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [markedAnsers, setMarkedAnswers] = useState(new Array(QuestionList.length));
  const isQuestionEnd = currentQuestionIndex === QuestionList.length;

    function calculateResult(){
        let correct = 0;
        markedAnsers.forEach((answer, index) => {
            if(answer === QuestionList[index].correct){
                correct++;
            }
        });
        return {
            correct,
            total: QuestionList.length,
            percentage: (correct / QuestionList.length) * 100,
        };
    }

  return (
    <div className="quiz-screen">
      {isQuestionEnd ? (
        <QuizResult 
            result={calculateResult()}
            retry={retry}
        />
      ) : (
        <Question
          question={QuestionList[currentQuestionIndex]}
          totalQuestions={QuestionList.length}
          currentQuestion={currentQuestionIndex + 1}
          setAnswer={(index) => {
            setMarkedAnswers((arr) => {
              let newArr = [...arr];
              newArr[currentQuestionIndex] = index;
              return newArr;
            });
            setCurrentQuestionIndex(currentQuestionIndex + 1);
          }}
        />
      )}
    </div>
  );
}

export default QuizScreen;
