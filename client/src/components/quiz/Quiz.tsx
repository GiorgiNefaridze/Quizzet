import { FC, useEffect, useState } from "react";
import { Button, Progress, Stack, Tooltip, WrapItem } from "@chakra-ui/react";
import { RxQuestionMarkCircled } from "react-icons/rx";

import Rate from "./Rate";
import QuizPopUp from "./QuizPopUp";
import { useGetQuiz } from "../../hooks/useGetQuiz";
import { DIFFICULTY, GAME_RULES } from "../../CONSTANTS";

import { QuizWrapper, Buttons, Header } from "./Quiz.style";

const Quiz: FC = () => {
  const [question, setQuestion] = useState({});
  const [count, setCount] = useState(1);
  const [error, setError] = useState<boolean>(false);

  const { getQuiz } = useGetQuiz();

  const fetcData = async () => {
    const data = await getQuiz();

    const question = data[Math.floor(Math.random() * data.length)];

    setQuestion({
      question: question?.question.text,
      answers: [...question?.incorrectAnswers, question.correctAnswer],
      correctAnswer: question.correctAnswer,
      difficulty: question?.difficulty,
    });
  };

  useEffect(() => {
    if (count <= 10) {
      (async () => {
        await fetcData();
      })();
    }
  }, [count]);

  const handleClick = (answer: string) => {
    if (count == 10 || answer !== question?.correctAnswer) {
      setError(true);
      return;
    }

    setCount((num) => num + 1);
  };

  return (
    <QuizWrapper isError={error}>
      {error && <QuizPopUp />}
      <main>
        <WrapItem>
          <Tooltip
            label={GAME_RULES}
            closeDelay={200}
            width={170}
            hasArrow
            placement="top"
            bg="red.600"
          >
            <div>
              <RxQuestionMarkCircled size={30} color="red" cursor={"pointer"} />
            </div>
          </Tooltip>
        </WrapItem>
        <Header>
          <Stack width="90%">
            <Progress
              height="20px"
              colorScheme="red"
              size="md"
              value={count}
              max={10}
            />
          </Stack>
          <Rate difficulty={DIFFICULTY[question?.difficulty]} />
        </Header>
        <p>Question {count} / 10</p>
        <h1>{question?.question}</h1>
        <Buttons>
          {question?.answers?.map?.((content: string, idx: number) => (
            <Button
              key={idx}
              colorScheme="red"
              variant="outline"
              onClick={() => handleClick(content)}
            >
              {content}
            </Button>
          ))}
        </Buttons>
      </main>
    </QuizWrapper>
  );
};

export default Quiz;
