import React, {useState} from 'react'
import '../App.css';
import Header from './Header';
import Footer from './Footer';
import {Link} from 'react-router-dom';

export default function Cafe() {

  const slides = document.querySelector('.slides');

  const handleSlide1 = () => {
    
  }

  const handleSlide2 = () => {
    slides.style.transfrom = 'translate(-100vw)';
  }

  return (
    <div>
        <Header />

        <div className="header3">
          <nav>
            <ul className="sub-menu">
              <li><Link to="/">애견동반카페</Link></li>
            </ul>
          </nav>
        </div>

        <div className="main">
          <div className="slides">
            <div className="slide"></div>
            <div className="slide"></div>
          </div>
          <button className="slideBtn1" onClick={handleSlide1}>1</button>
          <button className="slideBtn2" onClick={handleSlide2}>2</button>
        </div>
        

        <Footer />
    </div>
  )
}
