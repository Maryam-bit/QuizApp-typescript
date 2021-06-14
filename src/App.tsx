import React, { useEffect, useState } from 'react';
import './App.css';
import Tab from './components/tab/tab'
import { useLocation } from 'react-router-dom';
import { QuizServices } from './services/quizServices';
import { questionTypes } from './types/quizTypes'
import AppRouter from './config/route'
import { QuestionContext, Score } from './config/context'

function App() {
  const [quiz, setquiz] = useState<questionTypes[]>([])
  const [score, setScore] = useState(0)
  const location = useLocation();
  let path = location.pathname

  useEffect(() => {
    const fetchData = async () => {
      const questions: questionTypes[] = await QuizServices(10, 18, 'easy')
      setquiz(questions)
      console.log(questions)
    }
    fetchData()
  }, [])

  return (
    <QuestionContext.Provider value={quiz}>
      <Score.Provider value={[score, setScore]}>
        <div className="container-fluid app">
          <div className="app-child h-100 d-flex ">
            <div className="card mx-auto my-auto">
              <AppRouter />
            </div>
            {path === '/' ? null : path === '/signin' ? null : <Tab />}
          </div>
          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='svg'>
        <path fill="#00cba9" fill-opacity="1" d="M0,192L80,202.7C160,213,320,235,480,208C640,181,800,107,960,64C1120,21,1280,11,1360,5.3L1440,0L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
      </svg> */}
        </div>
      </Score.Provider>
    </QuestionContext.Provider>
  );
}

export default App;