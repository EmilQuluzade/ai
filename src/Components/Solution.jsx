import React from 'react'
import './Solution.css'
import solutionimage from './images/solution.svg'

const Solution = () => {
  return (
    <>
    <div className="solution">
        <div className="left object">
<h3 className='text-white'>What our clients say about <br/> our awesome solutions</h3>
<p>To take a trivial example, which of us ever undertakes <br/> laborious physical exercise, except to obtain some <br/> advantage from it who do not know.</p>
<p>Lorem ipsum is placeholder text commonly used in the <br/>  graphic, print, and publishing .</p>
<p>Lorem ipsum is placeholder previewing layouts and visual <br/> mockups.</p>
<p> Lorem ipsum is placeholder text commonly used in the <br/> graphic, print, and publishing industries for previewing <br/> layouts and visual mockups.</p>
        </div>
        <img className='object' src={solutionimage} alt="" />
    </div>
    </>
  )
}

export default Solution