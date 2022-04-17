import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
const QuizContext = createContext(undefined);

const QuizProvider = ({ children }) => {
  const [quizData, setQuizData] = useState([]);
  const [currentQuiz, setCurrentQuiz] = useState(null);
  const [currentQuizQuestions, setCurrentQuizQuestions] = useState(null);
  const [score, setScore] = useState(0);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("/api/quizzes");
        if (res.status === 200) {
          setQuizData(res.data.quizzes);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <QuizContext.Provider
      value={{
        quizData,
        currentQuiz,
        setCurrentQuiz,
        currentQuizQuestions,
        setCurrentQuizQuestions,
        score,
        setScore,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

const useQuizData = () => useContext(QuizContext);

export { useQuizData, QuizProvider };
