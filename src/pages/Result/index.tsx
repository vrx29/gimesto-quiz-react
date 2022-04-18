import "./result.css";
import React from "react";
import trophy from "assets/hero/award.png";
import oops from "assets/hero/oops.png";
import { useQuizData } from "context";
import { Options } from "components";
import { useNavigate } from "react-router-dom";

export function Result() {
  const {
    currentQuizQuestions,
    score,
    setScore,
    setCurrentQuiz,
    setCurrentQuizQuestions,
  } = useQuizData();
  const navigate = useNavigate();
  const handleQuizFinish = () => {
    setScore(0);
    setCurrentQuiz(null);
    setCurrentQuizQuestions(null);
    navigate("/");
  };
  return (
    <section>
      <div className="card">
        <h6>Result</h6>
        {score >= 60 ? (
          <img src={trophy} alt="trophy" />
        ) : (
          <img src={oops} alt="loss" />
        )}
        <h6>{score >= 60 ? "YAY you won!!!" : "Better luck next time"}</h6>
        <p className="result m-b-2">
          Final Score: <span className="highlight-text">{score}</span>
        </p>
        {currentQuizQuestions &&
          currentQuizQuestions.map((q) => (
            <div key={q.id} className="m-b-2">
              <p className="question">{q.question}</p>
              {q.options.map((option, id) => (
                <Options
                  option={option}
                  id={id}
                  answer={q.answer}
                  isSelected={q.isSelected}
                  handleOptionChange={() => {}}
                  key={id}
                  type="result"
                />
              ))}
            </div>
          ))}
        <button className="btn btn-primary" onClick={handleQuizFinish}>
          Finish
        </button>
      </div>
    </section>
  );
}
