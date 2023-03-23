import React, { useContext, useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import { scoreContext } from './App';

function Question() {
  const [count, setCount] = useState(0);
  const {score , setScore} = useContext(scoreContext)
  
  const navigate = useNavigate()
  

  
  const questions = [
    {
      question: "Q1:What is the capital city of France?",
      a: "Madrid",
      b: "Paris",
      c: "Rome",
      d: "Berlin",
      answer: "b"
    },
    {
      question: "Q2:Which planet is closest to the Sun?",
      a: "Venus",
      b: "Mars",
      c: "Mercury",
      d: "Jupiter",
      answer: "c"
    },
    {
      question: "Q3:Who invented the telephone?",
      a: "Alexander Graham Bell",
      b: "Thomas Edison",
      c: "Nikola Tesla",
      d: "Albert Einstein",
      answer: "a"
    },
    {
      question: "Q4:What is the largest animal in the world?",
      a: "Giraffe",
      b: "Elephant",
      c: "Blue whale",
      d: "Hippopotamus",
      answer: "c"
    },
    {
      question: "Q5:What is the capital city of Australia?",
      a: "Sydney",
      b: "Melbourne",
      c: "Canberra",
      d: "Brisbane",
      answer: "c"
    },
    {
      question: "Q6:Who painted the Mona Lisa?",
      a: "Pablo Picasso",
      b: "Leonardo da Vinci",
      c: "Vincent van Gogh",
      d: "Michelangelo",
      answer: "b"
    },
    {
      question: "Q7:What is the largest country in the world?",
      a: "Canada",
      b: "United States",
      c: "Russia",
      d: "China",
      answer: "c"
    },
    {
      question: "Q8:Which is the tallest mammal?",
      a: "Elephant",
      b: "Giraffe",
      c: "Hippopotamus",
      d: "Rhino",
      answer: "b"
    },
    {
      question: "Q9:What is the smallest continent?",
      a: "Europe",
      b: "Africa",
      c: "Australia",
      d: "Asia",
      answer: "c"
    },
    {
      question: "Q10:Who wrote the play 'Hamlet'?",
      a: "William Shakespeare",
      b: "George Bernard Shaw",
      c: "Oscar Wilde",
      d: "Samuel Beckett",
      answer: "a"
    }
  ]


  function handleAnswerSelect(e) {
    const selectedAnswer = e.target.value
    console.log(selectedAnswer)
    const correctAnswer = questions[count].answer
    if (selectedAnswer === correctAnswer) {
      setScore(score + 1);
    }
  }

  function renderQuestion() {
    const currentQuestion = questions[count];
    return (
      <div>
        <h1>{currentQuestion.question}</h1>
        <ul>
          <li>
            <input type="radio" name="answer" id="ans1" value="a" onChange={handleAnswerSelect} />
            <label htmlFor="ans1" id="option1">{currentQuestion.a}</label>
          </li>
          <li>
            <input type="radio" name="answer" id="ans2" value="b" onChange={handleAnswerSelect} />
            <label htmlFor="ans2" id="option2">{currentQuestion.b}</label>
          </li>
          <li>
            <input type="radio" name="answer" id="ans3" value="c" onChange={handleAnswerSelect} />
            <label htmlFor="ans3" id="option3">{currentQuestion.c}</label>
          </li>
          <li>
            <input type="radio" name="answer" id="ans4" value="d" onChange={handleAnswerSelect} />
            <label htmlFor="ans4" id="option4">{currentQuestion.d}</label>
          </li>
        </ul>
      </div>
    );
  }

  // function renderResult() {
  //   return (
  //     <div>
  //       <h2>Quiz completed!</h2>
  //       <p>Your score: {score} / {questions.length}</p>
  //     </div>
  //   );
  // }
  function renderContent() {
    if (count >= questions.length) {
      // return renderResult();
      navigate("/Score")

    }
    return renderQuestion();
  }

  return (
    <div className='question'>
      <div className='content'>
        {renderContent()}
        {count < questions.length && (
          <button onClick={() => setCount(count + 1)}>Next</button>
        )}
      </div>
    </div>
  );
}

export default Question;