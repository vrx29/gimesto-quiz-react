import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
const QuizContext = createContext(undefined);

const QuizProvider = ({ children }) => {
  const [quizData, setQuizData] = useState([]);

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
    <QuizContext.Provider value={{ quizData }}>{children}</QuizContext.Provider>
  );
};

const useQuizData = () => useContext(QuizContext);

export { useQuizData, QuizProvider };
