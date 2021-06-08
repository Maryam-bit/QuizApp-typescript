import React from 'react'
import {Link} from 'react-router-dom'
import './tab.styles.scss'

const Tab = () => {
  return (
    <div className="tab">
      <div className="cards">
        <Link to="/category"><div className="div div1">Dashboard</div></Link>
        <Link to="/profile"><div className="div div2"> Profile</div></Link >
      </div>
    </div>
  )
}

export default Tab;