import "./quizCard.css";
import React from "react";
import { PlayIcon } from "assets/icons";
import { Link } from "react-router-dom";

type QuizCardProps = {
  key: string;
  quiz: {
    _id: string;
    difficulty: string;
    name: string;
    genres: string[];
    poster: string;
  };
};

export function QuizCard({ quiz }: QuizCardProps): JSX.Element {
  const { _id: quizId, difficulty, name, genres, poster } = quiz;
  return (
    <div className="category-card">
      <img src={poster} alt="poster" />
      <div className="category-body">
        <span className="level">{difficulty}</span>
        <h5 className="name">{name}</h5>
        <div>
          {genres.map(
            (genre: string, index: number): JSX.Element => (
              <span className="genre" key={index}>
                {genre}
              </span>
            )
          )}
        </div>
        <Link className="btn btn-floating" to={`/rules/${quizId}`}>
          <PlayIcon />
        </Link>
      </div>
    </div>
  );
}
