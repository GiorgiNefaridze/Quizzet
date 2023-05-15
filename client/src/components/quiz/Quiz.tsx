import { FC, useEffect, useState } from "react";
import {
  Button,
  Progress,
  Skeleton,
  Stack,
  Tooltip,
  WrapItem,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { RxQuestionMarkCircled } from "react-icons/rx";
import { ArrowBackIcon } from "@chakra-ui/icons";

import Rate from "./Rate";
import QuizPopUp from "./QuizPopUp";
import { useGetQuiz } from "../../hooks/useGetQuiz";
import { useQuiz } from "../../hooks/useQuiz";
import { changeAnswersPosition } from "../../utils/changeAnswersPosition";
import { DIFFICULTY, GAME_RULES } from "../../CONSTANTS";

import { QuizWrapper, Buttons, Header, GoBack } from "./Quiz.style";

const Quiz: FC = () => {
  const [question, setQuestion] = useState({});
  const [count, setCount] = useState(1);
  const [error, setError] = useState<boolean>(false);
  const [buttons, setButtons] = useState<string[] | []>([]);

  const navigate = useNavigate();
  const { getQuiz, loading } = useGetQuiz();
  const { answeringQuiz } = useQuiz();

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

  const handleClick = async (answer: string) => {
    if (count == 10 || answer !== question?.correctAnswer) {
      setError(true);
      return;
    }

    toast.promise(answeringQuiz(DIFFICULTY[question?.difficulty]), {
      loading: "Saving Changes 🤖...",
      success: (score) => <p>You now have {score} score.Good Job 🫡</p>,
    });

    setCount((num) => num + 1);
  };

  const goBack = () => {
    navigate("/");
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
      <GoBack
        onClick={goBack}
        leftIcon={<ArrowBackIcon />}
        colorScheme="red"
        variant="outline"
      >
        Go Back
      </GoBack>
      <Toaster position="top-center" reverseOrder={false} />
    </QuizWrapper>
  );
};

export default Quiz;
