import React,{useContext} from 'react'
// import result from '../../img/result.png'
import pass from '../../img/pass.png'
import './result.styles.scss'
import { Score } from '../../config/context'


const Result = () => {
    let [score, setScore] = useContext(Score)
    console.log(score)
    return (
        <div className="result text-center">
            {/* <div className="signup-img text-center">
                <img src={result} />
            </div> */}
            <img className='status' src={pass} alt="" />
            <h2>Congratulations!</h2>
            <p>You Answered</p>
            <h1>{score}/10</h1>
            <p>questions correct</p>
        </div>
    )
}

export default Result