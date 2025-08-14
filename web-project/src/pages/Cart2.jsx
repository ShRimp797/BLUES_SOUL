
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Cart2.css';

const Cart2 = () => {
  
  const navigate = useNavigate();
  const [stored, setStored] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem('cartProduct'));
    if (cartData) {
      setStored(cartData);
      setQuantity(cartData.quantity || 1);
    }
  }, []);

  const handleOrder = () => {
    localStorage.setItem('cartProduct', JSON.stringify({ ...stored, quantity }));
    navigate('/Order2');
  };

  const handleDelete = () => {
    localStorage.removeItem('cartProduct');
    setStored(null);
  };

  const increase = () => {
    if (quantity < 10) {
      setQuantity(prev => prev + 1);
    }
  };

  const decrease = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };


  const price = Number(stored?.price?.replace(/,/g, '')) || 0;
const qty = Number(quantity) || 0;
const totalPrice = price * qty;


    console.log('stored.price:', stored?.price);
    console.log('quantity:', quantity);



  if (!stored) {
    return (
      <div className="cart-box">
        <h1>장바구니가 비어있습니다.</h1>
      </div>
    );
  }


  return (
    <div className="cart2-box">
      <div className="title-cart">
        <p>장바구니</p>
      </div>

      <div className="cart-list">
        <div className="cart-list-info">
          <img src={stored.img} alt={stored.title} className='pro' style={{ marginBottom: '30px' }} />
          <p>{stored.title}</p>

          {/* 🔽 수량 조절 버튼 영역 */}
          <div className="quantity-control">
            <button onClick={decrease}>–</button>
            <span>{quantity} 개</span>
            <button onClick={increase}>+</button>
          </div>

          <p> {totalPrice.toLocaleString()} 원</p>
          <button className="cart2-delete-btn" onClick={handleDelete}>❌</button>
        </div>
      </div>

      <div className="order-info">
        <div className="order-info-p">
          <p>주문정보</p>
        </div>
        <div className="order-info-box">
          <p>상품명: {stored.title}</p>
          <p>개수: {quantity} 개</p>
          <p>가격: {totalPrice.toLocaleString()} 원</p>
        </div>
        <div className="order-info-total">
          <p>총가격</p>
         
              <p className="order-total">{totalPrice.toLocaleString()} 원</p>
          

         



          
        </div>
        
      </div>

      <div className="cart2-button">
        <button className="cart-order-btn" onClick={handleOrder}>결제하기</button>
      </div>
    </div>
  );
};

export default Cart2;


