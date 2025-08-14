//수정

import React, { useState } from 'react';
import '../css/donationinfo.css';
import { useNavigate } from 'react-router-dom';

const Donationinfo = () => {
  const [selectedCycle, setSelectedCycle] = useState(null);         // 정기/일시
  const [selectedAmount, setSelectedAmount] = useState(null);       // 금액
  const [selectedAmount2, setSelectedAmount2] = useState(null);     // 캠페인
  const [selectedPayment, setSelectedPayment] = useState(null);     // 결제수단
  const [selectedDon, setSelectedDon] = useState(null);             // 결제수단(사용처 불명)

  const navigate = useNavigate();

const handleSubmit = (e) => {
  e.preventDefault();

  // 결제수단 선택 여부 확인
  if (!selectedPayment) {
    alert("결제방법을 선택해주세요.");
    return; // 뒤로 안 넘어감
  }

  alert("후원이 완료되었습니다.");
  navigate("/DonationCheck");
};


  return (
    <>
      <div className="d-info">
        <div className="d-title">
          <h1>후원 정보</h1>
        </div>

        <div className="money">
          <div className="m-title">
            <p>모금상품</p>
            <p>세계자연기금 후원</p>
          </div>

          {/* 후원주기 */}
          <div className="m-give">
            <p>후원주기</p>
            <button
              className={`m-btn ${selectedCycle === '정기' ? 'active' : ''}`}
              onClick={() => setSelectedCycle('정기')}
            >
              정기
            </button>
            <button
              className={`m-btn ${selectedCycle === '일시' ? 'active' : ''}`}
              onClick={() => setSelectedCycle('일시')}
            >
              일시
            </button>
          </div>

          {/* 후원금액 */}
          <div className="m-money">
            <p>후원금액</p>
            {['3,000원', '10,000원', '30,000원', '50,000원', '100,000원'].map(amount => (
              <button
                key={amount}
                className={`m-btn ${selectedAmount === amount ? 'active' : ''}`}
                onClick={() => setSelectedAmount(amount)}
              >
                {amount}
              </button>
            ))}
          </div>

          {/* 캠페인 */}
          <div className="m-money">
            <p>후원옵션</p>
            {['검은머리갈매기', '깨끗한 바다만들기', '일반후원'].map(amount2 => (
              <button
                key={amount2}
                className={`m-btn ${selectedAmount2 === amount2 ? 'active' : ''}`}
                onClick={() => setSelectedAmount2(amount2)}
              >
                {amount2}
              </button>
            ))}
          </div>
        </div>

        <div className="d-user">
          <p>후원자 정보</p>
          <p>후원하기전 꼭 다시한번 확인해주세요!</p>

          <div className="user-info">
            <div className="name2">
              <p>이름</p>
              <input type="text" className="user-name" id="user-name" autoFocus />
            </div>

            <div className="number">
              <p>휴대전화</p>
              <div className="number-box">
                <input type="text" className="user-number" maxLength={3} />-
                <input type="text" className="user-number" maxLength={4} />-
                <input type="text" className="user-number" maxLength={4} />
              </div>
            </div>

            <div className="u-email">
              <p>이메일</p>
              <input type="email" className="user-email" id="user-email" />
            </div>
          </div>
        </div>

        <div className="line"></div>

        {/* 결제 정보 */}
        <div className="pay">
          <p>결제 정보</p>
          <div className="pay-btn">
            <button
              className={`pay-button ${selectedPayment === '카드' ? 'active' : ''}`}
              onClick={() => setSelectedPayment('카드')}
            >
              신용/체크카드
            </button>
            <button
              className={`pay-button ${selectedPayment === '계좌이체' ? 'active' : ''}`}
              onClick={() => setSelectedPayment('계좌이체')}
            >
              실시간 계좌이체
            </button>
          </div>
        </div>

        <div className="line"></div>

        {/* 후원하기 버튼 */}
        <div className="submit-btn-wrapper">
          <button className="submit-btn-link" onClick={handleSubmit}>
            <p>후원하기</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default Donationinfo;
