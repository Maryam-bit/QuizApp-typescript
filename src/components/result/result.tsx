import React, { useContext, useState } from 'react'
// import result from '../../img/result.png'
import pass from '../../img/pass.png'
import './result.styles.scss'
import { QuestionContext , Score , Quizcategory,  ShowResult, RequestApi} from '../../config/context'
import ProgressBar from 'react-animated-progress-bar';
import Button from '../button/button.component'


const Result = () => {
    let [score, setScore] = useContext(Score)
    const [quiz, setquiz] = useContext(QuestionContext)
    const [category, setcategory] = useContext(Quizcategory)
    const [showResult, setShowResult] = useContext(ShowResult)
    const [reqApi, setreqApi] = useContext(RequestApi)


    console.log(score)
    const percentag = score/10 * 100;
    console.log(percentag)
    const tryAgain = () => {
        console.log("hello world")
        setScore(0);
        setquiz([]);
        setcategory(0)
        setShowResult(false)
        setreqApi(false)
    }
    return (
        <div className="result text-center mb-3">
            {/* <div className="signup-img text-center">
                <img src={result} />
            </div> */}
            <img className='status' src={pass} alt="" />
            <h2>Congratulations!</h2>
            <p>You Answered</p>
            <h1>{score}/10</h1>
            {/* <ProgressBar
                width="200"
                fontColor="#ef645b"
                trackBorderColor="#e6e6e6"
                trackPathColor="#e6e6e6"
                trackWidth="23"
                percentage={percentag}
                defColor={{
                    fair: '#6573EB',
                    good: '#6573EB',
                    excellent: '#6573EB',
                    poor: '#6573EB',
                }} /> */}
            <p>questions correct</p>
            <div onClick={tryAgain}>
            <Button value='Try Again'/> 
                </div>
        </div>
    )
}

export default Result