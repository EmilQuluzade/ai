import React from 'react'
import './Button.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const Button = ({buttonname}) => {
  return (
    <button className="btn btn-primary">{buttonname}</button>
  )
}

export default Button