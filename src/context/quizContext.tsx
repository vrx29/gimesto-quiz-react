import axios from "axios";
import { questionProps, quizDataProps } from "constants/contextProps";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type quizContextProps = {
  quizData: quizDataProps[];
  currentQuiz: quizDataProps;
  setCurrentQuiz: (currentQuiz: quizDataProps) => void;
  currentQuizQuestions: questionProps[];
  setCurrentQuizQuestions: (currentQuizQuestions: questionProps[]) => void;
  score: number;
  setScore: (score: number) => void;
};

const QuizContext = createContext<quizContextProps>(undefined);

const QuizProvider = ({ children }: { children: ReactNode }): JSX.Element => {
  const [quizData, setQuizData] = useState<quizDataProps[]>(undefined);
  const [currentQuiz, setCurrentQuiz] = useState<quizDataProps>(null);
  const [currentQuizQuestions, setCurrentQuizQuestions] =
    useState<questionProps[] | undefined>(null);
  const [score, setScore] = useState<number>(0);

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
