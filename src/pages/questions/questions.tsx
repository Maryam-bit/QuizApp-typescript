import React from 'react'
import { useHistory } from "react-router";
import './questions.styles.scss'
import Button from "../../components/button/button.component"
import question from "../../img/question.png"

const Questions = () => {
    const history = useHistory();
    const handleSubmit = (e) => {
        e.target.reset();
        history.push({
            pathname: "/result",
        });
    }
    return (
        <div className='questions-container p-4 text-center'>
            <div className="signup-img text-center">
                <img src={question} />
            </div>
            <div className="question">
                <h2>Which is the most beatiful city of the Pakistan?</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <label>
                    <input type="radio" name="opt" required />
                    <span className="m-2">fine</span>
                </label>
                <label>
                    <input type="radio" name="opt" required />
                    <span className="m-2">fine</span>
                </label>
                <label>
                    <input type="radio" name="opt" required />
                    <span className="m-2">fine</span>
                </label>
                <label>
                    <input type="radio" name="opt" required />
                    <span className="m-2">fine</span>
                </label>
                <Button value="next" />
            </form>
        </div>
    )
}

export default Questions