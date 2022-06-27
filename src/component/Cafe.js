import React from 'react'
import '../App.css';
import Header from './Header';
import Footer from './Footer';

export default function Cafe() {
  return (
    <div>
        <Header />

        <div className="header3">
                <nav>
                    <ul className="sub-menu">
                        <li><a href="#">애견동반카페</a></li>
                    </ul>
                </nav>
            </div>


        <Footer />
    </div>
  )
}
