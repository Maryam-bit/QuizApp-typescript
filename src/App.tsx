import React from 'react';
import logo from './logo.svg';
import './App.css';
import Signup from './pages/signup/signup'
import Signin from './pages/signin/signin'
import QuizCategory from './pages/quizCategory/quizCategory'
import Questions from './pages/questions/questions'
import { Route, route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="container-fluid app">
      <div className="app-child h-100 d-flex">

      <div className="card mx-auto my-auto">
        <Switch>
          <Route exact path="/" component={Signup} />
          <Route path="/signin" component={Signin} />
          <Route path="/category" component={QuizCategory} />
          <Route path="/questions" component={Questions} />
        </Switch>
      
      </div>
    </div>
    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='svg'>
        <path fill="#00cba9" fill-opacity="1" d="M0,192L80,202.7C160,213,320,235,480,208C640,181,800,107,960,64C1120,21,1280,11,1360,5.3L1440,0L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
      </svg> */}
    </div>

  );
}

export default App;