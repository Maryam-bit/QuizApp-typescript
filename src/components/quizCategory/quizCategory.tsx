import React, { useContext, useState } from 'react'
import img from '../../img/category.png'
import computer from '../../img/compoter.png'
import geography from '../../img/geography.jpg'
import math from '../../img/math.png'
import './quizCategory.scss'
import '../../components/style-img.component.scss'
import { Quizcategory, RequestApi } from '../../config/context'
import Loading from '../../components/loading/loading'

const QuizCategory = () => {
    const [category, setcategory] = useContext(Quizcategory)
    const [reqApi, setreqApi] = useContext(RequestApi);
    let geographyQuiz = 22;
    let computerQuiz = 18;
    let mathemeticsQuiz = 9;
    
    if (reqApi) {
        return <Loading />
    }

    const onComputerClick = () => {
        setcategory(computerQuiz)
        setreqApi(true);
    }
    const onGeographyClick = () => {
        setcategory(geographyQuiz)
        setreqApi(true);
    }
    const onMathemeticsClick = () => {
        setcategory(mathemeticsQuiz)
        setreqApi(true);
    }

    return (
        <div className="quiz-category container pb-4 text-center">
            <div className="signup-img text-center">
                <img src={img} alt='' />
            </div>
            <h2>Welcome to quizoO</h2>
            <p className='text'>Choose one from the categories below and see how many questions you can answer correctly out of 10 questions!</p>
        
            <div className="row mt-3">
                <div className="col-md-1"></div>
                <div className="category-1 col-md-2 categoryy text-center " onClick={onComputerClick}>
                    <img src={computer} alt="" />
                    <p>Computer</p>
                </div>

                <div className="col-md-2"></div>
                <div className="category-2 col-md-2 categoryy text-center" onClick={onGeographyClick}>
                    <img src={geography} alt="" />
                    <p>Geography</p>
                </div>
                <div className="col-md-2"></div>
                <div className="category-3 col-md-2 categoryy text-center" onClick={onMathemeticsClick}>
                    <img src={math} alt="" />
                    <p>Mathemetics</p>
                </div>
                <div className="col-md-1"></div>
            </div>
        </div>
    )
}
export default QuizCategory