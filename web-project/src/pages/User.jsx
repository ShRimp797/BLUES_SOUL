

// 수정

import React, { useState, useEffect } from 'react';
import '../css/user.css';
import { useNavigate } from 'react-router-dom';

 
console.log(localStorage.getItem('user'));

const User = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: '',
    phone: '',
    birth: '',
    email: ''
  });

  const [formData, setFormData] = useState({
    password: '',
    passwordConfirm: '',
    postcode: '',
    address: '',
    detailAddress: ''
  });

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser({
        name: parsedUser.name || '',
        phone: parsedUser.phone || '',
        birth: parsedUser.birth || '',
        email: parsedUser.email || ''
      });
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // const handleUpdate = () => {
  //   alert("수정이 완료되었습니다.");
  //   navigate("/Mypage");
  // };


const handleUpdate = () => {
  const name = document.querySelector('.U-name-N').textContent.trim();
  const phone = document.querySelector('.U-number-phone').textContent.trim();
  const birth = document.querySelector('.U-number-birth').textContent.trim();
  const email = document.querySelector('.U-email-A').textContent.trim();
  const password = document.querySelector('.U-pw-1').value.trim();
  const post = document.querySelector('.Upost').value.trim();
  const address = document.querySelector('.address').value.trim();

  if (!name || !phone || !birth || !email || !password || !post || !address) {
    alert('정보를 입력해 주세요.');
    return;
  }

  alert('수정 완료!');
  navigate('/'); // 홈으로 이동
};


  return (
    <div className="U-j">
      <h1>회원정보</h1>
      <div className="U-info">

        {/* 이름 */}
        <div className="U-name">
          
            <p>이름</p>
            <p className='U-name-N'>{user.name}</p>
          
        </div>

        {/* 휴대전화 */}
        <div className="U-number">
          <p>휴대전화</p>
          <p className='U-number-phone'>{user.phone}</p>
        </div>

        {/* 생년월일 */}
        <div className="U-number">
          <p>생년월일</p>
          
          <p className='U-number-birth'>{user.birth}</p>
        </div>

        {/* 이메일 */}
        <div className="U-email">
          <p>이메일</p>
          <p className='U-email-A'>{user.email}</p>
        </div>

        {/* 비밀번호 */}
        <div className="U-password-1">
          <p>비밀번호</p>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="U-pw-1"
          />
        </div>

        <div className="U-password-1">
          <p>비밀번호 확인</p>
          <input
            type="password"
            name="passwordConfirm"
            value={formData.passwordConfirm}
            onChange={handleChange}
            className="U-pw-1"
          />
        </div>

        {/* 주소 */}
        <div className="U-post">
          <p>우편번호</p>
          <input
            type="text"
            name="postcode"
            value={formData.postcode}
            onChange={handleChange}
            className="Upost"
          />
        </div>

        <div className="U-address">
          <p>주소</p>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="address"
          />
        </div>

        <div className="U-address">
          <p>상세주소</p>
          <input
            type="text"
            name="detailAddress"
            value={formData.detailAddress}
            onChange={handleChange}
            className="address"
          />
        </div>

      </div>

      <div className="submit-btn-wrapper2-1">
        <button className="submit-btn-link2-1" onClick={handleUpdate}>
          수정완료
        </button>
      </div>
    </div>
  );
}

export default User;

