import React from 'react';
import svg from '../../assets/quiz.svg';
import './Main.css';

type Props = {
    startQuiz: () => Promise<any>,
}

const Main: React.FC<Props> = ({ startQuiz }) => {


    return (
        <div className="quiz-header">
                <div className="start-section">
                    <h1>Welcome! 😁</h1>
                    
                    <h3><span>📝 Description</span><br/>
                    This is a simple trivia which consist in answer a multiple choice question of various topics.
                    </h3>

                    <p>Ready to start the quiz?</p>
                    <button className="btn-start" onClick={() => startQuiz()}>Let's do it!</button>

                </div>
                <img className="svg" src={svg} alt="svg-quiz"/>
            </div>
    );
}

export default Main;