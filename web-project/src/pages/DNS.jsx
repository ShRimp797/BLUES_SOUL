
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import '../css/DNS.css';

const DNS = () => {
  const location = useLocation();
  const { type, data, user} = location.state || {};
    const userName = JSON.parse(localStorage.getItem('user'))?.name || '미등록';
  if (!data) {
    return (
      <div className="D-D">
        <h1>상세 정보</h1>
        <p>정보가 없습니다.</p>
        <Link to="/"><button className="submit-btn-link3">홈으로</button></Link>
      </div>
    );
  }

  return (
    <div className="D-D-3">
      <div className="D-D2">
        <div className="D-D2_info">
          <p className="d2-title">{type === 'order' ? '주문 상세' : '후원 상세'}</p>
          <div className="D-D2_line"></div>
        </div>

        {type === 'order' && (
          <div className="D-info-3">
            <div className="D-info-name">
              <p>구매자명</p>
              <h4>{userName}</h4>
            </div>
             

            <div className="D-DATE">
              <p>구매일자</p>
              <h4>{data.date}</h4>
            </div>
            <div className="D-name-3">
              <p>제품명</p>
              <h4>{data.title}</h4>
            </div>
            <div className="D-QUANTITY">
              <p>구매 수량</p>
              <h4>{data.quantity} 개</h4>
            </div>
            <div className="D-SIZE">
              <p>제품크기</p>
              <h4>{data.size} cm</h4>
            </div>
            <div className="D-TOTAL-PRICE">
              <p>총금액</p>
              <h4>{data.totalPrice}</h4>
            </div>
            <div className="D-ORDER-NO">
              <p>주문번호</p>
              <h4>{data.orderNumber}</h4>
            </div>
            <div className="D-PAYMENT">
              <p>결제방법</p>
              <h4>{data.paymentMethod}</h4>
            </div>
          </div>
        )}

        {type === 'donation' && (
          <div className="D-info-3">
            <div className="D-info-name">
              <p>후원자명</p>
              <h4>{data.userName}</h4>
            </div>
           
            <div className="D-DATE">
              <p>신청일</p>
              <h4>{data.date}</h4>
            </div>
            <div className="D-NAME">
              <p>상품명</p>
              <h4>{data.option}</h4>
            </div>
            <div className="D-TOTAL-PRICE">
              <p>후원금액</p>
              <h4>{data.amount}</h4>
            </div>
            <div className="D-ORDER-NO">
              <p>후원번호</p>
              <h4>{data.donationNumber}</h4>
            </div>
            <div className="D-PAYMENT">
              <p>결제방법</p>
              <h4>{data.paymentMethod}</h4>
            </div>
          </div>
        )}

        <div className="btn-box">
          <Link to="/" className="submit-btn-link9">
            <div className="submit-btn-wrapper9"><p>홈으로</p></div>
          </Link>
          <Link to="/Donationsuccess" className="submit-btn-link9">
            <div className="submit-btn-wrapper9"><p>돌아가기</p></div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DNS;
