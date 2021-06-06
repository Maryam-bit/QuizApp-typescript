import React from 'react'
import img from '../../img/register.png'
import './signup.styles.scss'
import FormInput from "../../components/form-input/form-input.component"
import Button from "../../components/button/button.component"
import {Link} from "react-router-dom"

const Signup = () => {
  return (
    <>
    {/* // <div className="sign-up h-100 d-flex text-center">
      // <div className="card mx-auto my-auto text-center">   row justify-content-center align-self-center  */}
        <div className="signup-img text-center">
          <img src={img} />
        </div>
        <div className="form">
          <FormInput type="text" placeholder="Name" />
          <FormInput type="text" placeholder="Email" />
          <FormInput type="password" placeholder="Create password" />
         <Button value="sign up" />
          <Link to="/signin"><p>Already Signed Up? signin</p></Link>
        </div>
      {/* // </div>
    // </div> */}
    </>
  )
}

export default Signup;