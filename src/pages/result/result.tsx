import React from 'react'
import result from '../../img/result.png'
import pass from '../../img/pass.png'
import './result.styles.scss'
const Result = () => {
    return (
        <div className="result text-center">
            {/* <div className="signup-img text-center">
                <img src={result} />
            </div> */}
            <img className='status' src={pass} alt="" />
            <h2>Congratulations!</h2>
            <p>You Answered</p>
            <h1>5/10</h1>
            <p>questions correct</p>
        </div>
    )
}
export default Result