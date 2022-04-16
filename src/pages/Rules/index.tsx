import "./rules.css";
import rules from "assets/hero/rules.png";
import React from "react";
import { FingerRight } from "assets/icons";
import { Link } from "react-router-dom";

export function Rules() {
  return (
    <section>
      <div className="card">
        <img src={rules} alt="rules__page--img" />
        <h6>Rules to be followed</h6>
        <ul>
          <li>
            <span>
              <FingerRight className="icon-arrow" />
            </span>
            There will be 5 questions.
          </li>
          <li>
            <span>
              <FingerRight className="icon-arrow" />
            </span>
            Each question will be of one mark.
          </li>
          <li>
            <span>
              <FingerRight className="icon-arrow" />
            </span>
            There will be four options provided.
          </li>
          <li>
            <span>
              <FingerRight className="icon-arrow" />
            </span>
            You have to select only one option.
          </li>
          <li>
            <span>
              <FingerRight className="icon-arrow" />
            </span>
            Score must be more than 60% to win.
          </li>
        </ul>
        <Link className="btn btn-primary" to="/quiz">
          Start Quiz
        </Link>
      </div>
    </section>
  );
}
