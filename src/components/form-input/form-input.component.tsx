import React from 'react'
import './form-input.styles.scss'

interface bioProps {
    type:string,
    placeholder:string,
}
const FormInput: React.FC<bioProps> = (props):JSX.Element => {
    return (
        <div className="form-input">
            <input type={props.type} placeholder={props.placeholder} />
        </div>
    )
}

export default FormInput