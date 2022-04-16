import "./quizCard.css";
import React from "react";
import { PlayIcon } from "assets/icons";
import { Link } from "react-router-dom";

export function QuizCard({ quiz }) {
  const { difficulty, name, genres, poster } = quiz;
  return (
    <div className="category-card">
      <img src={poster} alt="" />
      <div className="category-body">
        <span className="level">{difficulty}</span>
        <h5 className="name">{name}</h5>
        <div>
          {genres.map((genre: string) => (
            <span className="genre">{genre}</span>
          ))}
        </div>
        <Link className="btn btn-floating" to="">
          <PlayIcon />
        </Link>
      </div>
    </div>
  );
}
