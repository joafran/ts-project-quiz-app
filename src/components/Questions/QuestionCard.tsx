import React from 'react';
import './QuestionCard.css'
import img from '../../assets/question.svg';

// Data types that the QuestionCard component will receive
// This also helps to autocomplete
type Props = {
    question: string;
    answers: string[];
    totalQuestions: number;
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    currentQuestion: number;
}

const QuestionCard: React.FC<Props> = ({ question, answers, callback, currentQuestion, totalQuestions }) => {
   
    const cleanText = (str:string):string => {
        // First make each word an element of an array
        // Then make a new array with a regex validation to clean symbols
        // Lastly, it converts the elements to a single string
        const cleanSymbols = str.split(' ').map( word => word.replace(/[^a-zA-Z0-9 ]/g, "")).join(' ');
        
        // Now clean the 'quot' with a similar process and return it
        // How would you improve it? Let me know
        return cleanSymbols.split('quot').filter( word => word !== 'quot').join(' ').concat('?')
    }


    return (
        <div className="question">
            <div className="current-question"><span>Question {currentQuestion + 1} </span>/ {totalQuestions} </div>
            <div className="question-info">
                <img src={img} alt="svg-question"/>
                <p className="question-text">{cleanText(question)}</p>
            </div>
            <div className="options">
                {answers.map( (answer, index) => {
                    answer = cleanText(answer).replace('?','');
                    return (
                        <button className="btn-options" key={index} value={answer} onClick={callback}>{answer}</button>
                    );
                })}
            </div>
        </div>
    );
}

export default QuestionCard;