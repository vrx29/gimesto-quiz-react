export type questionProps = {
  id: string;
  question: string;
  options: string[];
  answer: string;
  isSelected?: string;
};

export type quizDataProps = {
  _id: string;
  name: string;
  difficulty: string;
  genres: string[];
  poster: string;
  questions: questionProps[];
};
