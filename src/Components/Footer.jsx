import React from 'react'
import './Footer.css'
import logo from './images/logo1.svg'
import mail from './images/mail.svg'
import phone from './images/phonefooter.svg'
import map from './images/map.svg'
import socials from './images/socials.svg'
import world from './images/world.svg'


const Footer = () => {
  return (
    <div className="footer">
        <div className="row1 fun">
<img src={logo} alt="" />
<p className=''>Lorem ipsum is placeholder text <br/> commonly used in the graphic, print, and <br/> layouts and visual mockups.</p>
<div className="mail small">
    <img src={mail} alt="" />
    <span className='spans'>Company@gmail.com.com</span>
</div>
<div className="phone small">
    <img src={phone} alt="" />
    <span className='spans'>Phone: (064) 332-1233</span>
</div>
<div className="map small">
    <img src={map} alt="" />
    <span className='spans'>450 Wall Street, USA, New York</span>
</div>
        </div>
        <div className="row2 fun">
<h5>INFORMATION</h5>
<p>New Collection</p>
<p>About Store</p>
<p>Contact Us</p>
<p>Latest News</p>
<p>Latest News</p>
<p>Orders History</p>
        </div>
        <div className="row3 fun">
<h5>INFORMATION</h5>
<p>Instagram profile</p>
<p>New Collection</p>
<p>Contact Us</p>
<p>Latest News</p>
<p>Terms & Conditions</p>
<p>Purchase Theme</p>
        </div>
        <div className="row4 fun">
<h5>USEFUL LINKS</h5>
<p>Instagram profile</p>
<p>New Collection</p>
<p>Contact Us</p>
<p>Latest News</p>
<p>Terms & Conditions</p>
<p>Purchase Theme</p>
        </div>
        <div className="row5 fun">
<h5>ABOUT THE STORE</h5>
<p>Lorem ipsum is placeholder text <br/> commonly used in the graphic, print, and <br/> layouts and visual mockups.</p>
<a href="">www.company.com</a>
<img src={socials} alt="" />
<div className="last">
<img className='world' src={world} alt="" />
<span className='text-white'>English</span>
</div>
        </div>
    </div>
  )
}

export default Footer