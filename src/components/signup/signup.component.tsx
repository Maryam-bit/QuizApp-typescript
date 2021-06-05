import React from 'react'
import img from '../../img/register.png'
import './signup.styles.scss'
import FormInput from "../form-input/form-input.component"
import Button from "../button/button.component"
const Signup = () => {
  return (
    <div className="sign-up h-100 d-flex text-center">
      <div className="card mx-auto my-auto text-center">   {/* row justify-content-center align-self-center  */}
        <div className="signup-img text-center">
          <img src={img} />
        </div>
        <div className="form">
          <FormInput type="text" placeholder="Name" />
          <FormInput type="text" placeholder="Email" />
          <FormInput type="password" placeholder="Create password" />
         <Button />
          <p>Signed In?</p>
        </div>
      </div>
    </div>
  )
}

export default Signup;