export const changeAnswersPosition = (answersArray: string[]) => {
  let newArray = [];
  const shuffledArray1 = [...answersArray];

  for (let i = answersArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray1[i], shuffledArray1[j]] = [
      shuffledArray1[j],
      shuffledArray1[i],
    ];
  }

  shuffledArray1.forEach((item) => {
    newArray.push(item);
  });

  return newArray;
};
