import React, { useState, useEffect } from 'react';
import Container from './components/Container';
import Loader from './components/Loader';
import {shuffle} from './utils'


export const App = () => {
    const [questionsList, setQuestionsList] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(null)
    const [isLoading, setLoading] = useState(true)

    const getQuestionsList = async () => {
        await fetch(
            `http://localhost:4000/api/questions`,
            {
              method: "GET"
            }
          )
            .then(res => res.json())
            .then(response => {
              setQuestionsList(response.results)
              setLoading(false)
            })
            .catch(error => {
              console.log(error)
              setLoading(false)
            });
    }

    const getRandomQuestion = () => {
        const randomNumber: number = Math.floor(Math.random() * ((questionsList.length - 1) - 0) + 0);
        const shuffledQuestionsList = shuffle(questionsList)
        const randomQuestion: any = Object.assign(shuffledQuestionsList[randomNumber], {})
        if (randomQuestion.type === 'multiple' || randomQuestion.type === 'boolean') {
          let possibleAnswers = [...randomQuestion.incorrect_answers];
          possibleAnswers.push(randomQuestion.correct_answer)
          randomQuestion.possibleAnswers = shuffle(possibleAnswers)        
        } 
        
        setCurrentQuestion(randomQuestion)
    }

    useEffect(() => {
        getQuestionsList()
    }, []);
   
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1>Lucid</h1>
            <h2>Welcome to UI Team code assessment!</h2>
            {isLoading ?
              (<Loader/>)
              :
              (<Container getRandomQuestion={getRandomQuestion} question={currentQuestion}/>)
            }
        </div>
    )
}
