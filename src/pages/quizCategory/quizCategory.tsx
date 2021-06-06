import React from 'react'
import img from '../../img/category.png'
import computer from '../../img/computer.webp'
import Button from '../../components/button/button.component'
import './quizCategory.scss'
const QuizCategory = () => {
    return (
        <div className="quiz-category container pb-3">
            <div className="signup-img text-center">
                <img src={img} />
            </div>
            <p className='text'>Choose one from the categories below and see how many questions you can answer correctly out of 10 questions!</p>
            <div className="row">
                <div className="col-md-1"></div>
                <div className="category1 col-md-2 category">
                    <p>Computer</p>
                </div>
                <div className="col-md-2"></div>
                <div className="category2 col-md-2 category">
                    <p>Geography</p>
                </div>
                <div className="col-md-2"></div>
                <div className="category3 col-md-2 category">
                    <p>Mathemetics</p>
                </div>
                <div className="col-md-1"></div>
            </div>
            <br />
            <Button value='next' />
        </div>
    )
}
export default QuizCategory