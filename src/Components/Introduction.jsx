import React from 'react';
import './Introduction.css';
import Rocket from './images/rocket.svg';
import Button from './Button';

const Introduction = () => {
    return (
        <div className="body">
            <div className="left">
                <h5 className='h5'>Next generation platform</h5>
                <h2 className='text-white h2'>Artificial intelligence <br /> & Cyber security</h2>
                <p className='text-white p'>Lorem ipsum is placeholder text commonly used in the graphic, <br />
                    print, and publishing industries for previewing layouts and <br />
                    visual mockups.</p>
                <Button buttonname="Get Started" />
                <Button buttonname="Watch Video" />
            </div>
            <div className="right">
                <img src={Rocket} alt="" />
            </div>
        </div>
    );
};

export default Introduction;
