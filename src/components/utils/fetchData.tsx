import { sortResponse } from './utils';

// Question structure of each element in the response 
export type Question = {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;

}

// Export de type with the answers property added to use it in the state
export type QuestionState = Question & { answers: string[]}

// Using enum to declare which values can take the difficulty prop.
export enum Difficulty {
    EASY = 'easy',
    MEDIUM = 'medium',
    HARD = 'hard'
}

// fetchData will bring an array where each element is an object of type Question 
export const fetchData = async (): Promise<QuestionState[]> => {
    const api = `https://opentdb.com/api.php?amount=10&type=multiple`;
    const data = await (await fetch(api)).json();

    // return the response with an additional prop (answers) 
    // now all answers are in the same array
    return data.results.map( (question: Question) => (
        {
            ...question,
            answers: sortResponse([...question.incorrect_answers, question.correct_answer])
        }
    ))
}