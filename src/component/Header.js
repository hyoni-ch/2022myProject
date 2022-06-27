import React from 'react'
import '../App.css';

export default function Header() {
    
   return (
    <div>
        <header>
            <div className="header1">
                <nav>
                    <ul className="top-menu">
                        <li><a href="#">즐겨찾기</a></li>
                        <li><a href="#">로그인</a></li>
                        <li><a href="#">회원가입</a></li>
                    </ul>
                </nav>
            </div>

            <div className="header2">
                <h2 className="myLogo"><a href="#">함께해요</a></h2>

                <nav>
                    <ul className="main-menu">
                        <li><a href="#">커뮤니티</a></li>
                        <li><a href="#">애견동반카페</a></li>
                    </ul>
                </nav>
            </div>

            
        </header>
    </div>
  )
}
