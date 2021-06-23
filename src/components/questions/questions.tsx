import React, { useContext, useState } from 'react'
import Button from "../button/button.component"
import question from "../../img/question.png"
import { QuestionContext, Score, ShowResult } from '../../config/context'
import { useHistory } from "react-router";
import './questions.styles.scss'


const Questions = () => {
    let [quiz, setquiz] = useContext(QuestionContext)
    let [score, setScore] = useContext(Score)
    let [currentStep, setCurrentStep] = useState(0)
    let [selectAnswer, setSelectAnswer] = useState('')
    const [showResult, setShowResult] = useContext(ShowResult);


    let questions = quiz[currentStep].question;
    let options = quiz[currentStep].options;


    const handleSubmit = async (e) => {
        e.preventDefault()
        e.target.reset();
        const correctAnswer = quiz[currentStep].answer;

        if (selectAnswer == correctAnswer)
            setScore(++score)

        if (currentStep !== quiz.length - 1)
            setCurrentStep(++currentStep)

        else {
            setShowResult(true)
            setCurrentStep(0)
        }
    }
    return (

        <div className='questions-container p-4 text-center'>
            <div className="signup-img text-center">
                <img src={question} alt='' />
            </div>
            <div className="question">
                <h2>{questions}</h2>
            </div>
            <form onSubmit={(e: React.FormEvent<EventTarget>) => handleSubmit(e)}>
                {
                    options.map((opt, idx) => {
                        return (
                            <div key={idx}>
                                <label>
                                    <input type="radio" value={opt} name="opt" required onChange={e => { setSelectAnswer(e.target.value); }} checked={selectAnswer === opt} />
                                    {opt}
                                </label>
                            </div>
                        )
                    })
                }
                <Button value="next" />
            </form>
        </div>
    )
}

export default Questions