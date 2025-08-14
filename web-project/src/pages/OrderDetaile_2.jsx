
import React from 'react'
import { Link } from 'react-router-dom'
import './OrderDetail_2.css'

const OrderDetaile_2 = () => {
  const stored = JSON.parse(localStorage.getItem('cartProduct'));

  if (!stored) return (
    <div className="D-D">
      <h1>주문내역 상세</h1>
      <p>주문정보가 없습니다.</p>
    </div>
  );

  // 오늘 날짜를 YYYY-MM-DD로
  const today = new Date();
  const formattedDate = today.toISOString().split('T')[0];

  return (
    <div className="D-D-3">
      
      <div className="D-D2" >
        <div className="D-D2_info">
          <p className='d2-title'>
            주문상세
          </p>
          <p className='d2-price'>{stored.totalPrice || '0 원'}</p>
          <p style={{fontWeight:'lighter', color: '#727272ff', paddingTop: '5px'}}>* 주문정보와 후원현황을 확인하세요</p>
              <div className="D-D2_line"></div>

        </div>
      <div className="D-info-3" >
        <div className="D-id-3">
          <p>구매일자</p>
          <h4>{formattedDate}</h4>
        </div>
        <div className="D-name-3" >
            <p>제품명</p>
          <div className="name-3">
            <h4>{stored.title}</h4>
          </div>
        </div>
        
        <div className="D-number-3" >
          <p>구매 수량</p>
          <div className="number-box-3">
            <h4>{stored.quantity || 1} 개</h4>
          </div>
        </div>

        <div className="D-id-3">
          <p>제품크기</p>
          <h4>{stored.size || '미선택'} cm</h4>
        </div>

        <div className="D-post-3">
          <p>총가격</p>
          <h4>{stored.totalPrice || '0 원'}</h4>
        </div>

        <div className="D-address-3" >
          <p>주문번호</p>
          <h4>{stored.orderNumber || Math.floor(Math.random() * 1000000000)}</h4>
        </div>
        <div className="donation-section">
        <div className="Done-line"></div>
        <div className="D-password-3">
          <p>후원처리</p>
           <h4>{stored.title}</h4>
        </div>
         <div className="D-post-3">
          <p>후원금액</p>
          <h4>{stored.totalPrice || '0 원'}</h4>
        </div>
         <div className="D-address-3" >
          <p>후원번호</p>
          <h4>{stored.orderNumber || Math.floor(Math.random() * 1000000000)}</h4>
        </div>
        </div>
      </div>
        <div className="submit-btn-wrapper3"  >
          <Link to="/" className="submit-btn-link2">
            <p>홈으로</p>
          </Link>
        </div>
      
      </div>


    </div>
  )
}

export default OrderDetaile_2
