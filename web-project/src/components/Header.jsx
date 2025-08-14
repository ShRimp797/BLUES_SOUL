import React from 'react'
import '../css/header.css';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className='header'>
        
        <nav className="menu">
            <Link to="/"><img src="/img/logo2.png"  alt="logo" /></Link>
          <Link to ="/Shop" className="link">SHOP</Link>
          <Link to ="/Story" className="link">STORY</Link>
          <Link to ="/Campaign" className="link">CAMPAIGN</Link>
          <Link to ="/Donation" className="Donation">후원하기</Link>
        </nav> 
        <nav className="user">
          <Link to="/Login" className='link2'>로그인 / 회원가입</Link>
          <Link to="/Cart2" className='link2'>장바구니</Link>
          <Link to="/Mypage" className='link2'>마이페이지</Link>
          {/* <Link to="/Receipt" className='link2'>주문내역</Link>
          <Link to="/donationsuccess" className='link3'>기부내역</Link> */}
        </nav> 
    </div>
  )
}

export default Header