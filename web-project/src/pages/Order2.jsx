
// 레이아웃 수정
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/order2.css';

const Order2 = () => {
  const [selectedPayment, setSelectedPayment] = useState(null);
  const navigate = useNavigate();
  const product = JSON.parse(localStorage.getItem('cartProduct'));

  const [user, setUser] = useState({
    name: '',
    phone: '',
    birth: '',
    email: '',
    postcode: '22321',
    address: '인천광역시 중구',
    detailAddress: '우현로 50번길 2',
    request: '문 앞에 놔주세요'
  });

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser({
        name: parsedUser.name || '홍길동',
        phone: parsedUser.phone || '010-1234-5678',
        birth: parsedUser.birth || '1990-01-01',
        email: parsedUser.email || 'example@email.com',
        postcode: '12345',
        address: parsedUser.address || '인천광역시 중구',
        detailAddress: parsedUser.detailAddress || '우현로 50번길 2',
        request: parsedUser.request || '문 앞에 놔주세요'
      });
    }
  }, []);

  const handleSubmit = () => {
    if (!selectedPayment) {
      alert("결제방식을 선택해주세요.");
      return;
    }

    const now = new Date();
    const formattedDateTime = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2,"0")}-${String(now.getDate()).padStart(2,"0")} ${String(now.getHours()).padStart(2,"0")}:${String(now.getMinutes()).padStart(2,"0")}:${String(now.getSeconds()).padStart(2,"0")}`;
    const orderNumber = Math.floor(100000000000 + Math.random() * 900000000000);

    const orderData = {
      ...product,
      date: formattedDateTime,
      orderNumber,
      paymentMethod: selectedPayment,
      customerInfo: user
    };

    localStorage.setItem('orderData', JSON.stringify(orderData));
    alert("주문이 완료되었습니다. 주문내역을 꼭 확인하세요!");
    navigate("/OrderDetaile", { state: { orderData } });
  };

  return (
    <div className="page-wrapper">
     

      <main className="page-content">
        <div className="order-container">
          <h1>결제하기</h1>

          <div className="order-form">
            {/* 좌측: 주문 상품 / 주문자 / 배송 / 쿠폰 */}
            <div className="left-section">
              {/* 주문 상품 정보 */}
              {product && (
                <div className="card product-card">
                  <h2>주문 상품 정보</h2>
                  <div className="card-body-product-info">
                    <img src={product.img} alt={product.title} />
                    <div className="product-text">
                      <p className="product-title">{product.title}</p>
                      <p className="product-meta">{product.size ? `${product.size}cm / ${product.quantity}개` : `${product.quantity}개`}</p>
                      <p className="product-price">{product.totalPrice}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* 주문자 정보 */}
              <div className="card user-card">
                <h2>주문자 정보</h2>
                <div className="card-body user-body">
                  <div className="user-info-left">
                    <p className="user-name">{user.name}</p>
                    <p className="user-phone">{user.phone}</p>
                    <p className="user-email">{user.email}</p>
                  </div>
               
                </div>
              </div>

              {/* 배송 정보 */}
              <div className="card delivery-card">
                <h2>배송 정보</h2>
                <div className="card-body-delivery">
                  <div className="card-body-delivery-p-box">

                  <p className="delivery-name">{user.name}</p>
                  <p className="delivery-phone">{user.phone}</p>
                  <p className="delivery-address">{user.address} {user.detailAddress}</p>
                
                  </div>
                  <div className="delivery-actions">
                    
                    
                    <div className="delivery-actions-op">


                    
                    <label>배송 메모</label>

                    <select className="delivery-select">
                      <option>배송메모를 선택해 주세요.</option>
                      <option>경비실에 맡겨주세요</option>
                      <option>문 앞에 놔주세요</option>
                      <option>배송전 연락주세요</option>
                    </select>

              
                    </div>
                  </div>
                </div>
              </div>
{/* 
              쿠폰/포인트 */}
              <div className="card coupon-card">
                <h2>쿠폰/포인트</h2>
                <div className="card-body coupon-body">
                  <div className="coupon-row">
                    <input className="input" type="text" placeholder="1,000" />
                    <button className="coupon-btn">쿠폰적용</button>
                  </div>
                  
                  <div className="coupon-row">
                    <input className="input" type="text" placeholder="0" />
                   
                    <button className="coupon-btn">전액사용</button>

                  </div>

                     
                    
                  <p className="point-info">보유 포인트 2,300<br/>5,000 포인트 이상 보유 및 10,000원 이상 구매시 사용 가능</p>
                </div>
              </div>
            </div>

            {/* 우측: 결제금액 / 결제수단 / 약관 */}
            <aside className="right-section">
              {/* 결제금액 요약
              <div className="card summary-card">
                <h2>최종 결제금액</h2>
                <div className="card-body summary-body">
                  <div className="summary-row"><span>상품가격</span><span className="summary-value">{product?.totalPrice || '0'}원</span></div>
                  <div className="summary-row"><span>쿠폰 할인</span><span className="summary-value">-1,000원</span></div>
                  <div className="summary-row"><span>포인트 사용</span><span className="summary-value">-0원</span></div>
                  <div className="summary-row"><span>배송비</span><span className="summary-value">+2,500원</span></div>
                  <div className="summary-divider" />
                  <div className="summary-total"><span>총 결제금액</span><span className="total-value">19,500원</span></div>
                  <p className="acc-point">700 포인트 적립예정</p>
                </div>
              </div> */}

              <div className="card-body summary-body">
  {product && (
    <>
      {/* 상품가격 */}
      <div className="summary-row">
        <span>상품가격</span>&nbsp;&nbsp;&nbsp;
        <span className="summary-value">{product.totalPrice}원</span>
      </div>

      {/* 배송비 */}
      <div className="summary-row">
        <span>배송비</span>&nbsp;&nbsp;&nbsp;
        <span className="summary-value">+2,500원</span>
      </div>

      <div className="summary-divider" />

      {/* 총 결제금액 계산 */}
      <div className="summary-total">
        <span>총 결제금액</span>&nbsp;&nbsp;&nbsp;
        <span className="total-value">
          {(() => {
            // totalPrice가 문자열이면 숫자로 변환
            const productPrice = parseInt(product.totalPrice.replace(/[^0-9]/g, '')) || 0;
            const deliveryFee = 2500;
            const total = productPrice + deliveryFee;
            return total.toLocaleString() + '원';
          })()}
        </span>
      </div>

      {/* 적립 포인트 */}
      <p className="acc-point">700 포인트 적립예정</p>
    </>
  )}
</div>


              {/* 결제 방법 */}
              <div className="card payment-card">
                <h2>결제 방법</h2>
                <div className="card-body">
                  <div className="pay-btn-2">
                    <label className="pay-option">
                      <input type="radio" name="pay" checked={selectedPayment==='카드'} onChange={() => setSelectedPayment('카드')} />
                      <span>신용카드</span>
                    </label>
                    <label className="pay-option">
                      <input type="radio" name="pay" checked={selectedPayment==='가상계좌'} onChange={() => setSelectedPayment('가상계좌')} />
                      <span>가상계좌</span>
                    </label>
                    <label className="pay-option">
                      <input type="radio" name="pay" checked={selectedPayment==='무통장입금'} onChange={() => setSelectedPayment('무통장입금')} />
                      <span>무통장 입금</span>
                    </label>
                    <label className="pay-option">
                      <input type="radio" name="pay" checked={selectedPayment==='핸드폰'} onChange={() => setSelectedPayment('핸드폰')} />
                      <span>핸드폰 결제</span>
                    </label>
                    <label className="pay-option">
                      <input type="radio" name="pay" checked={selectedPayment==='카카오페이'} onChange={() => setSelectedPayment('카카오페이')} />
                      <span>카카오페이</span>
                    </label>
                  </div>

                  <div className="bank-select">
                    <select>
                      <option>케이뱅크: 1234-56-78910 지나연</option>
                      <option>새마을금고: 1234-56-78910 지나연</option>
                    </select>
                    <input className="input" type="text" placeholder="입금자명 (미입력시 주문자명)" />
                  </div>

                  <div className="extra-option">
                    <label><input type="checkbox" /> 현금영수증 신청</label>
                  </div>
                </div>
              </div>

              {/* 약관 동의 + 결제 버튼 */}
              <div className="card agree-card">
                <div className="card-body agree-body">
                  <div className="agree-body-check">
                  <div className="agree-row"><label><input type="checkbox" /> 전체 동의</label></div>
                  <div className="agree-row small"><label><input type="checkbox" /> 구매조건 확인 및 결제진행에 동의</label></div>

                  </div>
                  <button className="order-btn" onClick={handleSubmit}>결제하기</button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

    
    </div>
  );
};

export default Order2;
