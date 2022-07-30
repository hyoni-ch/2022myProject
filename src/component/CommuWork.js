import React from 'react'
import './CommuWork.css';
import Footer from './Board';
import {Link} from 'react-router-dom';

export default function CommuWork() {
  return (
    <div>
      <div><Link to="/Board">글쓰기</Link></div>
    </div>
  )
}
