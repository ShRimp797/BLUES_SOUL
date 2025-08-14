

// 수정 팝업

// 수량조절버튼포함
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../css/ProductDetail.css';

function ProductDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state || {};

  if (!product) return <div>상품 정보가 없습니다.</div>;

  const [quantity, setQuantity] = useState(1);

  const handleBuy = () => {
    const size = document.getElementById('size')?.value;

    if (!size) {
      alert('옵션을 선택해 주세요.');
      return;
    }

    localStorage.setItem('cartProduct', JSON.stringify({ 
      ...product, 
      quantity, 
      size,
      totalPrice: totalPrice.toLocaleString() + ' 원'
    }));

    navigate('/Order2');
  };

  const handleCart = () => {
    const size = document.getElementById('size')?.value;

    if (!size) {
      alert('옵션을 선택해 주세요.');
      return;
    }

    localStorage.setItem('cartProduct', JSON.stringify({ 
      ...product, 
      quantity, 
      size,
      totalPrice: totalPrice.toLocaleString() + ' 원'
    }));

    navigate('/Cart2');
  };

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(prev => prev - 1);
  };

  const handleIncrease = () => {
    if (quantity < 10) setQuantity(prev => prev + 1);
  };

  const totalPrice = Number(String(product.price).replace(/,/g, '')) * quantity;

  return (
    <div className="all">
      <div className="product-detail">
        <div className="item-img">
          <img src={product.img} alt={product.title} />
        </div>
        <div className="item-info">
          <div className="title" style={{ fontWeight: 'bold' }}>{product.title}</div>

          <span className="line-lg"></span>

          <div className="txt-group">
            <div className="item">
              <div className="txt-pt">{product.price} 원</div>
            </div>
          </div>

          
          <p style={{ color: '#aaa', fontWeight: '400' }}>상품을 구매하면 {product.animal}에게 기부가 되요!</p>

          <span className="line-lg"></span>

          <div className="txt-group">
            <div className="item"><span>옵션</span></div>
            <div className="item">
              <select name="size" id="size">
                <option value="">크기선택 - 제품별 옵션을 확인해주세요</option>
                <option disabled>-------- 키링선택 옵션 --------</option>
                <option value="10">10cm</option>
                <option value="15">15cm</option>
                <option disabled>-------- 인형선택 옵션--------</option>
                <option value="25">25cm</option>
                <option value="35">35cm</option>
                <option value="50">50cm</option>
                <option value="75">75cm</option>
                <option value="95">95cm</option>
              </select>
            </div>
          </div>

          {/* ✅ 수량 조절 UI */}
          <div className="txt-group">
            <div className="item"><span>수량</span></div>
            <div className="item-quantity-control">
              <button type="button" onClick={handleDecrease}>–</button>
              <input
                type="text"
                value={quantity}
                readOnly
                className="quantity-input"
              />
              <button type="button" onClick={handleIncrease}>+</button>
            </div>
          </div>
          <p className="limit-text">※ 1인당 최대 10개까지만 구매 가능합니다.</p>

          <span className="line-lg"></span>

          <div className="txt-group">
            <div className="item"><span className="txt-pt">최종가격</span></div>
            <div className="item"><span className="txt-pt">{totalPrice.toLocaleString()} 원</span></div>
          </div>

          <div className="txt-group-2">
            <div className="item"><button className="btn-2" onClick={handleBuy}>구매하기</button></div>
            <div className="item-flex"><button className="btn-2" onClick={handleCart}>장바구니</button></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
