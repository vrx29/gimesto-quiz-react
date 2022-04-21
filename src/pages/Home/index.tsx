import React, { useRef } from "react";
import "./home.css";
import hero from "assets/hero/vrguy.png";
import { QuizCard } from "components";
import { useQuizData } from "context";

export function Home(): JSX.Element {
  const { quizData } = useQuizData();
  const quizContRef = useRef<HTMLDivElement>(null);

  return (
    <section>
      <div className="hero">
        <div className="hero-left">
          <h1>Do you love video games? Wanna check your knowledge of games.</h1>
          <button
            className="btn btn-primary"
            onClick={() => quizContRef.current.scrollIntoView()}
          >
            Browse quizzes
          </button>
        </div>
        <div className="hero-right">
          <img src={hero} alt="hero-img" />
        </div>
      </div>
      <h2>Our Recommended Categories</h2>
      <div className="card-cont" ref={quizContRef}>
        {quizData &&
          quizData.map((item) => <QuizCard key={item._id} quiz={item} />)}
      </div>
    </section>
  );
}
