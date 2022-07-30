import React from 'react'
import '../App.css';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';

export default function Header() {
    
   return (

    <div>
        
            <header>
                <div className="header1">
                    <nav>
                        <ul className="top-menu">
                            <li><Link to="/">즐겨찾기</Link></li>
                            <li><Link to="/">로그인</Link></li>
                            <li><Link to="/">회원가입</Link></li>
                        </ul>
                    </nav>
                </div>

                <div className="header2">
                    <h2 className="myLogo"><Link to="/">함께해요</Link></h2>

                    <nav>
                        <ul className="main-menu">
                            <li><Link to="/">커뮤니티</Link></li>
                            <li><Link to="/cafe">애견동반카페</Link></li>
                        </ul>
                    </nav>
                </div>

                
            </header>
        
    </div>
  )
}
