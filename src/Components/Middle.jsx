import React from 'react'
import phone from './images/phone.svg'
import './Middle.css'
import Button from './Button'


const Middle = () => {
  return (
    <div className="middle">
      <div className="middle-left">
        <img src={phone} alt="" />
      </div>
      <div className="middle-right">
        <h2 className='middleh2 text-white'>Apply AI, Deep Learning <br /> and Data Sciece to solve</h2>
        <p className='text-white'>Lorem ipsum is placeholder text commonly used in the <br /> graphic, print, and publishing industries for previewing <br /> layouts and visual mockups.</p>
      <Button buttonname="Learn More"/>
      </div>
    </div>
  )
}

export default Middle