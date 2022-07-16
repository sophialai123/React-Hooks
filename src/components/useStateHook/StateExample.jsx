import React, { useState } from "react";
import { questions } from "./dataModel";
import GroceryCart from './GroceryCart'


function StateExample() {

  const [questionIndex, setQuestionIndex] = useState(0);

  /* Set From Previous State
  Because the next value of count depends on the previous 
  value of count, we pass a callback function as 
  the argument for setCount() instead of a value  */
  const goBack = () => setQuestionIndex(prevQuestionIndex => prevQuestionIndex - 1)
  const goToNext = () => setQuestionIndex(prevQuestionIndex => prevQuestionIndex + 1)

  // determine if on the first question or not 
  const onFirstQuestion = questionIndex === 0 ? true : false;
  const onLastQuestion = questionIndex === questions.length - 1;

  return (
    <div>
      <nav>
        <h1>Quiz Navbar </h1>
        <span>Question #{questionIndex + 1}</span>
        <div>
          <button onClick={goBack} disabled={onFirstQuestion}>
            Go Back
          </button>
          <button disabled={onLastQuestion} onClick={goToNext}>
            Next Question
          </button>
        </div>
      </nav>
      <main>
        <GroceryCart />
      </main>
    </div>
  );
}

export default StateExample;