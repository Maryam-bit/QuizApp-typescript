import React from 'react'
import profile from '../../img/profile.png'
import avatar from '../../img/avatar.png'
import './profile.styles.scss'
const Profile = () => {
    return (
        <div className="profile container-fluid text-center pb-4">
            <div className="signup-img text-center">
                <img src={avatar} />
            </div>
            <p className='name'>Maryam Noor</p>
            <div className="row">
                <div className="col-md-4 text-end">
                    <span>Game Played</span>
                    <h1>24</h1>
                    <span>Correct Answers</span>
                    <h1>74</h1>
                    <span>Incorrect Acswers</span>
                    <h1>66</h1>
                    {/* <p className="ml-auto">fdsfsd</p> */}
                </div>
                <div className="col-md-8 text-center">
                    fadf
                {/* <p className="mr-auto">fdsfsd</p> */}
                </div>
            </div>
        </div>
    )
}

export default Profile