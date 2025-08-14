
import React from 'react';
import '../css/donationsuccess.css';
import { Link } from 'react-router-dom';

const Donationsuccess = () => {
  const orderData = JSON.parse(localStorage.getItem('orderData'));

  if (!orderData) {
    return (
      <div className="done-box">
        <div className="s-title">
          <h1>후원 내역</h1>
        </div>
        <p>저장된 후원 정보가 없습니다.</p>
        <Link to="/">
          <button className="order-btn">홈으로 가기</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="done-box">
      <div className="s-title">
        <h1>후원 내역</h1>
      </div>

      <div className="check">
        <div className="check-box">
          <p><strong>신청일:</strong> {orderData.date}</p>
          <p><strong>캠페인:</strong> {orderData.title}</p>
          <p><strong>기부번호:</strong> {orderData.orderNumber}</p>
        </div>
        <Link to="/DNS"><button className="check-btn">자세히 보기</button></Link>
      </div>

                <Link to="/" className="submit-btn-link3">
       <div className="submit-btn-wrapper4">
                  <p>홈으로</p>
              </div>
                </Link>
    </div>
  );
};

export default Donationsuccess;
