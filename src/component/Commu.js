import React from 'react';
import '../App.css';
import Header from './Header';
import Footer from './Footer';

function Commu() {
    return (
        <div>
            <Header />

            <div className="header3">
                <nav>
                    <ul className="sub-menu">
                        <li><a href="#">산책해요</a></li>
                        <li><a href="#">궁금해요</a></li>
                        <li><a href="#">추억해요</a></li>
                    </ul>
                </nav>
            </div>
            
            <div className="main">
                <div className="main-img1">
                <h1>함께해요에 오신 걸 환영합니다.</h1>
                </div>
                <div className="main-img2">
                <h3><a href="#">자세히 보기</a></h3>
                </div>
            </div>

            <Footer />

        </div>
    );
}

export default Commu;