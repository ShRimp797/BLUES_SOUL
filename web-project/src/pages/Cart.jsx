import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/cart.css';

const Cart = () => {
  const navigate = useNavigate();
  const stored = JSON.parse(localStorage.getItem('cartProduct'));

  if (!stored) return <div className="cart-box"><h1>장바구니가 비어있습니다.</h1></div>;

  const handleOrder = () => navigate('/Order2');

  return (
    <div className="cart-box">
      <div className="c-title"><h1>장바구니</h1></div>
      <div className="product">
        <div className="product-box">
          <p><strong>제품명:</strong> {stored.title}</p>
          <p><strong>수량:</strong> {stored.quantity || 1}개</p>
          <p><strong>크기: 15cm</strong></p>
          <p><strong>총가격:</strong> {stored.price} 원</p>
          <img src={stored.img} alt={stored.title} className='pro'  style={{marginBottom: '30px'}}    />
          <button className="cart-btn">삭제하기</button>
        </div>
      </div>
      <button className="order-btn"   style={{
          marginTop: '30px', width: '500px', height: '50px',
         borderRadius: '8px', backgroundColor: '#1B3A4B',
          color: '#fff', fontSize: '20px', cursor: 'pointer'
     }} onClick={handleOrder}>주문하기</button>
    </div>
  );
};

export default Cart;