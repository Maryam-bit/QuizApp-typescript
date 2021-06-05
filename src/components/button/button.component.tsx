import React from 'react'
import { JsxElement } from 'typescript';
import './button.styles.scss'

interface bioProps{
  value:string
}
const Button:React.FC<bioProps> = (props):JSX.Element => {
    return (
        <div className="button">
          <button className="signup btn btn-white btn-animate mt-3">{props.value}</button>
        </div>
    )
}

export default Button;