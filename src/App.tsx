import React, { useEffect, useState } from 'react';
import { QuizServices } from './services/quizServices';
import { questionTypes } from './types/quizTypes'
import { QuestionContext, Score, Quizcategory, ShowResult, RequestApi } from './config/context'
import Questions from './components/questions/questions';
import Result from './components/result/result';
import QuizCategory from './components/quizCategory/quizCategory';
import './App.css';


function App() {
  const [quiz, setquiz] = useState<questionTypes[]>([])
  const [score, setScore] = useState(0)
  const [category, setcategory] = useState(0)
  const [showResult, setShowResult] = useState(false);
  const [reqApi, setreqApi] = useState(false);


  useEffect(() => {
    if (reqApi == true) {
      const fetchData = async () => {
        const questions: questionTypes[] = await QuizServices(10, category, 'easy')
        setquiz(questions)
      }
      fetchData()
    }
  }, [reqApi])


  return (
    <QuestionContext.Provider value={[quiz, setquiz]}>
      <Score.Provider value={[score, setScore]}>
        <Quizcategory.Provider value={[category, setcategory]}>
          <ShowResult.Provider value={[showResult, setShowResult]}>
            <RequestApi.Provider value={[reqApi, setreqApi]}>
              <div className="container-fluid app">
                <div className="app-child h-100 d-flex ">
                  <div className="card mx-auto my-auto">
                    {quiz.length ?
                      (!showResult ?
                        (<Questions />)
                        :
                        (<Result />)
                      )
                      : (<QuizCategory />)
                    }
                  </div>
                </div>
              </div>
            </RequestApi.Provider>
          </ShowResult.Provider>
        </Quizcategory.Provider>
      </Score.Provider>
    </QuestionContext.Provider>
  );
}

export default App;