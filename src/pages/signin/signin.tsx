import React from 'react'
import img from '../../img/register.png'
import '../signup/signup.styles.scss'
import FormInput from "../../components/form-input/form-input.component"
import Button from "../../components/button/button.component"
import {Link} from "react-router-dom"

const Signin = () => {
  return (
    <div className="signin text-center">
        <div className="signup-img text-center">
          <img src={img} />
        </div>
        <div className="form">
          <FormInput type="text" placeholder="Email" />
          <FormInput type="password" placeholder="password" />
        <Link to="/category"> <Button value="sign in"/></Link>
          <Link to="/"><p>Don't have an account? signup</p></Link>
        </div>
        </div>
  )
}

export default Signin;