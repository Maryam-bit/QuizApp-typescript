import React, { useState } from 'react'
import img from '../../img/register.png'
import './signup.styles.scss'
// import FormInput from "../../components/form-input/form-input.component"
import Button from "../../components/button/button.component"
import { Link } from "react-router-dom"
import firebase from '../../config/firebase'
import { nanoid } from 'nanoid'

const Signup = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signup = async (e) => {
    e.preventDefault()
    try {
      const user = await firebase.auth().createUserWithEmailAndPassword(email, password)
      firebase.firestore().collection('users').doc(nanoid()).set({
        email,
        name,
      })
      alert("ypu are done")
    }
    catch (e) {
      alert(e.message)
    }
  }

  return (
    <div className="signup text-center">
      {/* // <div className="sign-up h-100 d-flex text-center">
      // <div className="card mx-auto my-auto text-center">   row justify-content-center align-self-center  */}
      <div className="signup-img text-center">
        <img src={img} />
      </div>
      <form onSubmit={signup} className="form">
        {/* <FormInput type="text" placeholder="Name"/> */}
        {/* <FormInput type="text" placeholder="Email" />
          <FormInput type="password" placeholder="Create password"/> */}
        <input type="text" placeholder="Name" onChange={e => setName(e.target.value)} />
        <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
        <Button value="sign up" />
        <Link to="/signin"><p>Already Signed Up? signin</p></Link>
      </form>
      {/* // </div>
    // </div> */}
    </div>
  )
}

export default Signup;