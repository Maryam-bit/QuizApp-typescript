import React from 'react'
import './register.page.scss'
import img from '../../img/register.png'
const Home = () => {
    return (

        <div className="register h-100 text-center">
            <div className=" register-img text-center">
                <img src={img} />
            </div>

            <div className="card mx-auto my-auto text-center pt-5">   {/* row justify-content-center align-self-center  */}
              <br/><br/>
              <br/><br/>
            <input type="text" placeholder="Name"
              /><br/><br/>

              <input type="text" placeholder="Email"
              /><br/><br/>

              <input type="number" placeholder="Number"
              /><br/><br/>

              <input type="password" placeholder="Create password"
              /><br/><br/>

              <button className="login">sign up</button>
              
              <p>Signed In?</p>

            </div>

        </div>


    )
}

export default Home;