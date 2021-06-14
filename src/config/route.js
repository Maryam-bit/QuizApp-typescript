import React from 'react'
import Signup from '../pages/signup/signup'
import Signin from '../pages/signin/signin'
import QuizCategory from '../pages/quizCategory/quizCategory'
import Questions from '../pages/questions/questions'
import Result from '../pages/result/result'
import Profile from '../pages/profile/profile'
import { Route, Switch } from "react-router-dom";

const AppRouter = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Signup} />
                <Route exact path="/profile" component={Profile} />
                <Route path="/signin" component={Signin} />
                <Route path="/category" component={QuizCategory} />
                <Route path="/questions" component={Questions} />
                <Route path="/result" component={Result} />
            </Switch>
        </div>
    )
}

export default AppRouter;