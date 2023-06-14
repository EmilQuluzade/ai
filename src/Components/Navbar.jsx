import React, { useRef } from 'react';
import './Navbar.css';
import Logo from './images/logo.svg';
import Button from './Button';
import { Link } from 'react-router-dom';
import { AiOutlineBars } from 'react-icons/ai';
import { GiCrossedSwords } from 'react-icons/gi';

const Navbar = () => {
  const overlayDivinRefi = useRef();

  const menyunuAc = () => {
    overlayDivinRefi.current.classList.add('aktiv');
  };

  const menyunuBagla = () => {
    overlayDivinRefi.current.classList.remove('aktiv');
  };

  return (
    <>
    


      <div className="overlay" ref={overlayDivinRefi}>
        <button onClick={menyunuBagla} className="baglama-iconu">
          <GiCrossedSwords className="x-icon" />
        </button>

        <div className="nav-links">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Services</a>
          <a href="">Blog</a>
          <a href="mailto:info@anvarkhalid.com">Contact</a>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <img src={Logo} alt="" />
          <button onClick={menyunuAc} className="navbar-toggler">
            <AiOutlineBars className="bars-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link pages" to="/">
                  Home
                </Link>
                <div className="line"></div>
              </li>
              <li className="nav-item ">
                <Link className="nav-link pages" to="/about">
                  About
                </Link>
                <div className="line"></div>
              </li>
              <li className="nav-item">
                <Link className="nav-link pages" to="/services">
                  Services
                </Link>
                <div className="line"></div>
              </li>
              <li className="nav-item">
                <Link className="nav-link pages" to="/blog">
                  Blog
                </Link>
                <div className="line"></div>
              </li>
              <li className="nav-item">
                <Link className="nav-link pages" to="/contacts">
                  Contact
                </Link>
                <div className="line"></div>
              </li>
            </ul>
            <Button buttonname="Sign in" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
