import React from 'react'
import profile from '../../img/profile.png'
import avatar from '../../img/avatar.png'
import './profile.styles.scss'
import ProgressBar from 'react-animated-progress-bar';

const Profile = () => {
    return (
        <div className="profile container-fluid text-center pb-4">
            <div className="signup-img text-center">
                <img src={profile} alt="" />
            </div>
            <p className='name'>Maryam Noor</p>
            <div className="row">
                <div className="col-md-8 text-end">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6">
                                <span>Game Played</span>
                                <h1>24</h1>
                                <span>Correct Answers</span>
                                <h1>74</h1>
                                <span>Incorrect Acswers</span>
                                <h1>66</h1>
                            </div>
                            <div className="col-md-6">
                                <ProgressBar
                                    width="400"
                                    fontColor="#ef645b"
                                    trackBorderColor="#e6e6e6"
                                    trackPathColor="#e6e6e6"
                                    trackWidth="13"
                                    percentage="60"
                                    defColor={{
                                        fair: '#6573EB',
                                        good: '#6573EB',
                                        excellent: '#6573EB',
                                        poor: '#6573EB',
                                    }} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 userData text-start">
                    <img src={avatar} alt='' />
                    <p className='userName'>Maryam Noor</p>
                    <p className="emai">Maryam@gmail.com</p>
                </div>
            </div>
        </div>
    )
}

export default Profile