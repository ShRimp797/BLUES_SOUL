


import React from 'react';
import '../css/donationsuccess.css';
import { useNavigate } from 'react-router-dom';

const Donationsuccess = () => {
  const navigate = useNavigate();
  const purchaseData = JSON.parse(localStorage.getItem('orderData'));
  const donationData = JSON.parse(localStorage.getItem('donationData')) || [];
  const user = JSON.parse(localStorage.getItem('user')) || null; // 로그인 여부 확인

  const hasData = purchaseData || donationData.length > 0;

  if (!hasData) {
    return (
      <div className="done-box">
        <div className="s-title"><h1>후원 내역</h1></div>
        <p>저장된 후원 정보가 없습니다.</p>
      </div>
    );
  }

  return (
    <div className="done-box">
      <div className="s-title"><h1>후원 내역</h1></div>

      {purchaseData && (
        <div className="check">
          <div className="check-box">
            <p><strong>구매한 상품 후원</strong></p>
            <p><strong>신청일:</strong> {purchaseData.date}</p>
            <p><strong>캠페인:</strong> {purchaseData.title}</p>
            <p><strong>주문번호:</strong> {purchaseData.orderNumber}</p>
          </div>
          <button
            className="check-btn"
            onClick={() => navigate('/DNS', { state: { type: 'order', data: purchaseData } })}
          >
            자세히 보기
          </button>
        </div>
      )}

      {donationData.length > 0 && donationData.map((d,i) => (
        <div className="check" key={i}>
          <div className="check-box">
            <p><strong>후원 페이지 후원</strong></p>
            <p><strong>신청일:</strong> {d.date}</p>
            <p><strong>캠페인:</strong> {d.option}</p>
            <p><strong>후원번호:</strong> {d.donationNumber}</p>
          </div>
          <button
            className="check-btn"
            onClick={() => navigate('/DNS', { state: { type: 'donation', data: d } })}
          >
            자세히 보기
          </button>
        </div>
      ))}

    </div>
  );
};

export default Donationsuccess;
