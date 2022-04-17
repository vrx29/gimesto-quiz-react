import axios from "axios";
import { useQuizData } from "context";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Options } from "./components";
import "./quiz.css";

export function Quiz() {
  const { quizId, quesNo } = useParams();
  const navigate = useNavigate();
  const {
    currentQuiz,
    setCurrentQuiz,
    currentQuizQuestions,
    setCurrentQuizQuestions,
    score,
    setScore,
  } = useQuizData();
  const [ques, setQues] = useState(undefined);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`/api/quizzes/${quizId}`);
        setCurrentQuiz(response.data.quiz);
        setCurrentQuizQuestions(
          response.data.quiz.questions.map((i) => ({ ...i, isSelected: "" }))
        );
      } catch (error) {
        console.log(error);
      }
    })();
  }, [quizId, setCurrentQuiz, setCurrentQuizQuestions]);

  useEffect(() => {
    currentQuizQuestions && setQues(currentQuizQuestions[quesNo]);
  }, [quesNo, setQues, currentQuizQuestions]);

  const handleOptionChange = (option) => {
    setCurrentQuizQuestions(
      currentQuizQuestions.map((q) => {
        if (q._id === ques._id) {
          return { ...q, isSelected: option };
        }
        return { ...q };
      })
    );
  };

  const gotoNextQuestion = () => {
    if (ques.isSelected === ques.answer) {
      setScore((prevScore) => prevScore + 20);
    }

    if (Number(quesNo) >= currentQuizQuestions.length - 1) {
      navigate("/");
    } else {
      navigate(`/quiz/${quizId}/${Number(quesNo) + 1}`);
    }
  };

  return (
    <section>
      <div className="card">
        {ques && (
          <>
            <h6>{currentQuiz.name}</h6>
            <div className="info m-b-2">
              <p>
                Question:{" "}
                <span className="highlight-text">{`${Number(quesNo) + 1}/${
                  currentQuizQuestions.length
                }`}</span>
              </p>
              <p>
                Score: <span className="highlight-text">{score}</span>
              </p>
            </div>
            <p className="question m-b-2">{ques.question}</p>

            <div className="options-cont m-b-2">
              {ques.options.map((option, id) => (
                <Options
                  option={option}
                  key={id}
                  id={id}
                  isSelected={ques.isSelected}
                  handleOptionChange={handleOptionChange}
                />
              ))}
            </div>

            <button className="btn btn-primary" onClick={gotoNextQuestion}>
              {Number(quesNo) + 1 === currentQuizQuestions.length
                ? "Submit"
                : "Next Question"}
            </button>
          </>
        )}
      </div>
    </section>
  );
}
