import { FC, useEffect, useState } from "react";
import {
  Button,
  Progress,
  Skeleton,
  Stack,
  Tooltip,
  WrapItem,
} from "@chakra-ui/react";
import { RxQuestionMarkCircled } from "react-icons/rx";

import Rate from "./Rate";
import QuizPopUp from "./QuizPopUp";
import { useGetQuiz } from "../../hooks/useGetQuiz";
import { changeAnswersPosition } from "../../utils/changeAnswersPosition";
import { DIFFICULTY, GAME_RULES } from "../../CONSTANTS";

import { QuizWrapper, Buttons, Header } from "./Quiz.style";

const Quiz: FC = () => {
  const [question, setQuestion] = useState({});
  const [count, setCount] = useState(1);
  const [error, setError] = useState<boolean>(false);
  const [buttons, setButtons] = useState<string[] | []>([]);

  const { getQuiz, loading } = useGetQuiz();

  const fetcData = async () => {
    const data = await getQuiz();

    const question = data[Math.floor(Math.random() * data.length)];

    setQuestion({
      question: question?.question.text,
      answers: [...question?.incorrectAnswers, question.correctAnswer],
      correctAnswer: question.correctAnswer,
      difficulty: question?.difficulty,
    });

    const mixedPositions = changeAnswersPosition([
      ...question?.incorrectAnswers,
      question.correctAnswer,
    ]);

    setButtons(mixedPositions);
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
        {!loading && (
          <>
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
                  <RxQuestionMarkCircled
                    size={30}
                    color="red"
                    cursor={"pointer"}
                  />
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
          </>
        )}

        {!loading && <p>Question {count} / 10</p>}
        {loading && (
          <Skeleton style={{ width: "100%" }}>
            <p>lorem</p>
          </Skeleton>
        )}
        {loading && (
          <Skeleton style={{ width: "100%" }}>
            <p>lorem</p>
          </Skeleton>
        )}
        {!loading && <h1>{question?.question}</h1>}
        <Buttons>
          {loading &&
            new Array(4).fill(0).map?.((item) => (
              <Skeleton style={{ width: "100%" }}>
                <p>lorem</p>
                <p>lorem</p>
              </Skeleton>
            ))}
          {!loading &&
            buttons?.map((content: string, idx: number) => (
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
