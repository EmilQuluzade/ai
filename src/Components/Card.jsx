import React from 'react'
import './Card.css'

const Card = ({heading, pic, paragraph}) => {
  return (
    <div class="card">
  <img className='cardlogo' src={pic} alt="Logo"/>
  <h2>{heading}</h2>
  <p>{paragraph}</p>
</div>

  )
}

export default Card