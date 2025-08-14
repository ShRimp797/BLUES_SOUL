


import React from 'react';
import { Link } from 'react-router-dom';
import '../css/DNS.css';
const DNS = () => {
  const stored = JSON.parse(localStorage.getItem('orderData'));

  if (!stored) {
    return (
      <div className="D-D">
        <h1>주문내역 상세</h1>
        <p>주문정보가 없습니다.</p>
      </div>
    );
  }

  return (
    <div className="D-D-3">
      <div className="D-D2">
        <div className="D-D2_info">
          <p className='d2-title'>후원상세</p>
          <p className='d2-price'>{stored.totalPrice || '0 원'}</p>
          <p style={{fontWeight:'lighter', color: '#727272ff', paddingTop: '5px'}}>
            * 후원정보를 확인하세요
          </p>
          <div className="D-D2_line"></div>
        </div>

        <div className="D-info-3">
          <div className='D-DATE'>
            <p>구매자명</p>
            <h4>USER</h4>
          </div>
          <div className='D-DATE'>
            <p>구매일자</p>
            <h4>{stored.date}</h4>
          </div>
          <div className='D-info-name'>
            <p>제품명</p>
            <h4>{stored.title}</h4>
          </div>
          <div className='D-QUANTITY'>
            <p>구매 수량</p>
            <h4>{stored.quantity} 개</h4>
          </div>
          <div className='D-SIZE'>
            <p>제품크기</p>
            <h4>{stored.size} cm</h4>
          </div>
          <div className='D-TOTAL-PRICE'>
            <p>후원금액</p>
            <h4>{stored.totalPrice}</h4>
          </div>
          <div className='D-ORDER-NO'>
            <p>주문번호</p>
            <a href="" style={{textDecoration: 'none', color: '#000'}}><h4>{stored.orderNumber}</h4></a>
          </div>
          <div className='D-PAYMENT'>
            <p>결제방법</p>
            <h4 style={{color: '#0051e9ff'}}>{stored.paymentMethod}</h4>
          </div>
        </div>
    <div className="btn-box">

          <Link to="/" className="submit-btn-link3">
        <div className="submit-btn-wrapper4">
            <p>홈으로</p>
        </div>
          </Link>
          <Link to="/Donationsuccess" className="submit-btn-link3">
        <div className="submit-btn-wrapper4">
            <p>돌아가기</p>
        </div>
          </Link>

    </div>
      </div>
    </div>
  );
};

export default DNS;
