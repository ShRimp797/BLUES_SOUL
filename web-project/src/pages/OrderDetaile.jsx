

import React from 'react';
import { Link } from 'react-router-dom';
import './OrderDetaile.css'; // Assuming you have a CSS file for styling
const OrderDetaile = () => {
  const stored = JSON.parse(localStorage.getItem('cartProduct'));

  // const totalPrice = stored.totalPrice || 
  // ((Number(stored.price?.replace(/,/g, '')) || 0) * (Number(stored.quantity) || 1)).toLocaleString() + ' 원';


  if (!stored) return (
    <div className="cart-box">
      <h1>주문정보가 없습니다.</h1>
    </div>
  );

  return (
    <div className="cart-box">
      <div className="c-title"><h1>주문내역</h1></div>
      
      <div className="product">
        <div className="product-box">
          <p><strong>제품명:</strong> {stored.title}</p>
          <p><strong>수량:</strong> {stored.quantity || 1}개</p>
          <p><strong>크기:</strong> {stored.size || '미선택'}cm </p>
          <p><strong>총가격:</strong> {stored.totalPrice || '0 원'}</p>
          <p><strong>주문번호:</strong> {Math.floor(Math.random() * 1000000000)}</p>
          
          <img src={stored.img} alt="제품" className="pro" style={{marginBottom: '30px'}} />

          <button className="cart-btn" onClick={() => {
            localStorage.removeItem('cartProduct');
            window.location.reload();
          }}>주문취소</button>

          <Link to = "/OrderDetaile_2" style={{margin: '0'}}><button className="order-detaile"
           >주문상세</button></Link>
        </div>
      </div>

      <Link to="/">
        <button className="order-btn" style={{
          marginTop: '30px',
          width: '500px',
          height: '50px',
          borderRadius: '8px',
          backgroundColor: '#1B3A4B',
          color: '#fff',
          fontSize: '20px',
          cursor: 'pointer'
        }}>
          홈으로 가기
        </button>
      </Link>
    </div>
  );
};

export default OrderDetaile;
