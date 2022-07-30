import React from 'react';
import '../App.css';
import Header from './Header';
import Footer from './Footer';
import {Link} from 'react-router-dom';

function Commu() {
    return (
        
        <div>
            
                <Header />

                <div className="header3">
                    <nav>
                        <ul className="sub-menu">
                            <li><Link to="/work">산책해요</Link></li>
                            <li><Link to="/">궁금해요</Link></li>
                            <li><Link to="/">추억해요</Link></li>
                        </ul>
                    </nav>
                </div>
                
                <div className="main">
                    <div className="main-img1">
                    <h1>함께해요에 오신 걸 환영합니다.</h1>
                    </div>
                    <div className="main-img2">
                    <h3><Link to="/">자세히 보기</Link></h3>
                    </div>
                </div>

                <Footer />
            

        </div>
    );
}

export default Commu;