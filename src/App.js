import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import Introduction from './Components/Introduction';
import 'bootstrap/dist/css/bootstrap.min.css';
import CompanyContainer from './Components/CompanyContainer';
import Middle from './Components/Middle';
import Cards from './Components/Cards.jsx';
import Solution from './Components/Solution';
import Footer from './Components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home.jsx';
import About from './Components/About';
import Services from './Components/Services';
import Blogs from './Components/Blogs'
import Contacts from './Components/Contacts';

function App() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, []);

  return (
    <>
      {loader ? (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<Blogs />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
