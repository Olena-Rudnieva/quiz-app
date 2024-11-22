import { useState } from 'react';
import {
  AnswerItem,
  AnswersList,
  BottomWrapper,
  Container,
  Indicator,
  IndicatorsContainer,
  NextButton,
  QuestionHeader,
  QuestionText,
  RestartButton,
  Results,
  ResultsHeader,
  ResultsText,
  Wrapper,
} from './Quiz.styled';
import { PiCheckFatDuotone } from 'react-icons/pi';
import { TiTimesOutline } from 'react-icons/ti';

interface IAnswer {
  text: string;
  isCorrect: boolean;
}

interface IQuestion {
  question: string;
  answers: IAnswer[];
}

interface QuizProps {
  questions: IQuestion[];
}

export const Quiz = ({ questions }: QuizProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(
    null
  );
  const [isAnswered, setIsAnswered] = useState(false);
  const [results, setResults] = useState<(boolean | null)[]>(
    Array(questions.length).fill(null)
  );

  const handleAnswerSelect = (index: number, isCorrect: boolean) => {
    if (isAnswered) return;

    setSelectedAnswerIndex(index);
    setIsAnswered(true);

    const newResults = [...results];
    newResults[currentQuestionIndex] = isCorrect;
    setResults(newResults);

    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestionIndex + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestionIndex(nextQuestion);
      setSelectedAnswerIndex(null);
      setIsAnswered(false);
    } else {
      setShowResults(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResults(false);
    setSelectedAnswerIndex(null);
    setIsAnswered(false);
    setResults(Array(questions.length).fill(null));
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <Container>
      {showResults ? (
        <Results>
          <ResultsHeader>Quiz Completed!</ResultsHeader>
          <ResultsText>
            You scored {score} out of {questions.length}.
          </ResultsText>
          <RestartButton onClick={handleRestart}>Restart</RestartButton>
        </Results>
      ) : (
        <Wrapper>
          <QuestionHeader>
            Question {currentQuestionIndex + 1} of {questions.length}
          </QuestionHeader>
          <hr />
          <QuestionText>{currentQuestion.question}</QuestionText>
          <AnswersList>
            {currentQuestion.answers.map((answer, index) => (
              <AnswerItem
                key={index}
                correct={answer.isCorrect}
                selected={selectedAnswerIndex === index}
                onClick={() => handleAnswerSelect(index, answer.isCorrect)}
              >
                {answer.text}
              </AnswerItem>
            ))}
          </AnswersList>
          <BottomWrapper>
            <NextButton onClick={handleNextQuestion} disabled={!isAnswered}>
              Next
            </NextButton>
            <IndicatorsContainer>
              {results.map((result, index) => (
                <Indicator key={index} correct={result}>
                  {result === true && <PiCheckFatDuotone />}
                  {result === false && <TiTimesOutline />}
                </Indicator>
              ))}
            </IndicatorsContainer>
          </BottomWrapper>
        </Wrapper>
      )}
    </Container>
  );
};
