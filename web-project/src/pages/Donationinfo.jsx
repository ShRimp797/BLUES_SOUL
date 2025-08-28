

import React, { useState, useEffect } from 'react';
import '../css/donationinfo.css';
import { useNavigate } from 'react-router-dom';

const Donationinfo = () => {
  const navigate = useNavigate();

  // 후원 정보 상태
  const [selectedCycle, setSelectedCycle] = useState(null);         // 정기/일시
  const [selectedAmount, setSelectedAmount] = useState(null);       // 금액
  const [selectedAmount2, setSelectedAmount2] = useState(null);     // 옵션
  const [selectedPayment, setSelectedPayment] = useState(null);     // 결제수단

  // 사용자 정보 상태
  const [userName, setUserName] = useState('');                     
  const [userPhone, setUserPhone] = useState(['', '', '']);         
  const [userEmail, setUserEmail] = useState('');                   

  // 로그인 유저 불러오기
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUserName(storedUser.name || '');
      const phoneArr = storedUser.phone ? storedUser.phone.split('-') : ['', '', ''];
      setUserPhone(phoneArr);
      setUserEmail(storedUser.email || '');
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedPayment) {
      alert("결제방법을 선택해주세요.");
      return;
    }

    // 사용자 정보 체크 (비로그인 시)
    if (!userName || !userPhone.every(p => p) || !userEmail) {
      alert("후원자 정보를 모두 입력해주세요.");
      return;
    }

    const newDonation = {
      userName,
      phone: userPhone.join('-'),
      email: userEmail,
      cycle: selectedCycle,
      amount: selectedAmount,
      option: selectedAmount2,
      paymentMethod: selectedPayment,
      date: new Date().toLocaleDateString(),
      donationNumber: 'D' + Date.now()
    };

    const existing = JSON.parse(localStorage.getItem('donationData')) || [];

    const isDuplicate = existing.some(d => 
      d.userName === newDonation.userName &&
      d.amount === newDonation.amount &&
      d.option === newDonation.option &&
      d.date === newDonation.date
    );

    if (!isDuplicate) {
      localStorage.setItem('donationData', JSON.stringify([...existing, newDonation]));
    }

    alert("후원이 완료되었습니다.");
    navigate("/Donationsuccess");
  };

  return (
    <div className="d-info">
      <div className="d-title"><h1>후원 정보</h1></div>

      <div className="money">
        <div className="m-title">
          <p>모금상품</p>
          <p>세계자연기금 후원</p>
        </div>

        <div className="m-give">
          <p>후원주기</p>
          <button className={`m-btn ${selectedCycle==='정기'?'active':''}`} onClick={()=>setSelectedCycle('정기')}>정기</button>
          <button className={`m-btn ${selectedCycle==='일시'?'active':''}`} onClick={()=>setSelectedCycle('일시')}>일시</button>
        </div>

        <div className="m-money">
          <p>후원금액</p>
          {['3,000원','10,000원','30,000원','50,000원','100,000원'].map(a=>(<button key={a} className={`m-btn ${selectedAmount===a?'active':''}`} onClick={()=>setSelectedAmount(a)}>{a}</button>))}
        </div>

        <div className="m-money">
          <p>후원옵션</p>
          {['검은머리갈매기','깨끗한 바다만들기','일반후원'].map(a=>(<button key={a} className={`m-btn ${selectedAmount2===a?'active':''}`} onClick={()=>setSelectedAmount2(a)}>{a}</button>))}
        </div>
      </div>

      {/* 사용자 정보 */}
      <div className="d-user">
        <p>후원자 정보</p>
        <p>후원하기 전 꼭 다시 한 번 확인해주세요!</p>
        <div className="user-info">

          {/* 이름 */}
          <div className="name2">
            <p>이름</p>
            {userName ? (
              <p className='name2-user-name' >{userName}</p>
            ) : (
              <input type="text" className="user-name" value={userName} onChange={e=>setUserName(e.target.value)} placeholder="" autoFocus />
            )}
          </div>

          {/* 휴대전화 */}
          <div className="number">
            <p>휴대전화</p>
            {userPhone.some(p => p) ? (
              <p className='number-user-phone' style={{marginLeft: '170px'}}>{userPhone.join('-')}</p>
            ) : (
              <div className="number-box">
                <input type="text" className="user-number" maxLength={3} value={userPhone[0]} onChange={e=>setUserPhone([e.target.value,userPhone[1],userPhone[2]])} placeholder=""/>-
                <input type="text" className="user-number" maxLength={4} value={userPhone[1]} onChange={e=>setUserPhone([userPhone[0],e.target.value,userPhone[2]])} placeholder=""/>-
                <input type="text" className="user-number" maxLength={4} value={userPhone[2]} onChange={e=>setUserPhone([userPhone[0],userPhone[1],e.target.value])} placeholder=""/>
              </div>
            )}
          </div>

          {/* 이메일 */}
          <div className="u-email">
            <p>이메일</p>
            {userEmail ? (
              <p className='u-email-user-email' style={{marginLeft: '220px'}}>{userEmail}</p>
            ) : (
              <input type="email" className="user-email" value={userEmail} onChange={e=>setUserEmail(e.target.value)} placeholder=""/>
            )}
          </div>

        </div>
      </div>

      <div className="line"></div>

      {/* 결제 정보 */}
      <div className="pay">
        <p>결제 정보</p>
        <div className="pay-btn">
          <button className={`pay-button ${selectedPayment==='카드'?'active':''}`} onClick={()=>setSelectedPayment('카드')}>신용/체크카드</button>
          <button className={`pay-button ${selectedPayment==='계좌이체'?'active':''}`} onClick={()=>setSelectedPayment('계좌이체')}>실시간 계좌이체</button>
        </div>
      </div>

      <div className="line"></div>

      <div className="submit-btn-wrapper">
        <button className="submit-btn-link" onClick={handleSubmit}><p>후원하기</p></button>
      </div>
    </div>
  );
};

export default Donationinfo;
