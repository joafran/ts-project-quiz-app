import React from 'react';
import result from '../../assets/result.svg';
import './Score.css'

type Props = {
    score: number,
    startQuiz: () => Promise<any>,
    finishGame: () => void,
    totalQuestions: number
}

const Score: React.FC<Props> = ({totalQuestions, score, startQuiz, finishGame}) => {
    return (
        <div className="score-container">
              <div>
                <h2>Game over!</h2>
                <h3>You scored {score} out of {totalQuestions}.</h3>
                <p>Would you like to play again?</p>
                <button className="btn-start" onClick={() => startQuiz()}>Start again</button>
                <button className="btn-end" onClick={() => finishGame()}>No, thanks!</button>
              </div>
              <img className="svg" src={result} alt="svg-quiz"/>
        </div>
    );
}

export default Score;