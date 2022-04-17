import "./rules.css";
import rulesIcon from "assets/hero/rules.png";
import React from "react";
import { FingerRight } from "assets/icons";
import { Link, useParams } from "react-router-dom";
import { rules } from "data/rules";

export function Rules() {
  const { quizId } = useParams();
  return (
    <section>
      <div className="card">
        <img src={rulesIcon} alt="rules__page--img" />
        <h6>Rules to be followed</h6>
        <ul>
          {rules.map((rule, id) => (
            <li key={id}>
              <span>
                <FingerRight className="icon-arrow" />
              </span>
              {rule}
            </li>
          ))}
        </ul>
        <Link className="btn btn-primary" to={`/quiz/${quizId}/${0}`}>
          Start Quiz
        </Link>
      </div>
    </section>
  );
}
