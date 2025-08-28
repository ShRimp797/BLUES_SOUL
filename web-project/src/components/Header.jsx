

import React, { useState } from 'react';
import '../css/header.css';
import { Link, useNavigate } from 'react-router-dom';

const Header = ({ user, setUser }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
   localStorage.removeItem('user');
  localStorage.removeItem('donationData');
  localStorage.removeItem('orderData');
  localStorage.removeItem('cartProduct');
    setUser(null);                  // 상태 초기화
    navigate('/');                  // 메인페이지 이동
  };

  return (
    <div className='header'>
      <nav className="menu">
        <Link to="/"><img src="/img/logo2.png" alt="logo" /></Link>
        <Link to="/Shop" className="link">SHOP</Link>
        <Link to="/Story" className="link">STORY</Link>
        <Link to="/Campaign" className="link">CAMPAIGN</Link>
        <Link to="/Donation" className="Donation">후원하기</Link>
      </nav> 

      {/* <nav className="user">
        {user ? (
          <div 
            className="dropdown" 
            onMouseEnter={() => setDropdownOpen(true)} 
            onMouseLeave={() => setDropdownOpen(false)}
            style={{ position: 'relative', display: 'inline-block' }}
          >
            <span className='link2'>{user.name}님 환영합니다 ▾</span>
            
            {dropdownOpen && (
              <div 
                className="dropdown-menu" 
                style={{
                  position: 'absolute',
                  top: '30px',
                  right: '0',
                  backgroundColor: '#fff',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  padding: '10px',
                  minWidth: '120px',
                  zIndex: 100
                }}
              >
                <button 
                  onClick={handleLogout} 
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    width: '100%',
                    textAlign: 'left',
                    padding: '5px 0'
                  }}
                >
                  로그아웃
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link to="/Login" className='link2'>로그인 / 회원가입</Link>
        )}

        <Link to="/Cart2" className='link2'>장바구니</Link>
        <Link to="/Mypage" className='link2'>마이페이지</Link>
      </nav>  */}


        <nav className="user">
  {user ? (
    <>
      <div 
        // className="dropdown" 
        // onMouseEnter={() => setDropdownOpen(true)} 
        // onMouseLeave={() => setDropdownOpen(false)}
        // style={{ position: 'relative', display: 'inline-block' }}

        className="dropdown" 
    onClick={() => setDropdownOpen(prev => !prev)} // 클릭하면 토글
    style={{ position: 'relative', display: 'inline-block', cursor: 'pointer' }}



      >
       <span className='link2'>{user.name}님 환영합니다 ▾</span>
  
  {dropdownOpen && (
    <div 
      className="dropdown-menu" 
      style={{
        position: 'absolute',
        top: '30px',
        right: '0',
        backgroundColor: '#fff',
        border: '1px solid #ccc',
        borderRadius: '5px',
        padding: '10px',
        minWidth: '120px',
        zIndex: 100
      }}
    >
      <button 
        onClick={handleLogout} 
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          width: '100%',
          textAlign: 'left',
          padding: '5px 0'
        }}
      >
        로그아웃
      </button>
    </div>
  )}
</div>

      <Link to="/Cart2" className='link2'>장바구니</Link>
      {/* 로그인했을 때만 마이페이지 보이도록 */}
      <Link to="/Mypage" className='link2'>마이페이지</Link>
    </>
  ) : (
    <>
      <Link to="/Login" className='link2'>로그인 / 회원가입</Link>
      <Link to="/Cart2" className='link2'>장바구니</Link>
      {/* 마이페이지는 로그인 전엔 숨김 */}
    </>
  )}
</nav>













    </div>
  );
};

export default Header;
