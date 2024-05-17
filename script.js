/* This is where you'll complete the Milestone. Open your README.md file and click 'Open Preview' for detailed instuctions! */

let positiveAnswers = [
  "As I see it, yes",
  "It is certain",
  "It is decidedly so",
  "Yes",
  "Yes, definitely"
];

let negativeAnswers = [
  "My reply is no",
  "My sources say no",
  "There is no way",
  "No",
  "Absolutely not!"
];

let maybeAnswers = [
  "Ask again later",
  "Better to not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Reply hazy try again"
];

const NO_QUESTION_WARNING = "You need to ask a question!";

function chooseRandomAnswerType() {
  // Part 1: Your code here 👇
  let randomAnswerType = getRandomNumber(0,2);
  
  if (randomAnswerType === 0){
    return "positive";
  } else if (randomAnswerType === 1){
    return "negative";
  } else {
    return "maybe";
  }
}
chooseRandomAnswerTypeTest();

function chooseRandomAnswer(answerType) {
  // Part 2: Your code here 👇
  let answerTypeOffset = getRandomNumber(0,4);
 
  if (answerType === "positive"){
    return positiveAnswers[answerTypeOffset];
  } else if (answerType === "negative"){
    return negativeAnswers[answerTypeOffset];
  } else {
    return maybeAnswers[answerTypeOffset];
  }
  
}
chooseRandomAnswerTest();


function onAnswerRequested() {
  // Part 3: Your code here 👇
  let question = getQuestionText();

  if (question === ""){
    supplyAnswer(NO_QUESTION_WARNING);
  } else {
    supplyAnswer(chooseRandomAnswer(chooseRandomAnswerType()));
  }
}
onAnswerRequestedTest();


/* LEVEL UP - describe how it works below!


*/
