import React from 'react'
import Signup from '../pages/signup/signup'
import Signin from '../pages/signin/signin'
import QuizCategory from '../pages/quizCategory/quizCategory'
import Questions from '../pages/questions/questions'
import Result from '../pages/result/result'
import Profile from '../pages/profile/profile'
import { Route, Switch, Redirect } from "react-router-dom";
// const currentPath = window.location.pathname.length === 1 ? '/' : window.location.pathname

const AppRouter = ({ isloggedin }) => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Signup} />
                <Route path="/signin" component={Signin} />
                <Route path="/profile">
                    {AuthChecker(isloggedin, <Profile />)}
                </Route>

                <Route path="/category" component={QuizCategory}>
                    {AuthChecker(isloggedin, <QuizCategory />)}
                    {/* {isloggedin ? <Redirect to='/cactegory' /> : <Signin />} */}
                </Route>

                <Route path="/questions">
                    {AuthChecker(isloggedin, <Questions />)}
                </Route>

                <Route path="/result">
                    {AuthChecker(isloggedin, <Result />)}
                </Route>
                {/* <Route exact path="/profile" component={Profile} /> */}
                {/* <Route path="/category" component={QuizCategory} /> */}
                {/* <Route path="/questions" component={Questions} /> */}
                {/* <Route path="/result" component={Result} /> */}
            </Switch>
        </div>
    )
}

function AuthChecker(isloggedin, component) {
    return isloggedin ? component : "please login fisrt"
}
export default AppRouter;