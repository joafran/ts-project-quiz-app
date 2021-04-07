import React, { useState } from 'react';
import Loading from './components/Loading';
import QuestionCard from './components/Questions/QuestionCard';
import './App.css';
import { fetchData, QuestionState } from './components/utils/fetchData';
import Score from './components/Score/Score';
import Contact from './components/Contact/Contact';
import Main from './components/Main/Main';

const App: React.FC = () => {
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [loading, setLoading] = useState(false);
  const [gameOver, setGameOver] = useState(true);

  const startQuiz = async () => {
      setLoading(true);
      setGameOver(false);
      setShowScore(false);
      setCurrentQuestion(0);
      setScore(0);
  
      try {
        const newQuestions = await fetchData();
        setQuestions(newQuestions);
      } catch (error) {
        console.error(error);      
      }
  
      if(questions) {
        setLoading(false);
      }
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>):void => {
    const btn = e.currentTarget;
    if(!gameOver) {
      // User's answer
      const answer = e.currentTarget.value;
      // Check answer against correct answer
      const correct = questions[currentQuestion].correct_answer === answer;
      // Add score if answer is correct
      if (correct){
        setScore(score + 1);
        btn.classList.add('correct');
      } else {
        btn.classList.add('incorrect');
      } ;
      // Save the answer in the array for user answers
    }
    setTimeout(() => {
      btn.classList.remove('incorrect');
      btn.classList.remove('correct');
      nextQuestion();
      
    }, 1000);
  }

  const nextQuestion = ():void => {
    const nextQuest:number = currentQuestion + 1;
    if(nextQuest === questions.length) {
      setGameOver(true);
      setShowScore(true);
    } else {
      setCurrentQuestion(nextQuest);
    }
  };

  const finishGame = () => {
    setShowContact(true);
  }

  return (
    <div className="App">
        <div className="quiz-container">
          {loading ? 
            ( <div style={{textAlign: 'center'}}>
                <Loading />
                <h2>Loading questions...</h2>
              </div> ) 
          : null
          }
          
          {(gameOver && !showScore && !showContact) ? (
            <Main startQuiz={startQuiz}/>
          ): null}

          {showScore && !showContact ? (
            <Score 
              totalQuestions={questions.length} 
              score={score} 
              startQuiz={startQuiz} 
              finishGame={finishGame}
            />
          ) : null}

          {showContact ? (
            <Contact />
          ) : null
          }

          {
            (!gameOver && !loading) ?
            <QuestionCard 
             question={questions[currentQuestion].question}
             currentQuestion={currentQuestion}
             answers={questions[currentQuestion].answers}
             totalQuestions={questions.length}
             callback={checkAnswer} 
             /> 
            : null
          }
        </div>
    </div>
  );
}

export default App;
