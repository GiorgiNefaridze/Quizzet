import { FC, useEffect, useState, useRef } from "react";
import { Button, Progress, Stack } from "@chakra-ui/react";
import axios from "axios";

import { QuizWrapper, Buttons } from "./Quiz.style";

const Quiz: FC = () => {
  const [question, setQuestion] = useState({});
  const [count, setCount] = useState(1);

  const testRef = useRef(true);

  const fetcData = async () => {
    const { data } = await axios.get("https://the-trivia-api.com/v2/questions");

    const question = data[Math.floor(Math.random() * data.length)];

    setQuestion({
      question: question?.question.text,
      answers: [...question?.incorrectAnswers, question.correctAnswer],
      correctAnswer: question.correctAnswer,
    });
  };

  useEffect(() => {
    (async () => {
      await fetcData();
    })();
  }, [count]);

  const handleClick = (answer: string) => {
    if (answer !== question?.correctAnswer) {
      return;
    }

    setCount((num) => num + 1);
  };

  return (
    <QuizWrapper>
      <main>
        <Stack width="100%">
          <Progress
            height="20px"
            colorScheme="red"
            size="md"
            value={count}
            max={10}
          />
        </Stack>
        <p>Question {count} / 10</p>
        <h1>{question?.question}</h1>
        <Buttons>
          {question?.answers?.map?.((el, idx) => (
            <Button
              key={idx}
              colorScheme="red"
              variant="outline"
              onClick={() => handleClick(el)}
            >
              {el}
            </Button>
          ))}
        </Buttons>
      </main>
    </QuizWrapper>
  );
};

export default Quiz;
