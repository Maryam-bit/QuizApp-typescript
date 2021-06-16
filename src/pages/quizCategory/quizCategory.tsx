import React, {useContext} from 'react'
import img from '../../img/category.png'
import computer from '../../img/compoter.png'
import geography from '../../img/geography.jpg'
import math from '../../img/math.png'
// import Button from '../../components/button/button.component'
import { Link } from 'react-router-dom'
import './quizCategory.scss'
import { Quizcategory } from '../../config/context'

const QuizCategory = () => {
  const [category, setcategory] = useContext(Quizcategory)
    let geographyQuiz = 22;
    let computerQuiz = 18;
    let mathemeticsQuiz = 19;
    // const category = [
    //     {
    //         id: 1,
    //         name: 'computer',
    //         imageUrl: 'https://ibb.co/VC7nXqJ',
    //     },
    //     {
    //         id: 2,
    //         name: 'geography',
    //         imageUrl: 'https://ibb.co/Qb5dDSs',
    //     },
    //     {
    //         id: 3,
    //         name: 'mathemetics',
    //         imageUrl: 'https://ibb.co/FWw6D0f'
    //     },
    // ]
    
    const onComputerClick= ()=>{
        setcategory(computerQuiz)
    }
    const onMathemeticsClick= ()=>{
        setcategory(mathemeticsQuiz)
    }
    const onGeographyClick= ()=>{
        setcategory(geographyQuiz)
    }

    return (
        <div className="quiz-category container pb-4 text-center">
            <div className="signup-img text-center">
                <img src={img} alt='' />
            </div>
            <h2>Welcome to quizoO</h2>
            <p className='text'>Choose one from the categories below and see how many questions you can answer correctly out of 10 questions!</p>
            {/* <div className="row">
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
            </div> */}
            <div className="row mt-3">
                <div className="col-md-1"></div>
                <div className="category-1 col-md-2 categoryy text-center " onClick={onComputerClick}>
                    <Link to='/questions'>
                        <img src={computer} alt="" />
                        <p>Computer</p>
                    </Link>
                </div>

                <div className="col-md-2"></div>
                <div className="category-2 col-md-2 categoryy text-center"  onClick={onGeographyClick}>
                    <Link to='/questions'>
                        <img src={geography} alt="" />
                        <p>Geography</p>
                    </Link>
                </div>
                <div className="col-md-2"></div>
                <div className="category-3 col-md-2 categoryy text-center"  onClick={onMathemeticsClick}>
                    <Link to='/questions'>
                        <img src={math} alt="" />
                        <p>Mathemetics</p>
                    </Link>
                </div>
                <div className="col-md-1"></div>
            </div>
            {/* <Button value='next' /> */}
        </div>
    )
}
export default QuizCategory