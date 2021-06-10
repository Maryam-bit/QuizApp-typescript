import React, { useState } from 'react'
import img from '../../img/register.png'
import '../signup/signup.styles.scss'
// import FormInput from "../../components/form-input/form-input.component"
import Button from "../../components/button/button.component"
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom"
import firebase from '../../config/firebase'

const Signin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()
  console.log(email)
  const signin = async(e) => {
    e.preventDefault()
    try {
      console.log('afef')
     await firebase.auth().signInWithEmailAndPassword(email, password)
      history.replace('/category')
      alert("ypu are done")
    }
    catch (e) {
      alert(e.message)
    }
  }
  return (
    <div className="signin text-center">
      <div className="signup-img text-center">
        <img src={img} />
      </div>
      <form onSubmit={signin} className="form">
        {/* <FormInput type="text" placeholder="Email" />
          <FormInput type="password" placeholder="password" /> */}
        <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
        <Button value="sign in" />
        <Link to="/"><p>Don't have an account? signup</p></Link>
      </form>
    </div>
  )
}

export default Signin;