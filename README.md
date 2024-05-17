# Ask the Magic 8-Ball 🎱

## Contents
- Introduction
- Starter Code
- Deliverable
- Provided Functions
- Extra Help (If Needed)
- Level Up! (Bonus Points)

## Introduction
Your senior engineer has set up all the UI elements for this virtual Magic 8-Ball. Your task is to complete three functions in `script.js` that build upon eachother to implement the final user experience.

The final user experience should work like this:

A user types a question into the input box and clicks the 8-ball. The 8-ball displays a random answer from one of three answer categories: positive, negative, or maybe. If the user forgets to type a question, the 8-ball displays a reminder instead of an answer: "You need to ask a question!"

## Starter Code
Take a look at the top of `script.js`. There are three arrays that correspond to our answer categories of positive, negative, and maybe. Each array holds five answer strings (but you can add more if you'd like). 

Just below the arrays, you'll see a variable called `NO_QUESTION_WARNING`. This stores a string we can display to the user if they don't enter any question text. 

You'll notice three empty functions have already been declared in `script.js`. To complete the Milestone, you'll add code to the body of each of these functions.

> **⚠️ Warning:** Don't change these variables! Changing them can cause problems with the end user experience and cause your tests to fail.

## Deliverable
Below are the requirements for each of the three functions you need to finish in `script.js`. Each function comes with a test that will give you hints as you develop and help you verify that your code is correct.
<hr>

### 1. **`chooseRandomAnswerType()`**
 
This function should return a random string that is either "positive", "negative", or "maybe". You can use 
 the provided `getRandomNumber()` function to randomly select one of the three possibilities.

**TEST:** `chooseRandomAnswerTypeTest()`
<hr>

### 2. **`chooseRandomAnswer(answerType)`**

The parameter `answerType` will be a string that is either "positive", "negative", or "maybe". Based on this parameter, you should return a random answer from the corresponding answer array.

**TEST:** `chooseRandomAnswerTest()`
<hr>

### 3. **`onAnswerRequested()`**

This function is called when the 8-ball is clicked. It will rely on the first two functions you complete. If no question is asked, you should show "You need to ask a question!" (use the `NO_QUESTION_WARNING` variable provided). Otherwise, supply a random answer to the user using conditional logic and the other functions you have at your disposal.

**TEST:** `onAnswerRequestedTest()`

## Provided Functions
Your senior engineer has written three helper functions you'll need to use to complete the 8-ball. These functions are defined in `provided.js` but they can be called from `script.js`. 

> **🗒 Note:** The only file you'll need to edit to complete the 8-ball is `script.js`.

<hr>

1. `getRandomNumber(min, max)`

This function accepts two numbers: `min` and `max`. It returns a randomly generated number in between the supplied min and max (inclusive). Try calling `getRandomNumber(0, 4)` in the console a few times to see how it works.
<hr>

2. `getQuestionText()`

This function returns the string the user types into the input box. Type something into the input box on the page and call `getQuestionText()` in the console to see it in action.
<hr>
    
3. `supplyAnswer(answerText)`

This function accepts a string called `answerText` and displays it inside of the 8-ball. Try calling `supplyAnswer("Ask again later")` in the console and check the page to see what happens.


## Extra Help (If Needed)

You have everything you need to get started and complete this task! The most challenging part is going to be decomposing to break down this problem into parts (what to do first, second, third). You should try this on your own but, if you're still having trouble, check out `HINTS.md` for some extra help.

## Level Up! (Bonus Points)

Want to enhance your game? Refactor your JavaScript logic to prevent the same answer from appearing twice in a row. Use your decomposition and discovery skills to figure out how. 

When you're done coding, use the "LEVEL UP" comment at the bottom of `script.js` to describe your feature to your grader for some bonus points!