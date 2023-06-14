import React from 'react'
import './Company.css'
import logos from './Company.json'

const Company = ({logos}) => {
  return (
    <div className="logos">
        <img src={logos} alt="" />
    </div>
  )
}

export default Company